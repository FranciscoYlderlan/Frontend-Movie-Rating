import { BiSearchAlt} from "react-icons/bi";
import { TextLink } from "../TextLink";
import { Input } from "../Input";
import { Container } from "./Styles.js";
 

export function Header() {
    return (
        <Container>
            <h2>Rocketseat</h2>
            <Input placeholder="Pesquisar pelo título" icon={BiSearchAlt}/>
            <div>
                <div>
                    <span></span>
                    <a href="#" target="_blank">Sair</a>
                </div>
                <img src="" alt="Foto do usuário" />
            </div>
        </Container>
    );
}