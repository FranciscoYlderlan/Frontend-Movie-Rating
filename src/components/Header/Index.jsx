import { BiSearchAlt} from "react-icons/bi";
import { Input } from "../Input";
import { Container } from "./Styles.js";
 

export function Header() {
    return (
        <Container>
            <h2>Rocketseat</h2>
            <Input placeholder="Pesquisar pelo título" icon={BiSearchAlt}/>
            <div>
                <div>
                    <span>Francisco Ylderlan</span>
                    <a href="#" target="_blank">Sair</a>
                </div>
                <img src="https://github.com/FranciscoYlderlan.png" alt="Foto do usuário" />
            </div>
        </Container>
    );
}