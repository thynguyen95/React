import React from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
    const navigate = useNavigate();

    const productAdd = useFormik({
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
            // gọi api add
            axios({
                url: "https://apitraining.cybersoft.edu.vn/api/ProductApi/create",
                method: "POST",
                data: values,
            })
                .then((res) => {
                    console.log("res: ", res);
                    alert("thêm thành công");

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
            <h1 className="title mb-5">Add Product</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={productAdd.handleSubmit}
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
                            value={productAdd.values.id}
                            onChange={productAdd.handleChange}
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
                            value={productAdd.values.name}
                            onChange={productAdd.handleChange}
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
                            value={productAdd.values.price}
                            onChange={productAdd.handleChange}
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
                            value={productAdd.values.img}
                            onChange={productAdd.handleChange}
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
                            value={productAdd.values.description}
                            onChange={productAdd.handleChange}
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
                            value={productAdd.values.type}
                            onChange={productAdd.handleChange}
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

export default AddProduct;
