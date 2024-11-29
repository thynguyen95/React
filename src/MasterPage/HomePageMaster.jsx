import React from "react";
import HeaderRouter from "../components/HeaderRouter";
import { Outlet } from "react-router-dom";

const HomePageMaster = () => {
    return (
        <>
            <HeaderRouter />

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

export default HomePageMaster;
