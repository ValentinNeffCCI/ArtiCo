import {createContext, useContext, useState} from "react";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const login = (email, password) => {
        //TODO: fetch
        console.log(email, password);
    };

    const logout = () => {
        //TODO: Remove localstorage user
        setUser(false);
    };

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);