import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const CourseService = {
    // Lấy danh sách tất cả các khóa học
    getAllCourses: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Course?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching courses:", error);
            throw error;
        }
    },

    // Lấy thông tin chi tiết của một khóa học
    getCourseById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Course/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching course by ID:", error);
            throw error;
        }
    },

    // Thêm một khóa học mới
    addCourse: async function (courseData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Course`,
                method: "POST",
                data: courseData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error adding course:", error);
            throw error;
        }
    },

    // Cập nhật thông tin khóa học
    updateCourse: async function (id, courseData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Course/${id}`,
                method: "PUT",
                data: courseData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error updating course:", error);
            throw error;
        }
    },

    // Xóa một khóa học
    deleteCourse: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Course/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error deleting course:", error);
            throw error;
        }
    }
};

export default CourseService;