import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";

const AttendanceService = {
    async getAllAttendances(keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            return await callApi({
                url: `${api_url}/api/Attendance?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("❌ Error getAllAttendances:", error);
            throw error;
        }
    },

    async getAttendanceById(scheduleId, studentId) {
        try {
            return await callApi({
                url: `${api_url}/api/Attendance/${scheduleId}/${studentId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("❌ Error getAttendanceById:", error);
            throw error;
        }
    },

    async addAttendance(attendanceData) {
        try {
            return await callApi({
                url: `${api_url}/api/Attendance`,
                method: "POST",
                data: attendanceData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getAuthToken()}`
                }
            });
        } catch (error) {
            console.error("❌ Error addAttendance:", error);
            throw error;
        }
    },

    async updateAttendance(scheduleId, studentId, attendanceData) {
        try {
            return await callApi({
                url: `${api_url}/api/Attendance/${scheduleId}/${studentId}`,
                method: "PUT",
                data: attendanceData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getAuthToken()}`
                }
            });
        } catch (error) {
            console.error("❌ Error updateAttendance:", error);
            throw error;
        }
    },

    async deleteAttendance(scheduleId, studentId) {
        try {
            return await callApi({
                url: `${api_url}/api/Attendance/${scheduleId}/${studentId}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("❌ Error deleteAttendance:", error);
            throw error;
        }
    }
};

export default AttendanceService;
