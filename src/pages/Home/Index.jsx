import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Title } from "./Styles";
import { useEffect, useState } from "react";
import { api } from "../../services/Api";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    function handleClickCreateNewNote(){
        navigate('/new');
    }

    function handleClickShowNote(node_id){
        navigate(`/preview/${node_id}`);
    }
    
    useEffect(() => {
        async function fetchSearchNotes(){
            try {
                const response = await api.get(`notes/?search=${search}`);
                setNotes(response.data);

            } catch (error) {
                if(error.response) {
                    return alert(error.response.data.message);
                }else{
                    return alert('Ocorreu um erro ao pesquisar notas');
                }
            }   
        }
        fetchSearchNotes();
    },[search])

    useEffect(() => {
        async function fetchShowNotes(){
            try {
                const response = await api.get('notes/?search');
                setNotes(response.data);
            
            } catch (error) {
                if(error.response) {
                    return alert(error.response.data.message);
                }else{
                    return alert('Ocorreu um erro ao pesquisar notas');
                }
            }
        }
        fetchShowNotes();
    },[]);

    return (
        <Container>
            <Header onChange={e => setSearch(e.target.value)}/>
            <Title>
                <h2>Meus Filmes</h2>
                
                <Button 
                    onClick={handleClickCreateNewNote} 
                    title={"Adicionar filme"} 
                    icon={AiOutlinePlus}
                />
                
            </Title>
            <main className="content">
                {
                    notes && notes.map((note, index) => {
                        return (
                            <Frame 
                                key={String(index)} 
                                note={note}
                                onClick={() => handleClickShowNote(note.id)}
                            />            
                        );
                    })
                }

            </main>
        </Container>
    );
}