import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const DashboardService = {
    // Get total students
    getTotalStudents: async function () {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/total-students`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching total students:", error);
            throw error;
        }
    },

    // Get total teachers
    getTotalTeachers: async function () {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/total-teachers`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching total teachers:", error);
            throw error;
        }
    },

    // Get total classes
    getTotalClasses: async function () {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/total-classes`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching total classes:", error);
            throw error;
        }
    },

    // Get total courses
    getTotalCourses: async function () {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/total-courses`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching total courses:", error);
            throw error;
        }
    },

    // Get total revenue by date
    getTotalRevenueByDate: async function (date) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/revenue/by-date?date=${encodeURIComponent(date)}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching revenue by date:", error);
            throw error;
        }
    },

    // Get total revenue by month
    getTotalRevenueByMonth: async function (year, month) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/revenue/by-month?year=${year}&month=${month}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching revenue by month:", error);
            throw error;
        }
    },

    // Get total revenue by year
    getTotalRevenueByYear: async function (year) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/revenue/by-year?year=${year}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching revenue by year:", error);
            throw error;
        }
    },
    getPaidRevenueByYear: async function (year) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/revenue/paid/${year}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching paid revenue by year:", error);
            throw error;
        }
    },

    getPendingRevenueByYear: async function (year) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Static/revenue/pending/${year}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching pending revenue by year:", error);
            throw error;
        }
    }
    // Add more methods as needed for other endpoints in StaticController
};

export default DashboardService;