import { BiSearchAlt } from "react-icons/bi";
import { Input } from "../Input";
import { Container, Logo, Account } from "./Styles.js";
import { useAuth } from "../../hooks/auth";

export function Header() {

    const { Logout } = useAuth();

    function handleLogout() {

        
        Logout();

    }

    return (
        <Container>
            <Logo to="/">Rocketseat</Logo>
            <Input placeholder="Pesquisar pelo título" icon={BiSearchAlt}/>
            <Account>

                <div>
                    <span>Francisco Ylderlan</span>
                    <a onClick={handleLogout}>Sair</a>
                </div>
                <img src="https://github.com/FranciscoYlderlan.png" alt="Foto do usuário" />
            </Account>
        </Container>
    );
}