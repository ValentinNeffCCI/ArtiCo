import { useAuth } from "../contexts/UserContext.jsx";

const useAPI = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const { logout } = useAuth();

  const hasFileData = (obj) => {
    return (
      obj &&
      typeof obj === "object" &&
      Object.values(obj).some(
        (value) => value instanceof File || value instanceof Blob
      )
    );
  };

  const getUrl = baseURL.replace("/api", "");

  const callAPI = async (suffix, method = "GET", body = false) => {
    try {
      let payload = {
        method,
        credentials: "include",
      };

      if (["PUT", "POST", "PATCH"].includes(method) && body) {
        if (body instanceof FormData) {
          payload.body = body;
        } else if (hasFileData(body)) {
          const formData = new FormData();
          Object.entries(body).forEach(([key, value]) =>
            formData.append(key, value)
          );
          payload.body = formData;
        } else {
          payload.headers = {
            ...payload.headers,
            "Content-Type": "application/json",
          };
          payload.body = JSON.stringify(body);
        }
      }

      let response = await fetch(baseURL + suffix, payload);

      if (response.status === 401) {
        const refresh = await fetch(baseURL + "/auth/refresh", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (refresh.ok) {
          response = await fetch(baseURL + suffix, {
            ...payload,
          });
        } else {
          logout();
          return false;
        }
      }

      return await response.json();
    } catch (error) {
      if (import.meta.env.VITE_ENV_MODE !== "prod") console.error(error);
      return false;
    }
  };

  return {
    query: callAPI,
    url: getUrl,
  };
};

export default useAPI;
