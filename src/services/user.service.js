import axios from "axios";
import { https, TOKEN_CYBER } from "./configURL";

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
  postLogin: (loginData) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", loginData);
  },
};
