import { BiSearchAlt } from "react-icons/bi";
import { Input } from "../Input";
import { Container, Logo, Account } from "./Styles.js";
 

export function Header() {
    return (
        <Container>
            <Logo to="/">Rocketseat</Logo>
            <Input placeholder="Pesquisar pelo título" icon={BiSearchAlt}/>
            <Account to="/profile">
                <div>
                    <span>Francisco Ylderlan</span>
                    <a href="#" target="_blank">Sair</a>
                </div>
                <img src="https://github.com/FranciscoYlderlan.png" alt="Foto do usuário" />
            </Account>
        </Container>
    );
}