import {Input} from "../../components/Input";
import {TextLink} from "../../components/TextLink";
import {Button} from "../../components/Button";
import {BiLockAlt} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { Container, Image } from "./styles.js";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth.jsx";


export function SignIn() {
    const { signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    
    function handleSignIn() {
        setIsLoading(true);
        signIn({ email, password }).then(() => setIsLoading(false));
    }

    return (
        <Container>
            {isLoading && <Loading/>}
            <main>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <form action="">
                    <Input  
                        placeholder="E-mail" 
                        type="email" 
                        icon={AiOutlineMail}
                        required
                        onChange = { (e) => setEmail(e.target.value) } 
                    />
                    <Input  
                        placeholder="Senha" 
                        type="password" 
                        icon={BiLockAlt}
                        required
                        onChange = { (e) => setPassword(e.target.value) }  
                    />
                </form>
                <Button title="Entrar" onClick = { handleSignIn }/>
                <TextLink onClick={() => navigate('/register')} className="link" title="Criar conta" />
            </main>       
            <Image/>
        </Container>
    );
}