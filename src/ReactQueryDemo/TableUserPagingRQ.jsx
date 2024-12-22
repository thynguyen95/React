import React, { useState } from "react";
import { Pagination, Space, Table, Tag } from "antd";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllUserPagingAPI } from "../API/userAPI";
import { Alert, Spinner } from "flowbite-react";

// data show lên table
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

const TableUserPagingRQ = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const { data, isLoading, isFetching, error } = useQuery({
        // pageIndex: khi tham số thay đổi thì key gọi lại tương tự dependency trong useEffect
        queryKey: ["userPaging", pageIndex, pageSize],
        queryFn: getAllUserPagingAPI,
        staleTime: 10 * 1000,
        gcTime: 15 * 1000,
        refetchOnWindowFocus: true,
        placeholderData: keepPreviousData,
    });

    // Loading state
    // thêm isFetching khi dùng keepPreviousData
    if (isLoading || isFetching) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Spinner size="large" />
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <Alert
                message="Error"
                description="There was an error fetching the data."
                type="error"
                showIcon
            />
        );
    }

    // Extract items from data
    console.log("data", data);
    const items =
        data?.items.map((item) => ({
            ...item,
            key: item.id, // Thêm key duy nhất vào từng phần tử nếu ko sẽ bị lỗi key
        })) || [];

    // custome cột
    const columns = [
        {
            title: "ID",
            dataIndex: "id", // muốn hiển thị trường nào thì để theo index của data trả về của trường đó
            key: "id",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            render: (data, record) => {
                return record.gender ? <p>male</p> : <p>female</p>;
            },
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={items}
                rowKey={"id"}
                pagination={{
                    pageSize: data.pageSize,
                    current: pageIndex,
                    total: data.totalRow, // `total` là tổng số bản ghi
                    onChange: (page, size) => {
                        setPageIndex(page);
                        setPageSize(size);
                    },
                }}
            />
            {/* <Pagination defaultCurrent={6} total={500} />; */}
        </>
    );
};
export default TableUserPagingRQ;
