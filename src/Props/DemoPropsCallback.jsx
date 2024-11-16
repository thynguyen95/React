import React from "react";

const DemoPropsCallback = (props) => {
    return <div>{props.renderCondition()}</div>;
};

export default DemoPropsCallback;
