import React from "react";

/*
    so sánh giữa state & props 
    + state và props đều chứa các giá trị binding lên giao diện 
    + state chứa các giá trị có thể thay đổi thông qua phương thức setState
    + props chứa các giá trị nhận từ component cha truyền vào và không thể gán lại giá trị
*/

const CardProduct = (props) => {
    //props = {tenSanPham: ""}
    // props: đại diện cho các giá trị nhận vào từ propsName của component
    // <Component propsName="" />

    // props không thể gán lại giá trị(readonly)
    // props.tenSanPham = "abc"; // lỗi

    return (
        <div className="card w-25">
            <img src="https://picsum.photos/id/1/200/200" alt="" />
            <div className="card-body">
                <h3>{props.tenSanPham}</h3>
                <p>price</p>
                <button className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    );
};

export default CardProduct;
