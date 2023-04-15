import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Title } from "./Styles";
import { useEffect, useState} from "react";
import { api } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Home() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    const { isTokenAuthenticated } = useAuth();

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
                    alert(error.response.data.message);
                    isTokenAuthenticated(error.response.status);
                }else{
                    alert('Ocorreu um erro ao pesquisar notas');
                }
                return;
            }   
        }
        
        fetchSearchNotes();
        

    },[search]);

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