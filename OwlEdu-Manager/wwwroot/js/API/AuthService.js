import callApi from "../Utils/callApi.js";
const api_url = "https://localhost:7230";
const AuthService = {
    login: function (username, password, successCallback, errorCallback) {
        const url = `${api_url}/api/Auth/login`;
        const method = "POST";
        const data = {
            Username: username,
            Password: password
        };

        callApi({
            url: url,
            method: method,
            data: data,
            headers: { "Content-Type": "application/json" },
            successCallback: function (response) {
                document.cookie = `authToken=${response.token}; path=/; max-age=86400; secure`;

                document.cookie = `userId=${response.id}; path=/; max-age=86400; secure`;
                document.cookie = `userRole=${response.role}; path=/; max-age=86400; secure`;
                if (response.role === "student" || response.role === "teacher") {
                    const accountUrl = `${api_url}/api/Account/${response.id}`;
                    callApi({
                        url: accountUrl,
                        method: "GET",
                        headers: { "Authorization": `Bearer ${response.token}` },
                        successCallback: function (accountDetails) {
                            if (response.role === "student" && accountDetails.student) {
                                document.cookie = `studentId=${accountDetails.student.id}; path=/; max-age=86400; secure`;
                            } else if (response.role === "teacher" && accountDetails.teacher) {
                                document.cookie = `teacherId=${accountDetails.teacher.id}; path=/; max-age=86400; secure`;
                            }
                            if (successCallback) successCallback(response);
                        },
                        errorCallback: function () {
                            console.error("Không thể lấy thông tin tài khoản chi tiết.");
                            if (successCallback) successCallback(response); 
                        }
                    });
                } else {
                    if (successCallback) successCallback(response);
                }
            },
            errorCallback: errorCallback
        });
    }
};

export default AuthService;