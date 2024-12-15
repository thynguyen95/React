import axios from "axios";
import { createBrowserHistory } from "history";
import { decodeToken, isTokenExpired } from "../util/setting";
import { store } from "../redux/store";
import {
    disableLoadingAction,
    enableLoadingAction,
} from "../redux/reducers/spinnerReducer";
// cấu hình chuyển hướng trang khi không dùng hook
export const navigateHistory = createBrowserHistory();

export const TOKEN = "accessToken";
export const USER_LOGIN = "userLogin";

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
    store.dispatch(enableLoadingAction(true));
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
        store.dispatch(disableLoadingAction(false));

        return response;
    },
    (err) => {
        store.dispatch(disableLoadingAction(false));

        // kiểm tra token hợp lệ
        const jwtDecodeToken = decodeToken(TOKEN);
        console.log("jwtDecodeToken: ", jwtDecodeToken);

        if (jwtDecodeToken) {
            const isExpired = isTokenExpired(localStorage.getItem(TOKEN));
            console.log("isExpired: ", isExpired);

            if (isExpired) {
                http.post(
                    "https://apistore.cybersoft.edu.vn/api/Users/RefeshToken"
                )
                    .then((response) => {
                        console.log("response: ", response);
                        localStorage.setItem(
                            TOKEN,
                            response.data.content.accessToken
                        );
                        navigateHistory.push(window.location.pathname);
                    })
                    .catch((err) => {
                        console.log("err: ", err);
                        navigateHistory.push("/user/login");
                    });
            }
        }

        switch (err?.response.status) {
            case 400:
                {
                    // chuyển hướng trang khi sai tham số
                    alert("sai tham số");
                    // window.location.href = "/"; //nếu dùng cách này sẽ bị reload lại trang và mất state
                    // dùng history
                    navigateHistory.push("/");
                }
                break;

            case 401:
                {
                    // trường hợp 1: token không hợp lệ => yêu cầu đăng nhập lại
                    // navigateHistory.push("/login");
                }
                break;
            default:
                break;
        }

        return Promise.reject(err);
    }
);
