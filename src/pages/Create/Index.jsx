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

export function Create() {
    
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    const [noteId, setNoteId] = useState("");

    const navigate = useNavigate();

    function handleComeBack () {
        navigate(-1);
    }

    function handleSetRating(value) {
        if(value >= 5) {
            setRating(5); 
        }else if(value < 0) {
            setRating(0);  
        }else{
            setRating(value);
        }
    }

    function handleAddTag(){
        setTags(prevState => [...prevState,newTag]);
        setNewTag('');
    }
    function handleRemoveTag(value) {
        setTags(prevState => prevState.filter(tag => tag != value));
    }

    async function handleSubmitNote() {
        try {
            if(!title || !description || !rating){
                return alert('Preencha todos os campos.')
            }
            
            if(newTag) return alert('Tag informada não foi adicionada.');
                
            const response =  await api.post('notes/', { title, description, rating, tags});

            setNoteId(response.data.note_id)
            
            alert('Nota cadastrada com sucesso!');
            
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            }else{
                alert('Ocorreu um erro ao cadastrar nota.');
            }
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
                    alert('Nota excluída com sucesso!');
                }
            }else{
                alert('Nota ainda não foi cadastrada');
            }
            
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            }else{
                alert('Ocorreu um erro ao deletar nota');
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
                            onChange={e => handleSetRating(e.target.value)}
                            required
                        />
                    </div>
                    <TextArea 
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
                        <Button onClick={handleSubmitNote} title="Salvar alterações"/>
                    </div>
                </form>
            </main>
        </Container>
    );
};