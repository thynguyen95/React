import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../services/configURL";

const initialState = {
    arrProduct: [], // state arrProduct của trang chủ
    proDetail: {},
};

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
        setProductDetailAction: (state, action) => {
            state.proDetail = action.payload;
        },
    },
});

export const { setProductAction, setProductDetailAction } =
    productReducer.actions;

export default productReducer.reducer;

// --------------------------action thunk -------------------------
export const getProductApiActionThunk = () => {
    return (dispatch) => {
        // cho phép thực thi logic api
        console.log("dispatch: ", dispatch);
        http.get("https://apistore.cybersoft.edu.vn/api/Product")
            .then((res) => {
                console.log("res: ", res);
                // sau khi thực thi logic api xong thì có được dữ liệu sẽ đưa lên store = tham số dispatch của thunk

                const actionPayload = setProductAction(res.data.content);

                dispatch(actionPayload);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };
};

export const getProductDetailByIdActionThunk = (id) => {
    // closure function
    return async (dispatch) => {
        const res = await http.get(
            `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`
        );
        // const data = await res.json();
        console.log("data: ", res.data.content);
        // sau khi lấy dữ liệu từ api về => tạo ra action payload đưa lên store
        const actionPayload = setProductDetailAction(res.data.content);
        dispatch(actionPayload);
    };
};
