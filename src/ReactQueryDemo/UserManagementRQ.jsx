import React from "react";
import RegisterFormRQ from "./RegisterFormRQ";
import TableUserRQ from "./TableUserRQ";

const UserManagementRQ = () => {
    return (
        <div className="container mx-auto">
            <RegisterFormRQ />

            <TableUserRQ />
        </div>
    );
};

export default UserManagementRQ;
