import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangFontSizeRedux = () => {
    const fontSize = useSelector((state) => state.fontSizeReducer);

    const dispatch = useDispatch();

    const changeFontSize = (size) => {
        // action: {
        //     type: tên action,
        //     payload: giá trị gửi lên store
        // }

        const action = {
            type: "CHANGE_FONT_SIZE",
            payload: size,
        };

        dispatch(action);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-green-500 text-2xl mt-5">
                Change Font size by Redux
            </h1>

            <p className="mx-5" style={{ fontSize: fontSize }}>
                Lorem ipsum dolor sit amet.
            </p>

            <div className="flex justify-center items-center mt-5">
                <Button
                    onClick={() => {
                        changeFontSize(-1);
                    }}
                >
                    zoom in
                </Button>
                <Button
                    onClick={() => {
                        changeFontSize(1);
                    }}
                >
                    zoom out
                </Button>
            </div>
        </div>
    );
};

export default ChangFontSizeRedux;
