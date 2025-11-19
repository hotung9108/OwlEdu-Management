import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";
const token = getAuthToken();

const PaymentService = {
    // Lấy danh sách tất cả các thanh toán
    getAllPayments: async function (keyword = "", pageNumber = 1, pageSize = 10) {
        try {
            const response = await callApi({
                url: `${api_url}/Payment?keyword=${encodeURIComponent(keyword)}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching payments:", error);
            throw error;
        }
    },

    // Lấy thông tin chi tiết của một thanh toán
    getPaymentById: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/Payment/${id}`,
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error fetching payment by ID:", error);
            throw error;
        }
    },

    // Thêm một thanh toán mới
    addPayment: async function (paymentData) {
        try {
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
            console.error("Error adding payment:", error);
            throw error;
        }
    },

    // Cập nhật thông tin thanh toán
    updatePayment: async function (id, paymentData) {
        try {
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
            console.error("Error updating payment:", error);
            throw error;
        }
    },

    // Xóa một thanh toán
    deletePayment: async function (id) {
        try {
            const response = await callApi({
                url: `${api_url}/Payment/${id}`,
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            return response;
        } catch (error) {
            console.error("Error deleting payment:", error);
            throw error;
        }
    }
};

export default PaymentService;