import api from "./axiosInstance"

export const login = async (data) => {
    try {
        const response = await api.post('/login', data);
        return response.data;
    } catch(error) {
        console.log(error)
        throw error.response ? error.response.data : error.message;
    }
}