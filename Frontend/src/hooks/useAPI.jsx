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

  // Endpoints d'authentification : un 401 y signifie "identifiants invalides"
  // et non "token d'accès expiré". On ne doit donc pas déclencher le refresh
  // silencieux pour eux, sous peine d'avaler le corps d'erreur attendu par
  // l'appelant (ex. LoginForm qui lit `response.error`).
  const AUTH_ENDPOINTS = [
    "/auth/login",
    "/auth/register",
    "/auth/refresh",
    "/auth/change-password",
  ];
  const isAuthEndpoint = (suffix) =>
    AUTH_ENDPOINTS.some((endpoint) => suffix.startsWith(endpoint));

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
          Object.entries(body).forEach(([key, value]) => {
            if (value === null || value === undefined) return;
            formData.append(key, value);
          });
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

      if (response.status === 401 && !isAuthEndpoint(suffix)) {
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
