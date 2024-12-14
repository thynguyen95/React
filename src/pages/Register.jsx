import { Button, Label, Select, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeInputAction } from "../redux/reducers/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { userRegister } = useSelector((state) => state.userReducer);
    console.log("userRegister: ", userRegister);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        let { id, value } = e.target;

        // tạo action payload để đưa dữ liệu lên redux
        // cách 1
        // const action = {
        //     type: "userReducer/handleChangeInputAction",
        //     payload: {
        //         id: id,
        //         value: value,
        //     },
        // };

        // cách 2
        const action = handleChangeInputAction({ id, value });
        console.log("action: ", action);

        // đưa dữ liệu lên redux
        dispatch(action);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit ", userRegister);
        // gọi api đăng ký
        axios({
            url: "https://apistore.cybersoft.edu.vn/api/Users/signup",
            method: "POST",
            data: userRegister,
        })
            .then((res) => {
                console.log("res: ", res);
                if (res.data.statusCode == 200) {
                    alert("đăng ký thành công");
                    navigate("/profile");
                }
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">Register</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="id" value="Your id" />
                        </div>
                        <TextInput
                            id="id"
                            type="text"
                            name="id" // thêm trường name
                            placeholder="name@flowbite.com"
                            value={userRegister.id}
                            disabled
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            type="text"
                            name="email" // thêm trường name
                            placeholder="name@flowbite.com"
                            value={userRegister.email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput
                            id="name"
                            type="name"
                            name="name"
                            value={userRegister.name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={userRegister.password}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="gender" value="Your gender" />
                        </div>
                        <Select
                            id="gender"
                            name="gender"
                            required
                            value={userRegister.gender}
                            onChange={handleChangeInput}
                        >
                            <option value={true}>Male</option>
                            <option value={false}>Female</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Your phone" />
                        </div>
                        <TextInput
                            id="phone"
                            type="phone"
                            name="phone"
                            value={userRegister.phone}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
