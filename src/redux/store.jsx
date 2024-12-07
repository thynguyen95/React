// file này sẽ chứa toàn bộ state của ứng dụng

import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers/numberReducer";
import { fontSizeReducer } from "./reducers/fontSizeReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartDefault = [
    {
        id: 1,
        name: "product",
        price: 1000,
        quality: 2,
        image: "https://picsum.photos/200/200",
    },
];

export const store = configureStore({
    // có thể có nhiều reducer
    reducer: {
        // hàm này là hàm sẽ return về state (reducer)
        // numberReducer: (number = 200, action) => {
        //     if (action.type === "CHANGE_QUALITY") {
        //         number += action.payload;
        //     }
        //     return number;
        // },
        // fontSizeReducer: (fontSize = 20, action) => {
        //     // tất cả reducer đều chạy khi dispatch bất kì cpn nào
        //     const { type, payload } = action;

        //     if (type === "CHANGE_FONT_SIZE") {
        //         fontSize += payload;
        //     }

        //     return fontSize; // imutable : tính bất biến
        // },
        // cartReducer: (cart = cartDefault, action) => {
        //     console.log("cart: ", cart);
        //     const { type, payload } = action;
        //     console.log("payload: ", payload);
        //     // let newCart = [...cart];

        //     if (type === "ADD_PRODUCT") {
        //         // cart.push(payload); không dùng cách này vì thay đổi trực tiếp state cart
        //         // newCart.push(payload);
        //         return [...cart, payload];
        //     }

        //     return cart;
        // },
        // AReducer: (state = A) => state,
        // BReducer: (state = B) => state,
        numberReducer: numberReducer, // cách 2 rút gọn, tách logic
        fontSizeReducer: fontSizeReducer,
        cartReducer: cartReducer,
    },
});

/*
    imutable: 
    khi reducer trả về giá trị mới (shallow compare) thì cpn useSelector đến state đó sẽ render lại, còn các cpn follow từ các reducer khác nếu không thay đổi sẽ không render lại 
*/
