import { BiArrowBack} from "react-icons/bi";

import { Header } from "../../components/Header";
import { TextLink } from "../../components/TextLink";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Markup } from "../../components/Markup";

import { Container, Title, MarkArea } from "./Styles";

import { useState } from "react";
import { api } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Create() {
    
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    const [noteId, setNoteId] = useState("");

    const { isTokenAuthenticated } = useAuth();

    const navigate = useNavigate();

    function handleComeBack () {
        navigate(-1);
    }

    function handleSetRating(e) {
        
        const { value } = e.target;
    
        if(value >= 5) {
            setRating(5); 
        }else if(value < 0) {
            setRating(0);  
        }else{
            setRating(value);
        }
        
    }

    function handleAddTag(){

        if(!newTag) return alert("Informe o nome do marcador para adicioná-lo.");

        if(tags.filter(tag => tag.toLowerCase() === newTag.toLowerCase()).length > 0){
            return alert('Tag já adicionada.');
        }

        setTags(prevState => [...prevState,newTag]);
        setNewTag('');
    }
    function handleRemoveTag(value) {
        setTags(prevState => prevState.filter(tag => tag != value));
    }

    async function handleSubmitNote(event) {
        event.preventDefault();
        try {
            if(!title || !description || !rating){
                return alert('Preencha todos os campos.')
            }
            
            if(newTag) return alert('Tag informada não foi adicionada.');
                
            const response =  await api.post('notes/', { title, description, rating, tags});

            setNoteId(response.data.note_id)
            
            alert('Nota cadastrada com sucesso!');

            handleComeBack();
            return;
            
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
                isTokenAuthenticated(error.response.status);
                handleComeBack();
            }else{
                alert('Ocorreu um erro ao cadastrar nota.');
            }
            return;
        }
    }

    async function handleDeleteNote() {
        try {
            if(noteId) {
                if(window.confirm('Tem certeza que deseja excluir nota já cadastrada?')){
                    await api.delete(`notes/${noteId}`);
                    setTitle('');
                    setRating(0);
                    setDescription('');
                    setTags([]);
                    setNoteId('');
                    return alert('Nota excluída com sucesso!');
                }
            }else{
                return alert('Nota ainda não foi cadastrada');
            }
            
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
                isTokenAuthenticated(error.response.status);
                return;
                
            }else{
                return alert('Ocorreu um erro ao deletar nota');
            }
        }
    }
    
    return (
        <Container>
            <Header/>
            <Title>
                <TextLink onClick={handleComeBack} title="Voltar" icon={BiArrowBack}/>
                <h2>Novo filme</h2>
            </Title>
            <main className="content">
                <form action="">
                    <div className="col-2">
                        <Input 
                            placeholder="Titulo"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                        <Input
                            type='number' 
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                            onChange={e => handleSetRating(e)}
                            required
                        />
                    </div>
                    <TextArea
                        className='content' 
                        placeholder="Observações"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <h3>Marcadores</h3>
                    <MarkArea>
                        {
                            tags && tags.map( (tag, index) => {
                                return (
                                    <Markup 
                                        key={String(index)} 
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)} 
                                    />
                                )
                            })
                        }
                        <Markup 
                            isNew 
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </MarkArea>
                    <div className="col-2">
                        <Button onClick={handleDeleteNote} title="Excluir filme"/>
                        <Button onClick={e => handleSubmitNote(e)} title="Salvar alterações"/>
                    </div>
                </form>
            </main>
        </Container>
    );
};