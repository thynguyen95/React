import { useState } from "react";
import HeaderHome from "./components/HeaderHome";
import Card from "./components/Card";
import Databinding from "./Databinding/Databinding";
import DemoEvent from "./Event/DemoEvent";
import RenderCondition from "./RenderCondition/RenderCondition";
import ChangeNumber from "./State/ChangeNumber";
import ChangeFontSize from "./State/ChangeFontSize";
import DemoProps from "./Props/DemoProps";

function App() {
    return (
        <>
            {/* <HeaderHome />
            <Card /> */}
            {/* <Databinding /> */}
            {/* <DemoEvent /> */}
            {/* <RenderCondition /> */}

            <span className="mx-4" id="number">
                1
            </span>
            {/* <ChangeNumber />
            <ChangeFontSize /> */}
            <DemoProps />
        </>
    );
}

export default App;
