/*
    custom hook tương tự cpn tuy nhiên kết quả trả về không phải là jsx mà là 1 giá trị(string, bool, object, num,...)
    thay thế 1 phần HOC: Higher order component
*/

import React, { useEffect, useState } from "react";

const useGetDataAPI = (url) => {
    const [data, setData] = useState(null);

    const fetchAPI = async () => {
        const res = await fetch(url);
        const resJson = await res.json();

        setData(resJson.content);
    };

    useEffect(() => {
        fetchAPI();

        return () => {
            console.log("destroy");
        };
    }, []);

    return data;
};

export default useGetDataAPI;
