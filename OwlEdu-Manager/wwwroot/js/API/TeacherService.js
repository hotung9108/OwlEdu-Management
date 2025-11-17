import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();
const TeacherService = {
    getAllTeachers: async function (pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Teacher?pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` },
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    getTeacherById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Teacher/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    addTeacher: async function (teacherData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Teacher`,
                method: "POST",
                data: teacherData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    updateTeacher: async function (id, teacherData) {
        
        try {
            const response = await callApi({
                url: `${api_url}/api/Teacher/${id}`,
                method: "PUT",
                data: teacherData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    deleteTeacher: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Teacher/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default TeacherService;