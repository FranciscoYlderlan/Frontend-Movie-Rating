import { BiSearchAlt} from "react-icons/bi";
import { TextLink } from "../TextLink";
import { Input } from "../Input";
import { Container } from "./Styles.js";
 

export function Header() {
    return (
        <Container>
            <h2>Rocketseat</h2>
            <Input placehoder="Pesquisar pelo título" icon={BiSearchAlt}></Input>
            <div>
                <div class="name">
                    <span></span>
                    <TextLink name={"Sair"}></TextLink>
                </div>
                <img src="" alt="" />
            </div>
        </Container>
    );
}