const getHeaders = (isFormData = false) => {
  const token = localStorage.getItem("artico_token");

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