import React from "react";

import { Button, Table } from "flowbite-react";

const Cart = (props) => {
    const { cart, deleteProductCart, updateQuality } = props;
    console.log("cart: ", cart);

    const renderCart = () => {
        return cart.map((product) => {
            return (
                <>
                    <Table.Row
                        key={product.maSP}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {product.maSP}
                        </Table.Cell>
                        <Table.Cell>
                            <img src={product.hinhAnh} alt="" />
                        </Table.Cell>
                        <Table.Cell> {product.tenSP}</Table.Cell>
                        <Table.Cell>{product.giaBan}</Table.Cell>
                        <Table.Cell>
                            <Button
                                color="blue"
                                onClick={() => {
                                    updateQuality(product.maSP, -1);
                                }}
                            >
                                -
                            </Button>
                            {product.soLuong}
                            <Button
                                color="blue"
                                onClick={() => {
                                    updateQuality(product.maSP, 1);
                                }}
                            >
                                +
                            </Button>
                        </Table.Cell>
                        <Table.Cell>
                            {(
                                product.soLuong * product.giaBan
                            ).toLocaleString()}
                        </Table.Cell>
                        <Table.Cell>
                            <a
                                href="#"
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                <Button
                                    color="failure"
                                    onClick={() => {
                                        deleteProductCart(product.maSP);
                                    }}
                                >
                                    Xóa
                                </Button>
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </>
            );
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-4xl">Cart</h1>

            <h3>giỏ hàng: {cart.length}</h3>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Mã</Table.HeadCell>
                        <Table.HeadCell>Hình ảnh</Table.HeadCell>
                        <Table.HeadCell>Tên</Table.HeadCell>
                        <Table.HeadCell>Giá</Table.HeadCell>
                        <Table.HeadCell>Số lượng</Table.HeadCell>
                        <Table.HeadCell>Thành tiền</Table.HeadCell>
                        <Table.HeadCell></Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">{renderCart()}</Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Cart;
