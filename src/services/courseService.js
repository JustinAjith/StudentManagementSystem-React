import api from "./axiosInstance";

export const getAllCourses = async () => {
    try {
        const response = await api.get('/course/get-all');
        return response.data;
    } catch (error) {

    }
}