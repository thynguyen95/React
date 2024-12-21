import { useState } from "react";
import HeaderHome from "./components/HeaderHome";
import Card from "./components/Card";
import Databinding from "./Databinding/Databinding";
import DemoEvent from "./Event/DemoEvent";
import RenderCondition from "./RenderCondition/RenderCondition";
import ChangeNumber from "./State/ChangeNumber";
import ChangeFontSize from "./State/ChangeFontSize";
import DemoProps from "./Props/DemoProps";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import ProductList from "./RenderWithMap/BTProductList/ProductList";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import ExCarStore from "./LiftingStateUp/ExCarStore/ExCarStore";
import ShoePage from "./ApiDemo/ShoePage";
import DemoLoginForm from "./FormDemo/DemoLoginForm";
import DemoLoginFormik from "./FormDemo/DemoLoginFormik";
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import HeaderRouter from "./components/HeaderRouter";
import HomePageMaster from "./MasterPage/HomePageMaster";
import UserPageMaster from "./MasterPage/UserPageMaster";
import AdminMasterPage from "./MasterPage/AdminMasterPage";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
import Detail from "./LiftingStateUp/Detail";
import DetailProduct from "./pages/DetailProduct";
import Search from "./pages/Search";
import AddProduct from "./pages/ProductManagement/AddProduct";
import EditProduct from "./pages/ProductManagement/EditProduct";
import Product from "./pages/ProductManagement/Product";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeNumberRedux from "./pages/ReduxDemo/ChangeNumberRedux";
import ChangFontSizeRedux from "./pages/ReduxDemo/ChangFontSizeRedux";
import Register from "./pages/Register";

// cấu hình CustomBrowserHistory
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from "./services/configURL";
import Spinner from "./components/Spinner";
// cấu hình react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// cấu hình react-query-devtool
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ShoeShopQR from "./ReactQueryDemo/ShoeShopQR";
import RQMasterPage from "./MasterPage/RQMasterPage";
import UserManagementRQ from "./ReactQueryDemo/UserManagementRQ";

// cấu hình react-query & devtool
// tương tự store của redux
const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={true} />
                <Spinner />

                <HistoryRouter history={navigateHistory}>
                    <Routes>
                        {/* route base  */}

                        {/* định nghĩa trang chủ  */}
                        {/* <Route path="" element={<Home />} />
                    <Route index element={<Home />} />

                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} /> */}

                        {/* nesting router */}
                        {/* <Route index element={<HomePageMaster />} /> */}
                        {/* <Route path="/home" element={<HomePageMaster />} /> */}

                        <Route path="/" element={<HomePageMaster />}>
                            <Route index element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="search" element={<Search />} />

                            <Route
                                path="redux"
                                element={
                                    <>
                                        <h1 className="text-center text-red-500 text-4xl">
                                            Demo Redux
                                        </h1>
                                        <Outlet />
                                    </>
                                }
                            >
                                <Route
                                    path="change-number"
                                    element={<ChangeNumberRedux />}
                                />
                                <Route
                                    path="change-fontsize"
                                    element={<ChangFontSizeRedux />}
                                />
                            </Route>

                            <Route path="detail">
                                <Route
                                    path=":prodID"
                                    element={<DetailProduct />}
                                />
                            </Route>
                            <Route path="*" element={<Page404 />} />
                        </Route>

                        <Route path="user" element={<UserPageMaster />}>
                            {/* <Route path="login" element={<DemoLoginForm />} /> */}

                            {/* demo hook navigate */}
                            <Route path="login" element={<Login />} />

                            <Route path="register" element={<Register />} />
                            <Route
                                path="forgot-pass"
                                element={<ForgotPass />}
                            />

                            {/* <Route path="*" element={<Page404 />} /> */}
                            {/* Navigate: tự chuyển hướng  */}
                            <Route
                                path="*"
                                element={<Navigate to={"../login"} />}
                            />
                        </Route>

                        <Route path="admin" element={<AdminMasterPage />}>
                            <Route index element={<UserManagement />} />
                            <Route
                                path="usermanagement"
                                element={<UserManagement />}
                            />
                            <Route
                                path="productmanagement"
                                element={<ProductManagement />}
                            />
                            <Route path="product" element={<Product />} />
                            <Route path="product/:id" element={<Product />} />

                            <Route
                                path="add-product"
                                element={<AddProduct />}
                            />
                            <Route path="edit-product">
                                <Route path=":id" element={<EditProduct />} />
                            </Route>

                            <Route path="*" element={<Page404 />} />
                        </Route>

                        <Route path="react-query" element={<RQMasterPage />}>
                            {/* <Route index element={<ShoeShopQR />} /> */}
                            <Route
                                path="useClient-demo"
                                element={<ShoeShopQR />}
                            />
                            <Route
                                path="useMutation-demo"
                                element={<UserManagementRQ />}
                            />
                        </Route>
                    </Routes>
                </HistoryRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
