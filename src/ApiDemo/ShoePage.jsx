import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ShoePage = () => {
    const [arrProduct, setArrProduct] = useState([]);

    const getAllProductApi = async () => {
        // gọi api và setState

        const res = await fetch(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );
        // console.log("res: ", res);

        const data = await res.json();
        // console.log("data: ", data);

        setArrProduct(data.content);
    };

    const getAllProductAxios = async () => {
        const res = await axios.get(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );
        // Dữ liệu axios trả về thông qua res.data
        setArrProduct(res.data.content);
    };

    // getAllProductApi() //lỗi

    console.log("mounting");

    // useEffect sẽ chạy sau khi html render và mỗi khi bất kì hàm setState nào được gọi
    // useEffect(() => {
    //     console.log("useEffect");
    //     getAllProductApi();
    // });

    // dependency List: [] thì hàm chỉ chạy 1 lần sau khi render compoennt
    useEffect(() => {
        console.log("useEffect");
        // getAllProductApi();
        getAllProductAxios();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="title">Shoe Page</h1>

            {/* <Button
                className="mb-4"
                onClick={() => {
                    getAllProductApi();
                }}
            >
                get api
            </Button> */}

            <div className="grid grid-cols-3 gap-5">
                {arrProduct.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="max-w-sm"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={item.image}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.price}
                            </p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ShoePage;
