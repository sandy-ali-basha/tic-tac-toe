import { useState } from "react";
import { useQuery } from "react-query";
import { _Board } from "api/home/_Board";

export const useBoards = () => {
    const [query, setQuery] = useState("");

    const { data, isLoading, refetch } = useQuery(
        ["board", query],
        () => _Board.index(query).then((res) => res),
        {
            keepPreviousData: true,
        }
    );
    return {
        data,
        isLoading,
        refetch,
        setQuery
    };
};
