import Input from "../../components/Input";
import TextLink from "../../components/TextLink";
import {BiLockAlt} from "react-icons/bi";
import {FiMail} from "react-icons/fi";

import { Container, Image } from "./Styles.js";


export function SignIn() {
    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <form action="">
                    <Input  placeholder="Email" icon={FiMail}/>
                    <Input  placeholder="Senha" icon={BiLockAlt}/>
                    <Button type="button">Entrar</Button>
                </form>
                <TextLink title="Criar conta"/>
            </main>
            <Image/>
        </Container>
    );
}