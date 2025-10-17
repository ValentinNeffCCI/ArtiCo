import getHeaders from "../utils/getHeaders.jsx";

const useAPI = () => {
    const baseURL = import.meta.env.VITE_API_URL;

    const callAPI = async (suffix) => {
        let returnValue;
        try{
        const response = await fetch(baseURL + suffix, getHeaders());
        returnValue = await response.json();
        } catch (error) {
            returnValue = error;
        }
        return returnValue;
    }

    return {
        callAPI
    };
}

export default useAPI;