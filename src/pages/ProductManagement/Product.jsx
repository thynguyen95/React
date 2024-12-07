// vừa làm trang add, vừa edit
import axios from "axios";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const match = useMatch("/admin/product/:id");
    // nếu null là add productForm, có giá trị là edit
    console.log("match: ", match);

    const isEdit = !!match; // true: edit -- false: add
    console.log("isEdit: ", isEdit);

    const getProductByID = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${match.params.id}`,
            method: "GET",
        })
            .then((res) => {
                console.log("res: ", res.data);

                // lấy dữ liệu về thành công => đưa lên form
                // productForm.setFieldValue("id", res.data.id); // set values từng field
                productForm.setValues(res.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    useEffect(() => {
        // gọi api get by id
        if (isEdit) {
            getProductByID();
        }
    }, [isEdit]);

    const productForm = useFormik({
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
            let url =
                "https://apitraining.cybersoft.edu.vn/api/ProductApi/create";
            let method = "POST";

            if (isEdit) {
                url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${values.id}`;
                method = "PUT";
            }

            // gọi api
            axios({
                url: url,
                method: method,
                data: values,
            })
                .then((res) => {
                    console.log("res: ", res);
                    alert("update thành công");

                    // update thành công chuyển về trang quản lý
                    navigate("../productmanagement");
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        },
    });

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">
                {isEdit ? "Edit Product" : "Add Product"}
            </h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={productForm.handleSubmit}
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
                            disabled={isEdit}
                            value={productForm.values.id}
                            onChange={productForm.handleChange}
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
                            value={productForm.values.name}
                            onChange={productForm.handleChange}
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
                            value={productForm.values.price}
                            onChange={productForm.handleChange}
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
                            value={productForm.values.img}
                            onChange={productForm.handleChange}
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
                            value={productForm.values.description}
                            onChange={productForm.handleChange}
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
                            value={productForm.values.type}
                            onChange={productForm.handleChange}
                        >
                            <option value={"SONY"}>SONY</option>
                            <option value={"APPLE"}>APPLE</option>
                            <option value={"SAMSUNG"}>SAMSUNG</option>
                            <option value={"XIAOMI"}>XIAOMI</option>
                        </Select>
                    </div>
                    <Button type="submit">{isEdit ? "Update" : "Add"}</Button>
                </form>
            </div>
        </div>
    );
};

export default Product;
