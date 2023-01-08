import { Container } from "./Styles.js";
import { BiArrowBack} from "react-icons/bi";
import { Header } from "../../components/Header";

export function Preview () {
    return (
        <Container>
            <Header/>
            <TextLink title="Voltar" icon={BiArrowBack}/>
            <div>
                <h1>Interestelar</h1>
                <StarRating/>
            </div>
            <div>
                <span></span>
                <span></span>
            </div>

            

        </Container>
    );
}