import React from "react";

const DemoPropsChildren = (props) => {
    // props.children: là nội dung giữa 2 thẻ đóng mở của cpn
    return (
        <div>
            <h1>DemoPropsChildren</h1>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
};

export default DemoPropsChildren;
