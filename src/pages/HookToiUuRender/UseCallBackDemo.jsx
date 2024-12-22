import { Button } from "flowbite-react";
import React, { useCallback, useState } from "react";
import CommentComponent from "./CommentComponent";

const UseCallBackDemo = () => {
    const [like, setLike] = useState(1);
    const [number, setNumber] = useState(1);

    const renderLike = () => {
        return `Bạn đã ấn ${like} like`;
    };

    const callbackRenderLike = useCallback(renderLike, [like]);

    return (
        <div className="container mx-auto">
            <h1>UseCallBackDemo</h1>

            <Button
                onClick={() => {
                    setLike(like + 1);
                }}
            >
                {like}
            </Button>

            <Button
                onClick={() => {
                    setNumber(number + 1);
                }}
            >
                {number}
            </Button>

            <CommentComponent renderLike={callbackRenderLike} />
        </div>
    );
};

export default UseCallBackDemo;
