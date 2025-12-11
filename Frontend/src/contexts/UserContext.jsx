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
        storage.setValue(data.token);
        storage.setValue(data.refresh, 'artico_refresh')
    };

    const logout = () => {
        storage.deleteValue('artico_user');
        storage.deleteValue('artico_refresh');
        setUser(false);
    };

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);