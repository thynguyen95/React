import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUserAPI } from "../API/userAPI";

const TableUserRQ = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["getAllUser"],
        queryFn: getAllUserAPI,
        staleTime: 5 * 60 * 1000,
        cacheTime: 6 * 60 * 1000,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Lỗi {query.error.message}</div>;
    }

    return (
        <div>
            <h3>User management</h3>

            {data?.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TableUserRQ;
