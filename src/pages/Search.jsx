import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    console.log("keyword", keyword);

    // useSearchParam: lưu giá trị người dùng nhập lên url
    const [search, setSearch] = useSearchParams();

    // state danh sách sản phẩm lấy từ api theo keyword
    const [arrProduct, setArrProduct] = useState([]);

    const valueKeyword = search.get("q");

    const getProductByKeyword = () => {
        if (valueKeyword) {
            // gọi api
            axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product?keyword=${valueKeyword}`,
                method: "GET",
            })
                .then((res) => {
                    console.log("res: ", res.data.content);
                    setArrProduct(res.data.content);
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        }
    };

    useEffect(() => {
        getProductByKeyword(); // gọi api dựa trên keyword
    }, [valueKeyword]); // nếu keyword thay đổi thì useEffect sẽ chạy lại

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");

        // đưa giá trị lên url
        setSearch({
            q: keyword,
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">Search</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="search" value="Your keyword" />
                        </div>
                        <TextInput
                            id="search"
                            type="search"
                            name="search" // thêm trường name
                            placeholder="keyword"
                            data-type="search"
                            onInput={(e) => {
                                setKeyword(e.target.value);
                            }}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>

            <h1 className="title mb-5">Result</h1>

            <div className="grid grid-cols-3 gap-5">
                {arrProduct.length > 0 ? (
                    arrProduct.map((item) => {
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
                                    <div className="grid grid-cols-4">
                                        {item.detaildetailedImages?.map(
                                            (deg, index) => {
                                                return (
                                                    <img
                                                        key={index}
                                                        className="rounded-t-lg"
                                                        style={{
                                                            transform: deg,
                                                        }}
                                                        src={item.image}
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
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Sản phẩm không tồn tại....</p>
                )}
            </div>
        </div>
    );
};

export default Search;
