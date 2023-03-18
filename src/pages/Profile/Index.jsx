import { TextLink } from "../../components/TextLink";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { BiArrowBack, BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { api } from "../../services/Api";
import { useAuth } from "../../hooks/auth";

import { Container, Head, Avatar, Form } from "./Styles";
import { useEffect, useState } from "react";


export function Profile() {

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    function handleUpdateProfile() {
        const userUpdated = Object.assign(user,{
            name,
            email,
            password,
            newPassword
        });
        updateProfile({ user: userUpdated });
    }

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
                <Input  
                    placeholder="Nome" 
                    type="text" 
                    icon={RxPerson}
                    required 
                    value = {name}
                    onChange = { e => setName(e.target.value) }
                />
                <Input  
                    placeholder="E-mail" 
                    type="email" 
                    icon={AiOutlineMail}
                    required 
                    value = {email}
                    onChange = { e => setEmail(e.target.value) }
                />
                <Input  
                    placeholder="Senha atual" 
                    type="password" 
                    icon={BiLockAlt}
                    required 
                    onChange = { e => setPassword(e.target.value) }
                    />
                <Input  
                    placeholder="Nova senha" 
                    type="password" 
                    icon={BiLockAlt}
                    required 
                    onChange = { e => setNewPassword(e.target.value) }
                />
                <Button 
                    title="Salvar" 
                    type="button"
                    onClick= {handleUpdateProfile}    
                />
            </Form>
        </Container>
    );
}