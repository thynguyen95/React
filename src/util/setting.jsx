import axios from "axios";

export const TOKEN = "accessToken";
export const USER_LOGIN = "userLogin";

export function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export function deleteCookie(name) {
    document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// setup interceptor(middleware) cho tất cả các request(thông tin gửi đi đến server) và response (kết quả nhận từ server)
const DOMAIN = "https://apistore.cybersoft.edu.vn";
const TOKEN_CYBERSOFT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjA1LzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTA4MTYwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5MjI5MjAwfQ.5EInOZxm36n_2HNZsS3kKMLXRYhND8W2KycBygtOP8I";

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000, // giới hạn thời gian chờ kết quả trên server
});

// cấu hình cho request
http.interceptors.request.use((request) => {
    request.headers = {
        ...request.headers, // giữ lại các api có header riêng
        Authorization: localStorage.getItem(TOKEN), // thêm phần chung authorize
        TokenCybersoft: TOKEN_CYBERSOFT,
    };

    return request;
});

// cấu hình response
/*
    statusCode: 
    200: thành công
    201: dữ liệu đã được khởi tạo thành công(created)
    400: Bad request (đường dẫn không hợp lệ)
    404: Not found (không tìm thấy dữ liệu)
    401: unauthorize (Lỗi không có quyền truy cập vào api đó)
    403: Forbidden (không đủ quyền truy cập vào hệ thống)
    500: error in server (lỗi xảy ra tại server chưa biết lý do) 
    => test lại api qua postmain hoặc swagger với dữ liệu mẫu từ backend 
        => code chạy => BE đúng thì coi lại code
        => code không chạy => nhờ BE check lại 
*/
http.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        switch (err?.response.status) {
            case 400:
                {
                }
                break;

            case 401:
                {
                }
                break;
            default:
                break;
        }

        return Promise.reject(err);
    }
);
