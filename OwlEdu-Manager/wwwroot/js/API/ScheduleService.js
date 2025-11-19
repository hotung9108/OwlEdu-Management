import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";

const ScheduleService = {
    async getAllSchedules(keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            return await callApi({
                url: `${api_url}/api/Schedule?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("Error in getAllSchedules:", error);
            throw error;
        }
    },

    async getScheduleById(id) {
        try {
            return await callApi({
                url: `${api_url}/api/Schedule/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("Error in getScheduleById:", error);
            throw error;
        }
    },

    async getScheduleByClassId(classId) {
        try {
            return await callApi({
                url: `${api_url}/api/Schedule/Class/${classId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("Error in getScheduleByClassId:", error);
            throw error;
        }
    },

    async addSchedule(scheduleData) {
        try {
            return await callApi({
                url: `${api_url}/api/Schedule`,
                method: "POST",
                data: scheduleData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getAuthToken()}`
                }
            });
        } catch (error) {
            console.error("Error in addSchedule:", error);
            throw error;
        }
    },

    async updateSchedule(id, scheduleData) {
        try {
            return await callApi({
                url: `${api_url}/api/Schedule/${id}`,
                method: "PUT",
                data: scheduleData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getAuthToken()}`
                }
            });
        } catch (error) {
            console.error("Error in updateSchedule:", error);
            throw error;
        }
    },

    async deleteSchedule(id) {
        try {
            return await callApi({
                url: `${api_url}/api/Schedule/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${getAuthToken()}` }
            });
        } catch (error) {
            console.error("Error in deleteSchedule:", error);
            throw error;
        }
    }
};

export default ScheduleService;
