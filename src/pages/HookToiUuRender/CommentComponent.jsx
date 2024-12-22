import React, { memo } from "react";

const CommentComponent = (props) => {
    console.log("child render");

    return (
        <div>
            <h1>CommentComponent</h1>
            <p> {props.renderLike()}</p>
        </div>
    );
};

export default memo(CommentComponent);
