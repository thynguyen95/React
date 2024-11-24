import React, { useState } from "react";
import Detail from "./Detail";
import Card from "./Card";
import Cart from "./Cart";

const data = [
    {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/imgPhone/vsphone.jpg",
    },
    {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/imgPhone/meizuphone.jpg",
    },
    {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/imgPhone/applephone.jpg",
    },
];

const LiftingStateUp = () => {
    const [detailProduct, setDetailProduct] = useState({
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/imgPhone/vsphone.jpg",
    });

    let [cart, setCart] = useState([
        // {
        //     maSP: 1,
        //     tenSP: "VinSmart Live",
        //     giaBan: 5700000,
        //     hinhAnh: "./img/imgPhone/vsphone.jpg",
        //     soLuong: 2,
        // },
    ]);

    // state đặt ở đâu thì hàm xử lý setState sẽ nằm ở cpn đó
    const addProductToCart = (selectedProduct) => {
        console.log("selectedProduct: ", selectedProduct);
        // thêm soLuong cho sp
        const productCart = { ...selectedProduct, soLuong: 1 };

        /*
            khi click vào thêm giỏ hàng có 2 trường hợp:
            + sp mới => thêm vào mảng
            + sp đã có => tăng sl
        */
        const sp = cart.find((item) => item.maSP == productCart.maSP);

        if (sp) {
            sp.soLuong += 1;
        } else {
            // cart.push(productCart);
            cart = [...cart, productCart];
        }

        // const newCart = [...cart, productCart];
        const newCart = [...cart];

        setCart(newCart);
    };

    const deleteProductCart = (idProduct) => {
        console.log("idProduct: ", idProduct);
        // xử lý xóa
        const cartUpdate = [...cart.filter((item) => item.maSP !== idProduct)];

        // setState
        setCart(cartUpdate);
    };

    const updateQuality = (id, quality) => {
        // xử lý
        const sp = cart.find((item) => item.maSP == id);

        if (sp) {
            sp.soLuong += quality;

            if (sp.soLuong === 0) {
                if (window.confirm("Bạn có muốn xóa ko?")) {
                    deleteProductCart(sp.maSP);
                } else {
                    sp.soLuong = 1;
                }

                // trong logic xóa đã có setState lại, khi call method xóa xong state đã được set nên return để dừng code luôn, nếu setState lại lần nữa sẽ thừa
                return;
            }
        }

        // setState
        let newCart = [...cart];
        setCart(newCart);
    };

    const renderCard = () => {
        return data.map((item) => {
            return (
                <Card
                    key={item.maSP}
                    item={item}
                    handleChangeState={setDetailProduct}
                    addProductToCart={addProductToCart}
                />
            );
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="title">Lifting State Up</h1>

            <h2 className="title2">Danh sách sản phẩm</h2>

            <Cart
                cart={cart}
                deleteProductCart={deleteProductCart}
                updateQuality={updateQuality}
            />
            <hr />

            <div className="grid grid-cols-3 gap-5">{renderCard()}</div>

            <Detail detailProduct={detailProduct} />
        </div>
    );
};

export default LiftingStateUp;
