import React, { memo } from "react";

const TableCart = (props) => {
    console.log("render child");

    return (
        <div>
            <h1>TableCart</h1>

            {props.cart.map((item) => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </div>
    );
};

export default memo(TableCart);
