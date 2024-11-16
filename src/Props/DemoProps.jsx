import React, { useState } from "react";
import CardProduct from "./CardProduct";
import ArticleItem from "./ArticleItem";
import ModalComponent from "./ModalComponent";
import ChangeFontSize from "../State/ChangeFontSize";
import ChangeNumber from "../State/ChangeNumber";
import DemoPropsChildren from "./DemoPropsChildren";
import DemoPropsCallback from "./DemoPropsCallback";

const DemoProps = () => {
    const detail = {
        title: "ABC",
        content: "Lorem",
        img: "https://picsum.photos/id/1/200/200",
    };

    const [login, setLogin] = useState(false);

    const renderLogin = () => {
        if (login) {
            return <h3>hello</h3>;
        } else {
            return (
                <button
                    onClick={() => {
                        setLogin(true);
                    }}
                >
                    Login
                </button>
            );
        }
    };

    return (
        <div className="container mx-auto">
            <h3 className="text-center text-red-500 text-4xl mb-5">
                Danh sách SP
            </h3>

            <div className="flex gap-2">
                <div className="w-1/3">
                    <CardProduct tenSanPham="A" />
                </div>
                <div className="w-1/3">
                    <CardProduct tenSanPham="B" />
                </div>
                <div className="w-1/3">
                    <CardProduct tenSanPham="C" />
                </div>
            </div>

            <h3 className="text-center text-red-500 text-4xl mb-5">
                Danh sách bài viết
            </h3>

            <ArticleItem
                content={{
                    title: "ABC",
                    content: "Lorem",
                    img: "https://picsum.photos/id/1/200/200",
                }}
            />
            <ArticleItem content={detail} />
            <ArticleItem />

            <h1 className="text-center text-red-500 text-4xl mt-5">
                ModalComponent
            </h1>
            <ModalComponent
                title="login form"
                contentJSX={
                    <>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        defaultValue
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                }
            />
            <ModalComponent
                title="change font size app"
                contentJSX={<ChangeFontSize />}
            />
            <ModalComponent
                title="change number app"
                contentJSX={<ChangeNumber />}
            />

            <h1 className="text-center text-red-500 text-4xl mt-5">
                DemoPropsChildren
            </h1>
            <DemoPropsChildren title="Children">
                <h3>Abc</h3>
                <ChangeFontSize />
            </DemoPropsChildren>

            <h1 className="text-center text-red-500 text-4xl mt-5">
                DemoPropsCallback
            </h1>
            <DemoPropsCallback renderCondition={renderLogin} />
        </div>
    );
};

export default DemoProps;
