import { http } from "../../services/configURL";
import { TOKEN, USER_LOGIN } from "../../services/constants";
import { userService } from "../../services/user.service";
import { setProfileAction, setUserLoginAction } from "../reducers/userReducer";

// action async
export const loginActionAsync = (userLoginModel) => {
    return async (dispatch, getState) => {
        try {
            // const res = await http.post(
            //     "/api/Users/signin",
            //     userLoginModel,
            //     { skipLoading: true } // tùy chỉnh để không bật loading
            // );

            // cách 2: dùng service
            const res = await userService.login(userLoginModel);

            const token = res.data.content.accessToken;
            const userLogin = JSON.stringify(res.data.content);
            localStorage.setItem(TOKEN, token);
            localStorage.setItem(USER_LOGIN, userLogin);

            // // nạp dữ liệu lên store
            const actionPayload = setUserLoginAction(res.data.content);
            dispatch(actionPayload);

            // call api get profile
            const actionProfile = getProfileActionAsync();
            dispatch(actionProfile);

            // getState: cho phép get toàn bộ state trên redux
            const globalState = getState();
            console.log("globalState: ", globalState);
        } catch (error) {
            console.log("error: ", error);
        }
    };
};

export const getProfileActionAsync = () => {
    return async (dispatch) => {
        const res = await http.post("/api/Users/getProfile", {
            skipLoading: true,
        });

        console.log("res: ", res);

        const actionPayload = setProfileAction(res.data.content);
        dispatch(actionPayload);
    };
};
