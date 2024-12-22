import React, { useRef, useState } from "react";
import ContentChild from "./ContentChild";
import { Button } from "flowbite-react";

/*
    + useState: dùng để lưu trữ các giá trị thay đổi trên giao diện
    + useRef: dùng để lưu trữ các giá trị thay đổi mà không cần hiển thị trên giao diện

    useRef là gì? khi nào sử dụng
        là hook chứa giá trị thay đổi sau mỗi lần render 
        sử dụng khi đối với các giá trị thay đổi mà ko cần hiển thị lên giao diện(thường sử dụng đối với các input form mà ko có validation như form comment, form post bài viết, form search)
*/

const UseRefDemo = () => {
    const [state, setState] = useState(1);

    // nếu dùng giá trị primative sẽ render bt
    // const [like, setLike] = useState(1);

    // nếu dùng object thì cần clone ra địa chỉ vùng nhớ mới vì memo chỉ so sánh shallow compare
    const [like, setLike] = useState({ number: 1 });

    const valueInputRef = useRef();

    let value = "";

    console.log("useref render");

    return (
        <div
            className="container mx-auto
        "
        >
            <h1>UseRefDemo</h1>
            <ContentChild likeProp={like} />
            <Button
                onClick={() => {
                    // setLike(like + 1);

                    // không hoạt động vì chỉ thay đổi giá trị bên trong, object vẫn ở vị trí ô nhớ cũ
                    like.number += 1;
                    setLike(like);

                    // cách giải quyết: clone object ra vùng nhớ mới
                    let newLike = { ...like };
                    newLike.number += 1;
                    setLike(newLike);
                }}
            >
                {/* Like: {like} */}
                Like: {like.number}
            </Button>

            <h3>state: {state}</h3>
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        // setState(e.target.value);
                        valueInputRef.current = e.target.value;

                        value = e.target.value;
                    }}
                />
            </div>
            <button
                onClick={() => {
                    console.log("valueInput", valueInputRef.current);

                    // sẽ bị mất sau mỗi lần render, khi đang nhập input mà click button like, setState lại sẽ mất value
                    console.log("valueInput của biến", valueInputRef.current);
                }}
            >
                submit
            </button>

            <hr />
        </div>
    );
};

export default UseRefDemo;
