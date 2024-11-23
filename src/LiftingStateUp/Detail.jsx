import React from "react";

const Detail = (props) => {
    const { detailProduct } = props;
    return (
        <div className="flex mt-10">
            <div className="image w-1/3">
                <img src={detailProduct.hinhAnh} alt="" />
            </div>
            <div className="content w-2/3">
                <h3 className="text-2xl font-bold mb-6">Thông số Kỹ thuật</h3>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Màn Hình
                                </th>
                                <td className="px-6 py-4">
                                    {detailProduct.manHinh}
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Hệ điều hành
                                </th>
                                <td className="px-6 py-4">
                                    {detailProduct.heDieuHanh}
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Camera Trước
                                </th>
                                <td className="px-6 py-4">
                                    {detailProduct.cameraTruoc}
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Camera Sau
                                </th>
                                <td className="px-6 py-4">
                                    {detailProduct.cameraSau}
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Ram
                                </th>
                                <td className="px-6 py-4">
                                    {detailProduct.ram}
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Rom
                                </th>
                                <td className="px-6 py-4">
                                    {detailProduct.rom}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Detail;
