import { TextLink } from "../../components/TextLink";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { BiArrowBack, BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";

import { Container, Head, Avatar, Form } from "./Styles";

export function Profile() {
    return(
        <Container>
            <Head>
                <TextLink to="/" title="Voltar" icon={BiArrowBack}/>
            </Head>
            <Avatar>   
                <img src="https://github.com/FranciscoYlderlan.png" alt="Foto do usuário" />
                <label htmlFor="avatar">
                    <FiCamera size={20}/>
                    <input type="file"id="avatar"/>
                </label>
            </Avatar>
            <Form>
                <Input  placeholder="Nome" type="text" required icon={RxPerson}/>
                <Input  placeholder="E-mail" type="email" required icon={AiOutlineMail}/>
                <Input  placeholder="Senha atual" type="password"  required icon={BiLockAlt}/>
                <Input  placeholder="Nova senha" type="password"  required icon={BiLockAlt}/>
                <Button to="/" title="Salvar" type="button"/>
            </Form>
        </Container>
    );
}