import React from "react";
import {
    Button,
    Checkbox,
    Label,
    Radio,
    Select,
    TextInput,
} from "flowbite-react";
import { useFormik } from "formik"; //get value
import * as yup from "yup"; //validation

const DemoLoginFormik = () => {
    const frmLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
            phone: "",
            gender: "",
            server: "",
        },
        validationSchema: yup.object().shape({
            email: yup
                .string()
                .required("email is a required")
                .email("email is invalid"),
            phone: yup
                .string()
                .required("phone is required")
                .matches(
                    /^(09|03|07|08|02|04|06|05|09)[0-9]{8}$/,
                    "phone is invalid"
                ),
            password: yup
                .string()
                .required("password is required")
                .min(6, "6-10 ký tự")
                .max(10, "6-10 ký tự"),
        }),
        onSubmit: (values) => {
            console.log("values: ", values);
        },
    });

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">Demo Login Formik</h1>

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
                            type="email"
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
                            <Label htmlFor="phone1" value="Your phone" />
                        </div>
                        <TextInput
                            id="phone1"
                            type="phone"
                            name="phone" // thêm trường name
                            placeholder="090337773"
                            data-type="phone"
                            onChange={frmLogin.handleChange}
                            onBlur={frmLogin.handleBlur}
                        />
                        {frmLogin.errors.phone && (
                            <p className="text-red-500">
                                {frmLogin.errors.phone}
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
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="gender" value="Gender" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="male"
                                name="gender"
                                value="male"
                                defaultChecked
                                onChange={frmLogin.handleChange}
                            />
                            <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="female"
                                name="gender"
                                value="female"
                                onChange={frmLogin.handleChange}
                            />
                            <Label htmlFor="female">Female</Label>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="server"
                                value="Select your server"
                            />
                        </div>
                        <Select
                            id="server"
                            name="server"
                            required
                            onChange={frmLogin.handleChange}
                        >
                            <option value={"usa"}>United States</option>
                            <option value={"canada"}>Canada</option>
                            <option value={"France"}>France</option>
                            <option value={"Germany"}>Germany</option>
                        </Select>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default DemoLoginFormik;
