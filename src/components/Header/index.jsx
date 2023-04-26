import { BiSearchAlt } from "react-icons/bi";
import { Input } from "../Input";
import { Container, Logo, Account } from "./styles.js";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Header({...rest}) {
    
    const navigate = useNavigate();
    
    const { Logout, user } = useAuth();
    
    const avatarURL =  user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    function handleLogout() {
        Logout();
        navigate('/');
    }

    function handleClickProfile(){    
        navigate('/profile');
    }

    return (
        <Container>
            <Logo onClick={() => navigate('/') }>Rocketseat</Logo>
            <Input 
                placeholder="Pesquisar por Nota" 
                icon={BiSearchAlt} 
                {...rest}
            />
            <Account>
                <div>
                    <span onClick={handleClickProfile}>{user.name}</span>
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