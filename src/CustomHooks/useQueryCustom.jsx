import { useQuery } from "@tanstack/react-query";
import React from "react";
import { http } from "../services/configUrl";

const useQueryCustom = (qrKey, url, st = 60 * 1000 * 5) => {
    const fn = async () => {
        const res = await http.get(url);
        return res.data;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: [qrKey],
        queryFn: fn,
        staleTime: st,
    });
    return { data, isLoading, error };
};

export default useQueryCustom;
