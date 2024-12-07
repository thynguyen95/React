export const fontSizeReducer = (fontSize = 20, action) => {
    // tất cả reducer đều chạy khi dispatch bất kì cpn nào
    const { type, payload } = action;

    if (type === "CHANGE_FONT_SIZE") {
        fontSize += payload;
    }

    return fontSize; // imutable : tính bất biến
};
