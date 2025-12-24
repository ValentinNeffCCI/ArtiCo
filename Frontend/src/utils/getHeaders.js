const getHeaders = () => {
  const localData = localStorage.getItem("artico_user");
  const token = localData ? localData.replaceAll('"', "") : "";

  if(!token){
    return {}
  }

  return {
    "Authorization": `Bearer ${token}`
  };
};

export default getHeaders;