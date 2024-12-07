export const numberReducer = (number = 200, action) => {
    if (action.type === "CHANGE_QUALITY") {
        number += action.payload;
    }
    return number;
};
