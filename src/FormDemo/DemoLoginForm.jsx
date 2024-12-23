import React, { useState } from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const DemoLoginForm = () => {
    const [userLogin, setUserLogin] = useState({
        email: "", //đặt key giống với name của input
        password: "",
        phone: "",
    });
    console.log("userLogin", userLogin);

    // stateDefault của error giống với input
    const [error, setError] = useState({
        email: "",
        password: "",
        phone: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // chặn reload browser

        // không dùng như vầy vì ko kiểm soát được id, dễ bị đụng chỗ khác
        // const userLogin = {
        //     email: document.querySelector('#email1').value
        // }

        // chặn sumbit không hợp lệ
        // hợp lệ khi không có error và input nhập vào hợp lệ
        for (let key in error) {
            if (error[key] !== "") {
                // chỉ cần 1 lỗi xảy ra (objectError có ít nhất 1 trường có điều kiện)
                return;
            }
        }

        for (let key in userLogin) {
            if (userLogin[key] === "" && key !== "phone") {
                return;
            }
        }

        // xử lý submit
        console.log("submit");
    };

    const handleChangeInput = (e) => {
        // console.log("e: ", e);
        // state value
        const { name, value } = e.target;
        let attrType = e.target.getAttribute("data-type");
        console.log("attrType: ", attrType);

        // state error
        let messError = "";
        if (value === "") {
            messError = `${name} is required !`;
        } else {
            // xét lỗi nếu như đã nhập liệu thì xét format

            switch (attrType) {
                case "email": {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (!emailRegex.test(value)) {
                        messError = `${name} is invalid`;
                    }
                    break;
                }
                case "phone": {
                    const regexPhone = /^(09|03|07|08|02|04|06|05|09)[0-9]{8}$/;

                    if (!regexPhone.test(value)) {
                        messError = `${name} is invalid`;
                    }

                    break;
                }
                default:
                    break;
            }
        }

        setError({
            ...error,
            [name]: messError,
        });

        // setState cuối cùng
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">Demo Login Form</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name="email" // thêm trường name
                            placeholder="name@flowbite.com"
                            data-type="email"
                            required
                            // cách1 : làm quen
                            // onChange={(e) => {
                            //     setUserLogin({
                            //         ...userLogin,
                            //         email: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                        {/* {error.email ? <p className="text-red-500 text-2xl">{error.email}</p> : ''} */}
                        {error.email && (
                            <p className="text-red-500 text-2xl">
                                {error.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone1" value="Your phone" />
                        </div>
                        <TextInput
                            id="phone1"
                            type="phone"
                            name="phone" // thêm trường name
                            placeholder="090337773"
                            data-type="phone"
                            required
                            // cách1 : làm quen
                            // onChange={(e) => {
                            //     setUserLogin({
                            //         ...userLogin,
                            //         phone: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                        {/* {error.phone ? <p className="text-red-500 text-2xl">{error.phone}</p> : ''} */}
                        {error.phone && (
                            <p className="text-red-500 text-2xl">
                                {error.phone}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name="password"
                            required
                            // cách 1: làm quen
                            // onChange={(e) => {
                            //     setUserLogin({
                            //         ...userLogin,
                            //         password: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                        <p className="text-red-500 text-2xl">
                            {error.password}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default DemoLoginForm;
