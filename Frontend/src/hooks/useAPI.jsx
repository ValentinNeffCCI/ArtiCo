import getHeaders from "../utils/getHeaders.jsx";

const useAPI = () => {
  const baseURL = import.meta.env.VITE_API_URL;

  const hasFileData = (obj) => {
    return Object.values(obj).some(
      (value) => value instanceof File || value instanceof Blob
    );
  };

  const callAPI = async (suffix, method = "GET", body = false) => {
    try {
      let payload = {
        headers: getHeaders(),
        method: method,
      };
      if (["PUT", "POST"].includes(method) && body) {
        if (hasFileData(body)) {
          const formData = new FormData();
          Object.entries(body).forEach(([key, value]) =>
            formData.append(key, value)
          );
          payload.headers = getHeaders(true);
          payload.body = formData;
        } else {
          payload.headers = getHeaders();
          payload.body = JSON.stringify(body);
        }
      }
      const response = await fetch(baseURL + suffix, payload);
      return await response.json();
    } catch (error) {
      if (import.meta.env.VITE_ENV_MODE !== "prod") console.error(error);
      return false;
    }
  };

  return {
    query: callAPI,
  };
};

export default useAPI;
