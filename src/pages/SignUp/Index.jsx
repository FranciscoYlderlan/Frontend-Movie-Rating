import { useState } from "react";
import { api } from "../../services/Api";

import {Input} from "../../components/Input";
import {TextLink} from "../../components/TextLink";
import {Button} from "../../components/Button";
import { Container, Image } from "./Styles.js";

import {BiLockAlt, BiArrowBack} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { useAuth } from "../../hooks/auth";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const data = useAuth();

    console.log(data);
    
    function handleSignUp() {
        if (!name || !email || !password) {
            alert("Preencha todos os campos");
            return; 
        }
        api.post("/users", {name, email, password})
        .then(() => alert("Usuário cadastrado com sucesso!"))
        .catch(error => {
            if(error.response){
                alert(error.response.message);
            } else {
                alert("Ocorreu um erro ao cadastrar usuário");
            }
        });
    }


    return (
        <Container>
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <form action="">
                    <Input  
                        placeholder="Nome" 
                        type="text" 
                        required 
                        icon={RxPerson}
                        onChange = {e => setName(e.target.value)}
                    />
                    <Input  
                        placeholder="E-mail" 
                        type="email" 
                        required 
                        icon={AiOutlineMail}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <Input  
                        placeholder="Senha" 
                        type="password"  
                        required 
                        icon={BiLockAlt}
                        onChange = {e => setPassword(e.target.value)}
                    />
                </form>
                
                <Button 
                    title="Cadastrar" 
                    type="button"
                    onClick = {handleSignUp}
                />
                <TextLink to="/" className="link" title="Voltar para o login" icon={BiArrowBack}/>
            </main>
            <Image/>
        </Container>
    );
}