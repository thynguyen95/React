import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const DetailProduct = () => {
    const [proDetail, setProDetail] = useState({});
    const [transform, setTransform] = useState("rotate(180deg)");

    const param = useParams(); //global state, bất kì cpn nào cũng lấy được
    console.log("param: ", param);

    const getProductById = async () => {
        const res = await fetch(
            `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodID}`
        );

        const data = await res.json();
        console.log("data: ", data.content);

        // setState sau khi lấy dữ liệu từ api về
        setProDetail(data.content);
    };

    useEffect(() => {
        // gọi khi html load xong
        getProductById();
    }, [param.prodID]);

    return (
        <div className="container mx-auto">
            <h1>Sản phẩm</h1>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-1/3 rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg">
                    <img
                        className="object-cover"
                        style={{ transform: transform }}
                        src={proDetail.image}
                        alt
                    />
                    <div className="grid grid-cols-4">
                        {proDetail.detaildetailedImages?.map((deg, index) => {
                            return (
                                <img
                                    key={index}
                                    className="rounded-t-lg"
                                    style={{
                                        transform: deg,
                                        border: `1px solid ${
                                            deg === transform
                                                ? "orange"
                                                : "gray"
                                        }`,
                                    }}
                                    src={proDetail.image}
                                    alt
                                    onClick={() => {
                                        setTransform(deg);
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="w-2/3 flex flex-col justify-between p-4 leading-normal">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {proDetail.name}{" "}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {proDetail.description}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {proDetail.price}
                    </p>

                    <div className="grid grid-cols-4 gap-3">
                        {proDetail.size?.map((size) => {
                            return <Button key={size}>{size}</Button>;
                        })}
                    </div>
                </div>
            </div>

            <h3 className="mt-5">Sản phẩm liên quan</h3>
            <div className="grid grid-cols-3 gap-5">
                {proDetail.relatedProducts?.map((productRelated) => {
                    return (
                        <div
                            key={productRelated.id}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src={productRelated.image}
                                    alt
                                />
                                <div className="grid grid-cols-4">
                                    {proDetail.detaildetailedImages?.map(
                                        (deg, index) => {
                                            return (
                                                <img
                                                    key={index}
                                                    className="rounded-t-lg"
                                                    style={{ transform: deg }}
                                                    src={productRelated.image}
                                                    alt
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {productRelated.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {productRelated.price}
                                </p>
                                <NavLink
                                    to={`/detail/${productRelated.id}`}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DetailProduct;
