import {createContext, useContext, useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const storage = useLocalStorage();
    const [user, setUser] = useState(storage.user ?? false);

    const login = (data) => {
        setUser(data);
        storage.setValue(data)
    };

    const logout = () => {
        localStorage.removeItem('artico_user');
        setUser(false);
    };

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);