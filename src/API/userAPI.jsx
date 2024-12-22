import { http } from "../services/configURL";

export const getAllUserAPI = async () => {
    const res = await http.get(
        "https://apistore.cybersoft.edu.vn/api/Users/getAll"
    );
    return res.data.content;
};

export const registerAPI = async (userRegister) => {
    const res = await http.post(
        "https://apistore.cybersoft.edu.vn/api/Users/signup",
        userRegister
    );

    return res.data.content;
};

export const getAllUserPagingAPI = async (param) => {
    console.log("param: ", param);
    // console.log("queryKey: ", queryKey);
    const pageSize = param.queryKey[2];
    const pageIndex = param.queryKey[1];

    const res = await http.get(
        `https://apistore.cybersoft.edu.vn/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );

    return res.data.content;
};
