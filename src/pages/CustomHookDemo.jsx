import React from "react";
import useGetDataAPI from "../../CustomHooks/useGetDataAPI";
import useRoute from "../../CustomHooks/useRoute";
import { Button } from "flowbite-react";
import useQueryCustom from "../../CustomHooks/useQueryCustom";

const CustomHookDemo = () => {
    const data = useGetDataAPI("https://apistore.cybersoft.edu.vn/api/Product");
    const { navigate, setSearch } = useRoute();
    console.log("navigate: ", navigate);

    // const { data, isLoading, error } = useQueryCustom(
    //     "getAllProduct",
    //     "/api/product"
    // );

    // if (isLoading) {
    //     return <div>Loading....</div>;
    // }

    // if (error) {
    //     return <div>Error....</div>;
    // }

    console.log("data", data);

    return (
        <div className="container">
            <h1>CustomHookDemo</h1>
            {/* {JSON.stringify(data)} */}

            <input
                onChange={(e) => {
                    setSearch({
                        keyword: e.target.value,
                    });
                }}
            />

            <Button
                onClick={() => {
                    navigate("/");
                }}
            >
                go home
            </Button>
        </div>
    );
};

export default CustomHookDemo;
