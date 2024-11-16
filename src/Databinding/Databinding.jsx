import React from "react";

const Databinding = () => {
    const title = "Hello";
    const img = "https://i.pravatar.cc";
    const product = {
        id: 1,
        name: "iphone",
        price: 1000,
        img: "https://picsum.photos/id/1/200/200",
    };

    const renderCard = () => {
        // để binding hàm thì giá trị return của hàm phải là string, boolean, number hoặc jsx
        return (
            <div className="card w-25">
                <img src={product.img} alt="" />
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className="btn btn-dark">Add to cart</button>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <h1 className="text-center">Data binding</h1>
            <p id="title">{title}</p>
            <img src={img} alt="" className="d-block w-25" />

            {renderCard()}
        </div>
    );
};

export default Databinding;
