import { Frame } from "../../components/Frame";
import {Header} from "../../components/Header";
import { Button } from "../../components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Title } from "./Styles";
export function Home() {
    return (
        <Container>
            <Header/>
            <Title>
                <h2>Meus Filmes</h2>
                <Button title={"Adicionar filme"} icon={AiOutlinePlus}/>
            </Title>
            <main>
                <Frame/>
                <Frame/>
                <Frame/>
                <Frame/>
            </main>
        </Container>
    );
}