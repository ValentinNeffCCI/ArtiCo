const getHeaders = (isFormData = false) => {
  const {token} = JSON.parse(localStorage.getItem("artico_user"));

  const headers = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

export default getHeaders;