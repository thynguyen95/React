import React from "react";
import ModalContainer from "../../ContainerComponent/ModalContainer";
import DemoFormik from "../../DemoForm/DemoFormik";

const DemoContainer = () => {
    return (
        <div>
            <h1>DemoContainer</h1>

            <ModalContainer title="login" componentContent={<DemoFormik />} />
        </div>
    );
};

export default DemoContainer;
