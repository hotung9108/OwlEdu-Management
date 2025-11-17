import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const ClassService = {
    getAllClasses: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Class?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });

            return response;
        } catch (error) {
            throw error;
        }
    },

    getClassById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Class/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });

            return response;
        } catch (error) {
            throw error;
        }
    },

    addClass: async function (classData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Class`,
                method: "POST",
                data: classData,
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

    updateClass: async function (id, classData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Class/${id}`,
                method: "PUT",
                data: classData,
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

    deleteClass: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Class/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });

            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default ClassService;
