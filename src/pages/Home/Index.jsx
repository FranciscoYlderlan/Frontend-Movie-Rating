import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Title } from "./Styles";
import { useEffect, useState } from "react";
import { api } from "../../services/Api";

export function Home() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');

    
    
    useEffect(() => {
        function fetchSearchNotes(){
            
        }
    },[search])


    useEffect(() => {
        async function fetchShowNotes(){
            try {
                const response = await api.get('notes/');
                setNotes(response.data);
            
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                }else{
                    alert('Ocorreu um erro ao exibir notas');
                }
            }
        }
        fetchShowNotes();
    },[]);
    return (
        <Container>
            <Header onChange={e => handleSearchNotes(e)}/>
            <Title>
                <h2>Meus Filmes</h2>
                
                <Button to="/new" title={"Adicionar filme"} icon={AiOutlinePlus}/>
                
            </Title>
            <main>
                {
                    notes && notes.map((note, index) => {
                        return (
                            <Frame 
                                key={String(index)} 
                                note={note}
                            />            
                        );
                    })
                }

            </main>
        </Container>
    );
}