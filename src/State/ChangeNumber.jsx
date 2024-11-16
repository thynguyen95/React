import React, { useState } from "react";

// hook hiểu đơn giản là tên gọi của những hàm sử dụng trong component của react

const ChangeNumber = () => {
    /*
        + state là giá trị thay đổi của component trên giao diện bởi 1 event
        + setState là hàm làm thay đổi giá trị state đồng thời gọi function cpn chạy lại với state mới
    */
    // const res = useState(10);
    // console.log("res: ", res);
    // khi gọi useState như vầy res sẽ trả về arr có 2 phần tử
    // res = [stateDefault, setState(newState)]

    const [state, setState] = useState(20);

    return (
        <div className="container">
            <h1 className="text-red-500">Change Number</h1>

            <div>
                <button
                    className="btn btn-dark"
                    onClick={() => {
                        setState(state - 1);
                    }}
                >
                    -
                </button>
                <span className="mx-4" id="number">
                    {state}
                </span>
                <button
                    className="btn btn-dark"
                    onClick={() => {
                        let newState = state + 1;
                        setState(newState);

                        // React là SPA vì vậy tất cả cpn sẽ dùng chung trên 1 trang html, khi sử dụng Dom sẽ khó quản lý sự thay đổi trên giao diện, đang cần thay đổi chỗ nào
                        // let number =
                        //     +document.querySelector("#number").innerHTML;
                        // document.querySelector("#number").innerHTML =
                        //     number + 1;
                    }}
                >
                    +
                </button>

                <img
                    style={{ width: "50px", height: "50px" }}
                    src="./vite.svg"
                    alt=""
                />

                <img
                    style={{ width: "50px", height: "50px" }}
                    src="./vite.svg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ChangeNumber;

// Ôn tập
let obj = {
    id: 1,
    fullName: "abc",
};

let { id, fullName } = obj;
console.log("id: ", id, fullName);

// mảng chứa các phần tử các nhau là kiểu tuple
let arr = [
    "Nguyễn Văn A",
    function (newValue) {
        arr[0] = newValue;
    },
];

// khi sử dụng cách này thì rất khó kiểm soát vị trí các phần tử nên sẽ sử dụng cách destructoring
arr[0]; //'Nguyễn Văn A'
arr[1]();

let [name, setName] = arr;

setName("Nguyễn Văn B");
console.log("arr", arr);
