import React from "react";
import { Outlet } from "react-router-dom";

const UserPageMaster = () => {
    return (
        <div className="bg-black h-screen text-white">
            <h1>UserPageMaster</h1>
            <Outlet />
        </div>
    );
};

export default UserPageMaster;
