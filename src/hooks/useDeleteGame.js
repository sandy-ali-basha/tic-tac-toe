
import { _Board } from "api/home/_Board";
import { useQueryClient, useMutation } from "react-query";

export const useDeleteGame = () => {
    const queryClient = useQueryClient();
    return useMutation((id) => _Board.delete(id), {
        onMutate: async () => {
            await queryClient.cancelQueries(["board"]);
            const previousData = queryClient.getQueriesData(["board"]);
            return {
                previousData,
            }
        },
        onSuccess: () => {
            return queryClient.invalidateQueries(["board"]);
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData(["board"], context.prevuiosQuery);
        },
    });
};
