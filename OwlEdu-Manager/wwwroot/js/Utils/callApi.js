function callApi({ url, method = "GET", data = null, headers = {} }) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            method: method,
            contentType: "application/json",
            data: data ? JSON.stringify(data) : null,
            headers: headers,
            success: function (response) {
                resolve(response);
            },
            error: function (xhr) {
                reject(xhr);
            }
        });
    });
}
export default callApi;