import callApi from "../Utils/callApi.js";
import { getAuthToken } from "../Utils/getCookies.js";

const api_url = "https://localhost:7230";

const ScoreService = {
    async getAllScores(pageNumber = 1, pageSize = 10) {
        return await callApi({
            url: `${api_url}/api/Score?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            method: "GET",
            headers: { "Authorization": `Bearer ${getAuthToken()}` }
        });
    },

    async getScoresByClass(classId) {
        return await callApi({
            url: `${api_url}/api/Score/Class/${classId}`,
            method: "GET",
            headers: { "Authorization": `Bearer ${getAuthToken()}` }
        });
    },

    async getScoresByStudent(studentId) {
        return await callApi({
            url: `${api_url}/api/Score/Student/${studentId}`,
            method: "GET",
            headers: { "Authorization": `Bearer ${getAuthToken()}` }
        });
    },

    async getScoresByTeacher(teacherId) {
        return await callApi({
            url: `${api_url}/api/Score/Teacher/${teacherId}`,
            method: "GET",
            headers: { "Authorization": `Bearer ${getAuthToken()}` }
        });
    },

    async addScore(scoreData) {
        return await callApi({
            url: `${api_url}/api/Score`,
            method: "POST",
            data: scoreData,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getAuthToken()}`
            }
        });
    },

    async updateScore(studentId, classId, teacherId, title, scoreData) {
        return await callApi({
            url: `${api_url}/api/Score/${studentId}/${classId}/${teacherId}/${title}`,
            method: "PUT",
            data: scoreData,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getAuthToken()}`
            }
        });
    },

    async deleteScore(studentId, classId, teacherId, title) {
        return await callApi({
            url: `${api_url}/api/Score/${studentId}/${classId}/${teacherId}/${title}`,
            method: "DELETE",
            headers: { "Authorization": `Bearer ${getAuthToken()}` }
        });
    }
};

export default ScoreService;
