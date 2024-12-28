import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const useRoute = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [search, setSearch] = useSearchParams();

    return {
        navigate: navigate,
        param: param,
        search: search,
        setSearch: setSearch,
    };
};

export default useRoute;
