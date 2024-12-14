import React from "react";
import { Outlet } from "react-router-dom";
import HeaderRouter from "../components/HeaderRouter";

const UserPageMaster = () => {
    return (
        <div
            className="h-screen "
            style={{
                background: "url(https://picsum.photos/2000/2000)",
                backgroundSize: "cover",
            }}
        >
            <HeaderRouter />
            <div className="flex items-center justify-center h-full bg-black bg-opacity-15">
                <Outlet />
            </div>
        </div>
    );
};

export default UserPageMaster;
