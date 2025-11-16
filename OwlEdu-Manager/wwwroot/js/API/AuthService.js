import callApi from "../Utils/callApi.js";
const api_url = "https://localhost:7230";

const AuthService = {
    login: async function (username, password) {
        const url = `${api_url}/api/Auth/login`;
        const method = "POST";
        const data = {
            Username: username,
            Password: password
        };

        try {
            const response = await callApi({
                url: url,
                method: method,
                data: data,
                headers: { "Content-Type": "application/json" }
            });

            document.cookie = `authToken=${response.token}; path=/; max-age=86400; secure`;
            document.cookie = `userId=${response.id}; path=/; max-age=86400; secure`;
            document.cookie = `userRole=${response.role}; path=/; max-age=86400; secure`;

            if (response.role === "student" || response.role === "teacher") {
                const accountUrl = `${api_url}/api/Account/${response.id}`;
                try {
                    const accountDetails = await callApi({
                        url: accountUrl,
                        method: "GET",
                        headers: { "Authorization": `Bearer ${response.token}` }
                    });

                    if (response.role === "student" && accountDetails.student) {
                        document.cookie = `studentId=${accountDetails.student.id}; path=/; max-age=86400; secure`;
                    } else if (response.role === "teacher" && accountDetails.teacher) {
                        document.cookie = `teacherId=${accountDetails.teacher.id}; path=/; max-age=86400; secure`;
                    }
                } catch (error) {
                    console.error("Không thể lấy thông tin tài khoản chi tiết.");
                }
            }

            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default AuthService;