function getAuthToken() {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find(row => row.startsWith("authToken="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
}
function getUserID() {
    const cookies = document.cookie.split("; ");
    const userIdCookie = cookies.find(row => row.startsWith("userId="));
    return userIdCookie ? userIdCookie.split("=")[1] : null;
}
function getUserRole() {
    const cookies = document.cookie.split("; ");
    const userRoleCookie = cookies.find(row => row.startsWith("userRole="));
    return userRoleCookie ? userRoleCookie.split("=")[1] : null;
}
function getStudentID() {
    const cookies = document.cookie.split("; ");
    const studentIdCookie = cookies.find(row => row.startsWith("studentId="));
    return studentIdCookie ? studentIdCookie.split("=")[1] : null;
}
function getTeacherID() {
    const cookies = document.cookie.split("; ");
    const teacherIdCookie = cookies.find(row => row.startsWith("teacherId="));
    return teacherIdCookie ? teacherIdCookie.split("=")[1] : null;
}
export { getAuthToken, getUserID, getUserRole, getStudentID, getTeacherID };