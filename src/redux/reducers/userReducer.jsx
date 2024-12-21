import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_LOGIN } from "../../services/constants";

// const USER_LOGIN = "userLogin";

let getUserLoginDefault = () => {
    console.log("USER_LOGIN: ", USER_LOGIN);
    if (localStorage.getItem(USER_LOGIN)) {
        const userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
        return userDefault;
    }

    return null;
};

const initialState = {
    userRegister: {
        id: 0,
        email: "hdbfjb",
        password: "",
        name: "",
        gender: true,
        phone: "",
    },
    userLogin: getUserLoginDefault(),
    userProfile: {},
};

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        handleChangeInputAction: (state, action) => {
            const { id, value } = action.payload;
            // xử lý setState

            state.userRegister[id] = value;
        },
        setUserLoginAction: (state, action) => {
            state.userLogin = action.payload;
            console.log("USER_LOGIN: ", USER_LOGIN);
        },
        setProfileAction: (state, action) => {
            state.userProfile = action.payload;
        },
    },
});

export const { handleChangeInputAction, setUserLoginAction, setProfileAction } =
    userReducer.actions;

export default userReducer.reducer;
