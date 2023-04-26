import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api.js';

const AuthContext = createContext({});

function AuthProvider({children}) {

    const [data, setData] = useState({});

    function Logout() {
        localStorage.removeItem('@rating-movie:user');
        localStorage.removeItem('@rating-movie:token');
        setData({});
    }

    function isTokenAuthenticated(statusCode){
        const isUnauthorized = statusCode === 401;
        
        if(isUnauthorized) {
            Logout();
            return false;
        }
        return true
    }
        
    async function signIn({email, password}) {
        try {
            const response = await api.post('/sessions',{email, password});
            const {token, user} = response.data;
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            localStorage.setItem('@rating-movie:user',JSON.stringify(user));
            localStorage.setItem('@rating-movie:token',token);

            setData({user,token});
            
        } catch (error) {
            if(error.response) {
                return alert(error.response.data.message);
            }else {
                return alert('Ocorreu um erro a logar na conta.')
            }
        }
    }
    
    async function updateProfile({ user, avatarFile }) {
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar',avatarFile);
                const response = await api.patch('/users/avatar',fileUploadForm);
                user.avatar = response.data.avatar;
            }

            
            await api.put('/users', user);
            
            localStorage.setItem('@rating-movie:user', JSON.stringify( user ));

            setData({ user, token: data.token });

            return alert("Perfil de usuário atualizado com sucesso!")
              
        } catch (error) {

             if(error.response) {
                alert(error.response.data.message);
                isTokenAuthenticated(error.response.status);
            } else {
                alert('Ocorreu um erro ao tentar atualizar perfil de usuário.');
            }
            return;
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@rating-movie:user'));
        const token = localStorage.getItem('@rating-movie:token');
        setData({token, user});
        
    },[])

    return (
        <AuthContext.Provider value={{ 
            signIn,
            updateProfile, 
            Logout,
            isTokenAuthenticated, 
            user: data.user }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
};