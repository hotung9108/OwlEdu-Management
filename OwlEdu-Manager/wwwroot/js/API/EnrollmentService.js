import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const EnrollmentService = {
    getAllEnrollments: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching enrollments:", error);
            throw error;
        }
    },

    getEnrollmentById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching enrollment by ID:", error);
            throw error;
        }
    },

    addEnrollment: async function (enrollmentData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment`,
                method: "POST",
                data: enrollmentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error adding enrollment:", error);
            throw error;
        }
    },

    updateEnrollment: async function (id, enrollmentData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/${id}`,
                method: "PUT",
                data: enrollmentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error updating enrollment:", error);
            throw error;
        }
    },

    updateEnrollmentStatus: async function (id, status) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/status/${id}/${status}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error updating enrollment:", error);
            throw error;
        }
    },

    deleteEnrollment: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error deleting enrollment:", error);
            throw error;
        }
    },
    getEnrollmentByStudentId: async function (studentId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/student/${studentId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching enrollments by student ID:", error);
            throw error;
        }
    },

    getEnrollmentByCourseId: async function (courseId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/course/${courseId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching enrollments by course ID:", error);
            throw error;
        }
    },

    getEnrollmentByStudentIdCourseId: async function (studentId, courseId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Enrollment/student/${studentId}/course/${courseId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching enrollment by student ID and course ID:", error);
            throw error;
        }
    }
};

export default EnrollmentService;