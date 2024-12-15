import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProductAction } from "../redux/reducers/cartReducer";
import { http } from "../services/configURL";
import Spinner from "../components/Spinner";
import { getProductApiActionThunk } from "../redux/reducers/productReducer";

const Home = () => {
    // const [arrProduct, setArrProduct] = useState([]);

    // lấy arrProduc từ redux
    const { arrProduct } = useSelector((state) => state.productReducer);

    // hook dispatch dùng để đưa dữ liệu lên store(redux) thông qua biến action(type, payload)
    const dispatch = useDispatch();

    // spinner
    const [isLoading, setIsLoading] = useState(false);

    const getAllProduct = () => {
        // http.get("https://apistore.cybersoft.edu.vn/api/Product")
        //     .then((res) => {
        //         console.log("res: ", res);
        //         setArrProduct(res.data.content);
        //         setIsLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //         setIsLoading(false);
        //     });

        /*
            actionPayload: {type, payload}
            actionThunk: (dispatch2) => {
                tự định nghĩa nội dung để có dữ liệu dispatch 2 lên store    
            }
        */
        const actionThunk = getProductApiActionThunk();

        dispatch(actionThunk);
    };

    useEffect(() => {
        // setIsLoading(true);

        getAllProduct();
    }, []);

    return (
        <div className="container mx-auto">
            {isLoading ? <Spinner /> : ""}

            <h3 className="mt-5 text-center text-red-500 text-4xl mb-5">
                Danh sách Sản phẩm
            </h3>

            <div className="grid grid-cols-3 gap-2">
                {arrProduct?.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src={item.image}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.price}
                                </p>
                                <NavLink
                                    to={`/detail/${item.id}`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                </NavLink>
                                <Button
                                    onClick={() => {
                                        // cách 1:
                                        // // tạo ra action chứa dữ liệu đưa lên store
                                        // const action = {
                                        //     type: "ADD_PRODUCT",
                                        //     payload: { ...item, quantityCart: 1 },
                                        // };

                                        // // đưa lên redux
                                        // dispatch(action);

                                        // cách 2: dùng redux slice
                                        // 2.1 tạo action slice thủ công
                                        // const action = {
                                        //     // type: tenReducer/tenMethod
                                        //     type: "cartReducer/addProductAction",
                                        //     payload: { ...item, quantityCart: 1 },
                                        // };

                                        // 2.2 tạo action slice bằng hàm export
                                        const action = addProductAction({
                                            ...item,
                                            quantityCart: 1,
                                        });

                                        dispatch(action);
                                    }}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
