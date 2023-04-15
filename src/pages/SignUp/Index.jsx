import { useState } from "react";
import { api } from "../../services/Api";

import { useNavigate } from "react-router-dom";

import {Input} from "../../components/Input";
import {TextLink} from "../../components/TextLink";
import {Button} from "../../components/Button";
import { Container, Image } from "./Styles.js";

import {BiLockAlt, BiArrowBack} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleComeBack () {
        navigate(-1);
    }
    
    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos.");
        }
        api.post("/users", {name, email, password})
        .then(() => { 
            return alert("Usuário cadastrado com sucesso!");
            navigate('/');
        })
        .catch(error => {
            if(error.response){
                return alert(error.response.data.message);
            } else {
                return alert("Ocorreu um erro ao cadastrar usuário.");
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
                <TextLink onClick={handleComeBack} className="link" title="Voltar para o login" icon={BiArrowBack}/>
            </main>
            <Image/>
        </Container>
    );
}