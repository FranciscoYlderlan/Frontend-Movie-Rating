import {Input} from "../../components/Input";
import {TextLink} from "../../components/TextLink";
import {Button} from "../../components/Button";
import {BiLockAlt} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";

import { Container, Image } from "./Styles.js";


export function SignIn() {
    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <form action="">
                    <Input  placeholder="E-mail" type="email" required icon={AiOutlineMail}/>
                    <Input  placeholder="Senha" type="password"  required icon={BiLockAlt}/>
                </form>
                <Button title="Entrar" type="button"/>
                <TextLink className="link" title="Criar conta" />
            </main>
            
            <Image/>
        </Container>
    );
}