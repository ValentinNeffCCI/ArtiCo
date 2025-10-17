const GetHeaders = () => {

    const token = localStorage.getItem('artico_token') || false;

    return token ?
        {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        } : {
            "Content-Type": "application/json",
        }
}

export default GetHeaders;