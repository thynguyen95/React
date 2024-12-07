import axios from "axios";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const param = useParams(); // lấy tham số trên thanh url
    const { id } = param;
    const navigate = useNavigate();

    const getProductByID = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`,
            method: "GET",
        })
            .then((res) => {
                console.log("res: ", res.data);

                // lấy dữ liệu về thành công => đưa lên form
                // productEdit.setFieldValue("id", res.data.id); // set values từng field
                productEdit.setValues(res.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    useEffect(() => {
        getProductByID();
    }, [id]); //id thay đổi sẽ call lại api
    //trong trường hợp này dùng [] vẫn được vì mỗi lần click edit sẽ tạo lại cpn edit

    const productEdit = useFormik({
        initialValues: {
            id: "",
            name: "",
            price: "",
            img: "",
            description: "",
            type: "",
            deleted: false, // backend quản lý
        },
        onSubmit: (values) => {
            console.log("values: ", values);
            // gọi api update
            axios({
                url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${values.id}`,
                method: "PUT",
                data: values,
            })
                .then((res) => {
                    console.log("res: ", res);
                    alert("update thành công");

                    // update thành công chuyển về trang quản lý
                    navigate("../../product");
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        },
    });

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">Edit Product</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={productEdit.handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="id" value="Your id" />
                        </div>
                        <TextInput
                            id="id"
                            type="text"
                            name="id" // thêm trường name
                            data-type="id"
                            readOnly
                            disabled
                            value={productEdit.values.id}
                            onChange={productEdit.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name="name" // thêm trường name
                            data-type="name"
                            value={productEdit.values.name}
                            onChange={productEdit.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Your price" />
                        </div>
                        <TextInput
                            id="price"
                            type="text"
                            name="price" // thêm trường price
                            data-type="price"
                            value={productEdit.values.price}
                            onChange={productEdit.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="image" value="Your image" />
                        </div>
                        <TextInput
                            id="image"
                            type="text"
                            name="img" // thêm trường image
                            data-type="image"
                            value={productEdit.values.img}
                            onChange={productEdit.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Your description"
                            />
                        </div>
                        <TextInput
                            id="description"
                            type="text"
                            name="description" // thêm trường description
                            data-type="description"
                            value={productEdit.values.description}
                            onChange={productEdit.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="type" value="Your type" />
                        </div>
                        <Select
                            id="server"
                            name="type"
                            required
                            value={productEdit.values.type}
                            onChange={productEdit.handleChange}
                        >
                            <option value={"SONY"}>SONY</option>
                            <option value={"APPLE"}>APPLE</option>
                            <option value={"SAMSUNG"}>SAMSUNG</option>
                            <option value={"XIAOMI"}>XIAOMI</option>
                        </Select>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
