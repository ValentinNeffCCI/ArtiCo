import getHeaders from "../utils/getHeaders.jsx";

const useAPI = () => {
    const baseURL = import.meta.env.VITE_API_URL;

    const callAPI = async (suffix, method = 'GET', body = false) => {
        let returnValue;

        try {
            let payload = {
                headers: getHeaders(),
                method: method
            }
            if (["PUT", "POST"].includes(method)) {
                payload.body = JSON.stringify(body);
            }
            const response = await fetch(baseURL + suffix, payload);
            return await response.json();
        } catch (error) {
            return false;
        }
    }

    return {
        query: callAPI
    };
}

export default useAPI;