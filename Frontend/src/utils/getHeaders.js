const getHeaders = () => {
  const {token} = JSON.parse(localStorage.getItem("artico_user"));

  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

export default getHeaders;