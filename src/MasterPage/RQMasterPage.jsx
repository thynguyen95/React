import React from "react";
import { Outlet } from "react-router-dom";
import HeaderRQ from "../components/HeaderRQ";

const RQMasterPage = () => {
    return (
        <>
            <HeaderRQ />

            <div className="content">
                {/* Outlet đại diện cho các cpn khác nhau được load tại block này  */}
                <Outlet />
            </div>

            <footer className="bg-black p-4 text-center text-white">
                Footer
            </footer>
        </>
    );
};

export default RQMasterPage;
