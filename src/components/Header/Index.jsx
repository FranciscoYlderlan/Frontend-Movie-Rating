import { BiSearchAlt } from "react-icons/bi";
import { Input } from "../Input";
import { Container, Logo, Account } from "./Styles.js";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/Api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'; 

export function Header() {
    
    const navigate = useNavigate();
    const { Logout, user } = useAuth();
    
    const avatarURL =  user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    function handleLogout() {
        Logout();
    }

    function handleClickProfile(){    
        navigate('/profile');
    }

    return (
        <Container>
            <Logo to="/">Rocketseat</Logo>
            <Input placeholder="Pesquisar pelo título" icon={BiSearchAlt}/>
            <Account>
                <div>
                    <span onClick={handleClickProfile}>Francisco Ylderlan</span>
                    <a onClick={handleLogout}>Sair</a>
                </div>
                <img 
                    onClick={handleClickProfile} 
                    src= {avatarURL} 
                    alt="Foto do usuário" 
                />
            </Account>
        </Container>
    );
}