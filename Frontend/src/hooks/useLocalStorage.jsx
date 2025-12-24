const useLocalStorage = () => {
  const initUser = async () => {
    try {
      return await getUser();
    } catch (error) {
      return false;
    }
  };

  const getUser = async () => {
    // Essaie d'avoir la session de l'utilisateur
    let response = await fetch(import.meta.env.VITE_API_URL + "/user/me", {
      credentials: "include",
    });
    // Si le token est expiré on essaie de rafraichir l'access_token
    if (response.status === 401) {
      response = await fetch(
        import.meta.env.VITE_API_URL + "/auth/refresh",
        {
          credentials: "include",
        }
      );

      // On retente d'obtenir l'utilisateur sinon on s'arrête là
      if (response.ok) {
        response = await fetch(import.meta.env.VITE_API_URL + "/user/me", {
          credentials: "include",
        });
        if(!response.ok){
          return false;
        }
      } else {
        return false;
      }
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
    getValue,
  };
};

export default useLocalStorage;
