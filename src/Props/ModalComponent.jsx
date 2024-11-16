import React from "react";

const ModalComponent = (props) => {
    return (
        <div>
            <div className="modal w-1/2 mx-auto shadow-lg shadow-black my-5">
                <h2 className="modal__title text-green-500 text-2xl border-b-2 p-2">
                    {props?.title}
                </h2>

                <div className="modal-body p-2">{props.contentJSX}</div>
            </div>
        </div>
    );
};

export default ModalComponent;
