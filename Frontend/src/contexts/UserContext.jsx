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

    const logout = () => {
        // Supprimer le refresh_token
        document.cookie = `refresh_token=; expires=${new Date(0).toUTCString()};`;
        document.cookie = `artico_token=; expires=${new Date(0).toUTCString()};`;
        setUser(false);
    };

    const resetUser = () => {
        setUser(false);
        storage.deleteValue('artico_user');
    };

    return (
        <UserContext.Provider value={{user, login, logout, resetUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);