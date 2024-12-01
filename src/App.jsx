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
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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

// cấu hình react-router-dom

function App() {
    return (
        <BrowserRouter>
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
                    <Route path="detail">
                        <Route path=":prodID" element={<DetailProduct />} />
                    </Route>
                    <Route path="*" element={<Page404 />} />
                </Route>

                <Route path="user" element={<UserPageMaster />}>
                    {/* <Route path="login" element={<DemoLoginForm />} /> */}

                    {/* demo hook navigate */}
                    <Route path="login" element={<Login />} />

                    <Route path="register" element={<DemoLoginFormik />} />
                    <Route path="forgot-pass" element={<ForgotPass />} />

                    {/* <Route path="*" element={<Page404 />} /> */}
                    {/* Navigate: tự chuyển hướng  */}
                    <Route path="*" element={<Navigate to={"../login"} />} />
                </Route>

                <Route path="admin" element={<AdminMasterPage />}>
                    <Route index element={<UserManagement />} />
                    <Route path="user" element={<UserManagement />} />
                    <Route path="product" element={<ProductManagement />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
