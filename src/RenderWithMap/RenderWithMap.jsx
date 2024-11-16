import React from "react";
import PhoneCard from "./PhoneCard";

const RenderWithMap = () => {
    const data = [
        {
            id: 1,
            name: "phone 1",
            img: "https://picsum.photos/id/1/200/200",
            price: 3000,
        },
        {
            id: 2,
            name: "phone 2",
            img: "https://picsum.photos/id/1/200/200",
            price: 3000,
        },
        {
            id: 3,
            name: "phone 3",
            img: "https://picsum.photos/id/1/200/200",
            price: 3000,
        },
    ];

    // + thuộc tính key để theo dõi từng phần tử trong danh sách đó. Nếu không có key, React sẽ phải render lại toàn bộ danh sách, gây tốn tài nguyên.
    // + Với key, React chỉ cập nhật các phần tử đã thay đổi mà không cần phải làm lại toàn bộ danh sách.
    // + key phải là duy nhất trong phạm vi của danh sách hiện tại. Thông thường, bạn có thể sử dụng id của dữ liệu làm key.

    const renderTableBody = () => {
        const arrJSX = [];
        for (let item of data) {
            let tagJSX = (
                <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                >
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.price}</td>
                </tr>
            );

            arrJSX.push(tagJSX);
        }
        return arrJSX; //output: arrJSX [<tr></tr>, <tr></tr>]
    };

    const renderTableWithMap = () => {
        const arrJSX = data.map((item) => {
            return (
                <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                >
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.price}</td>
                </tr>
            );
        });

        return arrJSX;
    };

    const renderArrPhone = () => {
        const arrJSX = data.map((item) => {
            return (
                <div key={item.id}>
                    <PhoneCard dataItem={item} />
                </div>
            );
        });

        return arrJSX;
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-4xl">RenderWithMap</h1>
            <h2 className="text-center text-green-500 text-2xl my-5">
                Table Product
            </h2>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {renderTableBody()} */}
                        {renderTableWithMap()}
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

            <h2 className="text-center text-green-500 text-2xl my-5">
                List Product
            </h2>
            <div>{renderArrPhone()}</div>
        </div>
    );
};

export default RenderWithMap;
