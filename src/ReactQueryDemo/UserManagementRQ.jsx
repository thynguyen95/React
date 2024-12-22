import React from "react";
import RegisterFormRQ from "./RegisterFormRQ";
import TableUserRQ from "./TableUserRQ";
import TableUserPagingRQ from "./TableUserPagingRQ";

const UserManagementRQ = () => {
    return (
        <div className="container mx-auto">
            <RegisterFormRQ />

            {/* <TableUserRQ /> */}
            <TableUserPagingRQ />
        </div>
    );
};

export default UserManagementRQ;
