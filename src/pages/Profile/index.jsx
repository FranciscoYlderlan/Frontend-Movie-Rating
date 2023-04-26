import { TextLink } from "../../components/TextLink";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { BiArrowBack, BiLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'; 

import { Container, Head, Avatar, Form } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function Profile() {

    const { user, updateProfile } = useAuth();

    const avatarURL =  user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    
    const navigate = useNavigate();

    function handleComeBack () {
        navigate(-1);
    }
    
    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
        
    }

    function handleUpdateProfile() {
        const userUpdated = Object.assign(user,{
            name,
            email,
            password,
            newPassword,
        });
        
        updateProfile({ user: userUpdated, avatarFile });
    }

    return(
        <Container>
            <Head>
                <TextLink onClick={handleComeBack} title="Voltar" icon={BiArrowBack}/>
            </Head>
            <Avatar>   
                <img 
                    src={avatar} 
                    alt="Foto do usuário" 
                />
                <label htmlFor="avatar">
                    <FiCamera size={20}/>
                    <input 
                        type="file" 
                        id="avatar"
                        onChange={e => handleChangeAvatar(e)}    
                    />
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