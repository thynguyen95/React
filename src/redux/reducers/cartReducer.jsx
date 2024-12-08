import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            id: 1,
            name: "product",
            price: 1000,
            quality: 2,
            image: "https://picsum.photos/200/200",
        },
    ],
};

const cartReducer = createSlice({
    name: "cartReducer", // tên reducer
    initialState, // giá trị default ban đầu
    reducers: {
        addProductAction: (state, action) => {
            const { type, payload } = action;
            // Redux Toolkit sử dụng Immer để tự xử lý imutable nên có thể "code trông như" đang thay đổi trực tiếp state
            const itemIndex = state.cart.findIndex(
                (item) => item.id === payload.id
            );

            if (itemIndex !== -1) {
                state.cart[itemIndex].quality += 1;
            } else {
                // [...state.cart, payload];

                state.cart.push(payload);
            }
            // tự xử lý imutable
        },
        deleteProductAction: (state, action) => {
            console.log("action: ", action);
            const { payload } = action;

            state.cart = state.cart.filter((item) => item.id !== payload);
        },
    }, // hàm xử lý action
});

export const { addProductAction, deleteProductAction } = cartReducer.actions; // bóc tách hàm xử lý action

export default cartReducer.reducer; //cartReducer.reducer chính là reducer của file này
