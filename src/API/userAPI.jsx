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
