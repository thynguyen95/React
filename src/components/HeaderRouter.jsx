import { Dropdown } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { TOKEN, USER_LOGIN } from "../services/constants";

// client-side rendering(CSR): Trình duyệt tạo ra HTML, máy chủ chỉ gửi mã JavaScript và dữ liệu.
// server-side rendering(SSR): Máy chủ tạo ra HTML, trình duyệt chỉ hiển thị HTML đã được tạo ra.

const HeaderRouter = () => {
    const cartStore = useSelector((state) => state.cartSliceReducer.cart);
    const { userLogin } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    const renderLogin = () => {
        if (userLogin) {
            return (
                <>
                    <NavLink
                        to="/profile"
                        end
                        className={(props) =>
                            props.isActive
                                ? "text-red-500"
                                : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        }
                    >
                        Hello {userLogin.email}
                    </NavLink>
                    <NavLink
                        className={(props) =>
                            props.isActive
                                ? "text-red-500"
                                : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        }
                        onClick={() => {
                            localStorage.removeItem(TOKEN);
                            localStorage.removeItem(USER_LOGIN);
                            // navigate("/user/login");
                            window.location.reload();
                        }}
                    >
                        Logout
                    </NavLink>
                </>
            );
        }

        return (
            <NavLink
                to="/user/login"
                end
                className={(props) =>
                    props.isActive
                        ? "text-red-500"
                        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
            >
                User login
            </NavLink>
        );
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </NavLink>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                    style={({ isActive }) =>
                                        isActive
                                            ? { color: "yellow" }
                                            : { color: "blue" }
                                    }
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/user/register"
                                    end
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                >
                                    register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/react-query"
                                    end
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                >
                                    react-query
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/search"
                                    end
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                >
                                    search
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admin"
                                    end
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                >
                                    admin
                                </NavLink>
                            </li>
                            <li>
                                <Dropdown label="Redux" inline>
                                    <Dropdown.Item>
                                        <NavLink to={"/redux/change-number"}>
                                            Change number
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink to={"/redux/change-fontsize"}>
                                            Change font size
                                        </NavLink>
                                    </Dropdown.Item>
                                </Dropdown>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    className={(props) =>
                                        props.isActive
                                            ? "text-red-500"
                                            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }
                                >
                                    {/* cart({cartStore.length}) */}
                                    cart(
                                    {cartStore.reduce(
                                        (total, item) =>
                                            total + item.quantityCart,
                                        0
                                    )}
                                    )
                                </NavLink>
                            </li>
                            <li>{renderLogin()}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderRouter;
