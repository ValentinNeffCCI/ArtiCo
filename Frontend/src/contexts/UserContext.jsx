import {createContext, useContext, useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const {storedValue} = useLocalStorage();
    const [token, setToken] = useState(storedValue);

    useEffect(() => {
    }, []);

    const login = (email, password) => {
        //TODO: fetch
        console.log(email, password);
    };

    const logout = () => {
        //TODO: Remove localstorage user
        setUser(false);
    };

    return (
        <UserContext.Provider value={{user, login, logout, token}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);