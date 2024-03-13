import { useQuery } from "react-query";
import { _Board } from "api/home/_Board";

export const useBoards = () => {
    const { data, isLoading, refetch } = useQuery(
        ["board"],
        () => _Board.index().then((res) => res),
        {
            keepPreviousData: true,
        }
    );
    return {
        data,
        isLoading,
        refetch
    };
};
