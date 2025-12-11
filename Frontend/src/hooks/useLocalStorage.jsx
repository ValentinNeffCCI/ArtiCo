import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const initUser = async () => {
    try {
      const item = window.localStorage.getItem("artico_user");
      const data = JSON.parse(item);
      return await getUser(data);
    } catch (error) {
      return false;
    }
  };

  const getUser = async (token) => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 401) {
      return false;
    }
    const user = await response.json();
    return user;
  };

  const setValue = (value, key = "artico_user") => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getValue = (key) => window.localStorage.getItem(key);

  const deleteValue = (key) => window.localStorage.removeItem(key);

  return {
    initUser,
    setValue,
    deleteValue,
    getValue
  };
};

export default useLocalStorage;
