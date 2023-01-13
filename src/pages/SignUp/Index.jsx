import {Input} from "../../components/Input";
import {TextLink} from "../../components/TextLink";
import {Button} from "../../components/Button";
import {BiLockAlt, BiArrowBack} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { Container, Image } from "./Styles.js";


export function SignUp() {
    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <form action="">
                    <Input  placeholder="Nome" type="text" required icon={RxPerson}/>
                    <Input  placeholder="E-mail" type="email" required icon={AiOutlineMail}/>
                    <Input  placeholder="Senha" type="password"  required icon={BiLockAlt}/>
                </form>
                <Button title="Cadastrar" type="button"/>
                <TextLink to="/" className="link" title="Voltar para o login" icon={BiArrowBack}/>
            </main>
            <Image/>
        </Container>
    );
}