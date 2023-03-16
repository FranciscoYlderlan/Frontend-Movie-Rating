import { createContext, useContext, useState } from "react";
import { api } from '../services/Api';

const AuthContext = createContext({});


function AuthProvider({children}) {

    const [data, setData] = useState({});
        
    async function signIn({email, password}) {
        try {
            const response = await api.post('/sessions',{email, password});
            const {token, user} = response.data;
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({user,token});
            
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            }else {
                alert('Ocorreu um erro a logar na conta.')
            }
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
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