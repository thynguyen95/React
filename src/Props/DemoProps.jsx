import React from "react";
import CardProduct from "./CardProduct";

const DemoProps = () => {
    return (
        <div>
            <h3>Danh sách SP</h3>

            <div className="flex">
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
        </div>
    );
};

export default DemoProps;
