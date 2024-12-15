import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http, TOKEN } from "../services/configURL";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();

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

        http.post("/api/Users/getProfile")
            .then((res) => {
                console.log("res: ", res);
                setProfile(res.data.content);
            })
            .catch((err) => {
                console.log("err: ", err);
                alert("Đăng nhập để vào profile");
                navigate("/user/login");
            });
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="container">
            <div className="flex">
                <div className="w-2/6">
                    <div className="img">
                        <img src={profile.avatar} alt="" />
                    </div>
                </div>
                <div className="w-4/6">
                    <div className="border border-red-500">
                        <p>{profile.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
