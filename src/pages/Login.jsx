import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const frmLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("values: ", values);

            if (
                values.email === "cybersoft" &&
                values.password === "cybersoft"
            ) {
                // chuyển hướng profile

                navigate("/profile");
            } else {
                // chuyển hướng forgot
                // navigate("../forgot-pass");
                // navigate("/user/forgot-pass");
                navigate("/user/forgot-pass", { replace: true }); //thay thế route hiện tại = route tương ứng thường xài cho các page thanh toán
            }
        },
    });
    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">Login</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={frmLogin.handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="text"
                            name="email" // thêm trường name
                            placeholder="name@flowbite.com"
                            data-type="email"
                            onChange={frmLogin.handleChange}
                            onBlur={frmLogin.handleBlur}
                        />
                        {frmLogin.errors.email && (
                            <p className="text-red-500">
                                {frmLogin.errors.email}
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
                            onChange={frmLogin.handleChange}
                            onBlur={frmLogin.handleBlur}
                        />
                        {frmLogin.errors.password && (
                            <p className="text-red-500">
                                {frmLogin.errors.password}
                            </p>
                        )}
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
