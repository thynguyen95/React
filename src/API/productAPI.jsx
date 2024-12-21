import { http } from "../services/configURL";

export const getAllProduct = async () => {
    const res = await http.get("https://apistore.cybersoft.edu.vn/api/Product");

    return res.data.content;
};
