import React from "react";
import { useState } from "react";

const ChangeFontSize = () => {
    const [fontSize, setFontSize] = useState(20);

    return (
        <div>
            <div className="container">
                <h1 className="text-center text-red-500">Change Fontsize</h1>

                <p style={{ fontSize: fontSize, color: "red" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, molestias.
                </p>
                <div>
                    <button
                        className="btn btn-success me-5"
                        onClick={() => {
                            setFontSize(fontSize - 1);
                        }}
                    >
                        zoom in
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            setFontSize(fontSize + 1);
                        }}
                    >
                        zoom out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangeFontSize;
