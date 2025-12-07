import { useState } from "react";

const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem("artico_user");
      return item ? JSON.parse(item) : false;
    } catch (error) {
      return false;
    }
  });

  const setValue = (value, key = "artico_user") => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user: storedValue,
    setValue,
  };
};

export default useLocalStorage;
