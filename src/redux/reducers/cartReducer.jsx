const cartDefault = [
    {
        id: 1,
        name: "product",
        price: 1000,
        quality: 2,
        image: "https://picsum.photos/200/200",
    },
];

export const cartReducer = (cart = cartDefault, action) => {
    const { type, payload } = action;

    if (type === "ADD_PRODUCT") {
        // kiểm tra sp đã có trong giỏ hàng chưa
        const itemCart = cart.findIndex((item) => item.id === payload.id);

        if (itemCart !== -1) {
            console.log("itemCart: ", itemCart);
            // nếu sản phẩm đã có, update số lượng
            // tạo bản sao để update số lượng, dùng map để trả về 1 array mới để tránh các lỗi về tham chiếu
            return cart.map((item) =>
                item.id === payload.id
                    ? { ...item, quality: item.quality + 1 }
                    : item
            );
        } else {
            return [...cart, payload];
        }

        // cart.push(payload); không dùng cách này vì thay đổi trực tiếp state cart
        // newCart.push(payload);

        // nếu không kiểm tra tồn tại dùng cách này
        let newCart = [...cart, payload];
        return newCart;
    }

    return cart;
};
