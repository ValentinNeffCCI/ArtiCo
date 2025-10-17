import {useState} from "react";

const useLocalStorage = () => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem('artico_token');
            return item ? JSON.parse(item) : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem('artico_token', JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        storedValue,
        setValue,
    };
}

export default useLocalStorage;