import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";

const PaymentService = {
    async getAllPayments(keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const token = getAuthToken();
            const response = await callApi({
                url: `${api_url}/Payment?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error in getAllPayments:", error);
            throw error;
        }
    },

    async getPaymentById(id) {
        try {
            const token = getAuthToken();
            const response = await callApi({
                url: `${api_url}/Payment/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error in getPaymentById:", error);
            throw error;
        }
    },

    async getPaymentByEnrollmentId(enrollmentId) {
        try {
            const token = getAuthToken();
            const response = await callApi({
                url: `${api_url}/Payment/enrollment/${enrollmentId}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error in getPaymentById:", error);
            throw error;
        }
    },

    async addPayment(paymentData) {
        try {
            const token = getAuthToken();
            const response = await callApi({
                url: `${api_url}/Payment`,
                method: "POST",
                data: paymentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error in addPayment:", error);
            throw error;
        }
    },

    async updatePayment(id, paymentData) {
        try {
            const token = getAuthToken();
            const response = await callApi({
                url: `${api_url}/Payment/${id}`,
                method: "PUT",
                data: paymentData,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error in updatePayment:", error);
            throw error;
        }
    },

    async deletePayment(id) {
        try {
            const token = getAuthToken();
            const response = await callApi({
                url: `${api_url}/Payment/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error in deletePayment:", error);
            throw error;
        }
    }
};

export default PaymentService;
