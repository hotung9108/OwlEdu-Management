import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const ClassAssignmentService = {
    // GET ALL
    getAllClassAssignments: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (err) {
            throw err;
        }
    },

    // GET BY ID
    getClassAssignmentById: async function (classId, studentId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment/${classId}/${studentId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (err) {
            console.error(`Error fetching class assignment ${classId}-${studentId}:`, err);
            throw err;
        }
    },

    // GET BY student ID
    getClassAssignmentByStudentId: async function (studentId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment/student/${studentId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (err) {
            console.error(`Error fetching class assignment ${studentId}:`, err);
            throw err;
        }
    },

    getClassAssignmentByClassId: async function (classId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment/class/${classId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (err) {
            console.error(`Error fetching class assignment ${classId}:`, err);
            throw err;
        }
    },

    // CREATE
    addClassAssignment: async function (classAssignmentData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment`,
                method: "POST",
                data: classAssignmentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (err) {
            console.error("Error adding class assignment:", err);
            throw err;
        }
    },

    // UPDATE
    updateClassAssignment: async function (classId, studentId, classAssignmentData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment/${classId}/${studentId}`,
                method: "PUT",
                data: classAssignmentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (err) {
            console.error("Error updating class assignment:", err);
            throw err;
        }
    },

    // DELETE
    deleteClassAssignment: async function (classId, studentId) {
        try {
            const response = await callApi({
                url: `${api_url}/api/ClassAssignment/${classId}/${studentId}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (err) {
            console.error("Error deleting class assignment:", err);
            throw err;
        }
    }
};

export default ClassAssignmentService;
