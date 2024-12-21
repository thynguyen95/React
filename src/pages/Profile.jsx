import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "../services/configURL";
import { useDispatch, useSelector } from "react-redux";
import { getProfileActionAsync } from "../redux/actions/userActions";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const { userProfile } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getProfile = () => {
        // axios({
        //     url: "https://apistore.cybersoft.edu.vn/api/Users/getProfile",
        //     method: "POST",
        //     headers: {
        //     Authorization: localStorage.getItem(TOKEN),
        //     },
        // })
        //     .then((res) => {
        //         console.log("res: ", res);
        //         setProfile(res.data.content);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //         alert("Đăng nhập để vào profile");
        //         navigate("/user/login");
        //     });

        // http.post("/api/Users/getProfile")
        //     .then((res) => {
        //         console.log("res: ", res);
        //         setProfile(res.data.content);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //         alert("Đăng nhập để vào profile");
        //         navigate("/user/login");
        //     });

        const actionAsync = getProfileActionAsync();
        dispatch(actionAsync);
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="container">
            <div className="flex">
                <div className="w-2/6">
                    <div className="img">
                        <img src={userProfile.avatar} alt="" />
                    </div>
                </div>
                <div className="w-4/6">
                    <div className="border border-red-500">
                        <p>{userProfile.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
