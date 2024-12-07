import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminMasterPage = () => {
    return (
        <div className="flex">
            <aside className="w-1/6 h-screen bg-black text-white">
                <nav>
                    <ul>
                        <li className="my-6">
                            <NavLink
                                to={"/admin/usermanagement"}
                                className={"p-4"}
                            >
                                User
                            </NavLink>
                        </li>
                        <li className="my-5">
                            <NavLink
                                to={"/admin/productmanagement"}
                                className={"p-4"}
                            >
                                Product
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="w-5/6">
                <header className="bg-blue-400 p-4">header</header>
                <div className="content p-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminMasterPage;
