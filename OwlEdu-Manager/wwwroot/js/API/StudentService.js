import callApi from '../Utils/callApi.js';
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const StudentService = {

    getAllStudents: async function (pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student?pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });

            return response;
        } catch (error) {
            console.error("Error getAllStudents:", error);
            throw error;
        }
    },

    getStudentById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });

            return response;
        } catch (error) {
            console.error("Error getStudentById:", error);
            throw error;
        }
    },

    addStudent: async function (studentData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student`,
                method: "POST",
                data: studentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            return response;
        } catch (error) {
            console.error("Error addStudent:", error);
            throw error;
        }
    },

    updateStudent: async function (id, studentData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student/${id}`,
                method: "PUT",
                data: studentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            return response;
        } catch (error) {
            console.error("Error updateStudent:", error);
            throw error;
        }
    },

    deleteStudent: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });

            return response;
        } catch (error) {
            console.error("Error deleteStudent:", error);
            throw error;
        }
    }
};

export default StudentService;
