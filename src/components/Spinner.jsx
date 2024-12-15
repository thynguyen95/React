import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

const Spinner = () => {
    let { isLoading } = useSelector((state) => state.spinnerReducer);
    console.log("isLoading: ", isLoading);

    // cách 1
    // return (
    //     <div>
    //         <PacmanLoader />
    //     </div>
    // );

    return isLoading ? (
        <div
            style={{ backgroundColor: "#FFB200" }}
            className="h-screen w-screen  fixed top-0 left-0 overflow-hidden flex justify-center items-center z-50"
        >
            <PacmanLoader size={100} />
        </div>
    ) : (
        ""
    );
};

export default Spinner;
