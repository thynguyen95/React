import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { registerAPI } from "../API/userAPI";

const RegisterFormRQ = () => {
    const [userRegisterFormRQ, setUserRegisterFormRQ] = useState({
        id: "",
        name: "",
        password: "",
        phone: "",
        gender: "",
        email: "",
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ["registerUser"],
        mutationFn: registerAPI,
        onSuccess: (data) => {
            // khi call api đăng ký thành công data sẽ trả về tại đây
            console.log("data: ", data);
            queryClient.invalidateQueries("getAllUser");
        },
        onError: (err) => {
            // thất bại
        },
    });

    const handleChangeInput = (e) => {
        let { id, value } = e.target;
        setUserRegisterFormRQ({
            ...userRegisterFormRQ,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit ", userRegisterFormRQ);

        // sau khi submit sẽ gọi api = mutation
        mutation.mutateAsync(userRegisterFormRQ);
    };

    return (
        <div className="container mx-auto">
            <h1 className="title mb-5">RegisterFormRQ</h1>

            <div className="w-1/2 mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    {/* <div>
                        <div className="mb-2 block">
                            <Label htmlFor="id" value="Your id" />
                        </div>
                        <TextInput
                            id="id"
                            type="text"
                            name="id" // thêm trường name
                            placeholder="name@flowbite.com"
                            value={userRegisterFormRQ.id}
                            onChange={handleChangeInput}
                        />
                    </div> */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            type="text"
                            name="email" // thêm trường name
                            placeholder="name@flowbite.com"
                            value={userRegisterFormRQ.email}
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
                            value={userRegisterFormRQ.name}
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
                            value={userRegisterFormRQ.password}
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
                            value={userRegisterFormRQ.gender}
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
                            value={userRegisterFormRQ.phone}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterFormRQ;
