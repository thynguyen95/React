import { Button } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartStore = useSelector((state) => state.cartReducer);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-4xl mb-5">Cart</h1>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quality
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartStore.map((item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img src={item.image} alt="" />
                                    </td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <Button>-</Button>
                                            <span className="text-2xl mx-3">
                                                {item.quality}
                                            </span>
                                            <Button>+</Button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">
                                        {item.price * item.quality}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button>Xóa</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
