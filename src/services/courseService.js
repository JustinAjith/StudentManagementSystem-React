import api from "./axiosInstance";

export const getAllCourses = async () => {
    try {
        const response = await api.get('/course/get-all');
        return response.data;
    } catch (error) {

    }
}

export const createCourse = async (data) => {
    try {
        const response = await api.post('/course/create', data);
        return response.data;
    } catch (error) {

    }
}

export const deleteCourse = async (id) => {
    try {
        const response = await api.delete('/course/delete/' + id);
        return response.data;
    } catch (error) {

    }
}