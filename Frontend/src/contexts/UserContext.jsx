import {createContext, useContext, useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const storage = useLocalStorage();
    const [user, setUser] = useState(false);

    useEffect(()=>{
        storage.initUser().then(data=>setUser(data))
    }, []);

    const login = (data) => {
        setUser(data);
    };

    const logout = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/auth/logout', {
                method: 'POST',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok){
                setUser(false);
            }
        } catch (error) {
            console.error("une erreur côté serveur est survenue");
        }
    };

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);