import callApi from '../Utils/callApi.js';
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const AccountService = {

    getAllAccounts: async function (pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/api/Account?pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error getAllAccounts:", error);
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
            console.error("Error getAccountById:", error);
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
            console.error("Error addAccount:", error);
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
            console.error("Error updateAccount:", error);
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
            console.error("Error deleteAccount:", error);
            throw error;
        }
    }
};

export default AccountService;
