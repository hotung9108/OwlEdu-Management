import callApi from '../Utils/callApi.js';
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const StudentService = {
    // Lấy danh sách tất cả học viên
    getAllStudents: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching students:", error);
            throw error;
        }
    },

    // Lấy thông tin chi tiết của một học viên
    getStudentById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching student by ID:", error);
            throw error;
        }
    },

    // Thêm một học viên mới
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
            console.error("Error adding student:", error);
            throw error;
        }
    },

    // Cập nhật thông tin học viên
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
            console.error("Error updating student:", error);
            throw error;
        }
    },

    // Xóa một học viên
    deleteStudent: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Student/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error deleting student:", error);
            throw error;
        }
    }
};

export default StudentService;
