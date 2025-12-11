const getHeaders = () => {
  const token = localStorage.getItem("artico_user").replaceAll('"', "");
  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

export default getHeaders;