import {createContext, useContext, useState, useEffect} from "react";

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/user/me', {
                method: 'GET',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            if(response.ok){
                const data = await response.json();
                setUser({
                    id: data.id,
                    role: data.role
                });
                return data;
            }else{
                setUser(false);
                return false;
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        getUser();
    }, []);

    const login = (data) => {
        setUser(data);
    };

    const logout = async () => {
        try {
            fetch(import.meta.env.VITE_API_URL + '/auth/logout', {
                method: 'POST',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            setUser(false);
        } catch (error) {
            console.error("une erreur côté serveur est survenue");
        }
    };

    return (
        <UserContext.Provider value={{user, loading, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);