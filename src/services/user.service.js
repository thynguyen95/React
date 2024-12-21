import axios from "axios";
import { http } from "./configURL";

export let userService = {
    // postLogin: (loginData) => {
    //   return axios({
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //     method: "POST",
    //     data: loginData,
    //     headers: {
    //       TokenCybersoft: TOKEN_CYBER,
    //     },
    //   });
    // },
    login: (loginData) => {
        return http.post(
            "/api/Users/signin",
            loginData,
            { skipLoading: true } // tùy chỉnh để không bật loading
        );
    },
};
