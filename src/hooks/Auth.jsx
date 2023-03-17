import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/Api';

const AuthContext = createContext({});


function AuthProvider({children}) {

    const [data, setData] = useState({});
        
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
                alert(error.response.data.message);
            }else {
                alert('Ocorreu um erro a logar na conta.')
            }
        }
    }
    
    function Logout() {
        localStorage.removeItem('@rating-movie:user');
        localStorage.removeItem('@rating-movie:token');
        setData({});

    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@rating-movie:user'));
        const token = localStorage.getItem('@rating-movie:token');
        setData({token, user});
        
    },[])

    return (
        <AuthContext.Provider value={{ signIn, Logout, user: data.user }}>
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