import { BiArrowBack} from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Header } from "../../components/Header";
import { TextLink } from "../../components/TextLink";
import {StarRating} from "../../components/StarRating"
import { Tag } from "../../components/Tag";
import { List } from "../../components/List";
import { Container } from "./Styles.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'; 
import { formatterDate } from "../../utils/formatterDate";
import { api } from "../../services/Api";
export function Preview () {
    const { user } = useAuth();
    const avatarURL =  user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    
    const [note,setNote] = useState({});

    const params = useParams();

    useEffect(() => {
        async function fetchShowNote(){
            try {
                const response = await api.get(`notes/preview/${params.id}`);
                
                const [date,time] = formatterDate(response.data.updated_at);

                response.data.updated_at = `${date} às ${time}`;
                
                setNote(response.data);
            
            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                }else{
                    alert('Ocorreu um erro ao visualizar nota');
                }
            }
        }
        fetchShowNote();
    },[]);
    return (
        <Container>
            <Header/>
            {
                note &&
                <main>
                    <TextLink to="/" title="Voltar" icon={BiArrowBack}/>
                    <header>
                        <div className="title">
                            <h2>{note.title}</h2>
                            <StarRating numStars={note.rating}/>
                        </div>
                        <div className="status">
                            <span>
                                <img src={avatarURL} alt="Foto do usuário" />
                                Por {user.name}
                            </span>
                            <span>
                                <AiOutlineClockCircle className="clock" size={18}/> 
                                {/* 23/05/22 às 08:00 */}
                                {note.updated_at}
                            </span>
                        </div>
                        <List className="tags">
                            {
                                note.tags && note.tags.map((tag, index) => {
                                    return (
                                        <li key={String(index)}>
                                            <Tag title= {tag.name}/>
                                        </li>             
                                    )
                                })
                            }
                        </List>
                    </header>
                    <div className="desc">
                            {note.description}
                    </div>
                </main>
            }
            

        </Container>
    );
}