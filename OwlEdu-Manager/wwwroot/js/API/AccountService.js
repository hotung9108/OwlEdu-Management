import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const AccountService = {
    getAllAccounts: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching accounts:", error);
            throw error;
        }
    },
    updateAccountPartial: async function (id, accountData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account/${id}`,
                method: "PATCH",
                data: accountData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error partially updating account:", error);
            throw error;
        }
    },
    getAccountById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching account by ID:", error);
            throw error;
        }
    },

    addAccount: async function (accountData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account`,
                method: "POST",
                data: accountData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error adding account:", error);
            throw error;
        }
    },

    updateAccount: async function (id, accountData) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account/${id}`,
                method: "PUT",
                data: accountData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error updating account:", error);
            throw error;
        }
    },
        // Cập nhật trạng thái tài khoản
    updateAccountStatus: async function (id, status) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account/${id}/status`,
                method: "PATCH",
                data: status,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error updating account status:", error);
            throw error;
        }
    },
    deleteAccount: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error deleting account:", error);
            throw error;
        }
    }
};
export default AccountService;
