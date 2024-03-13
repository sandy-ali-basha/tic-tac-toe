import { _axios } from "interceptor/http-config";

export const _Board = {
    index: async (query) => _axios.get(`/boards?${query !== "" ? `name=${query}` : ""}`).then((res) => res.data),
    board: async (id) => _axios.get(`/boards/${id}`).then((res) => res.data),
    post: (data) => _axios.post("/boards", data).then((res) => res.data),
    delete: (id) => _axios.delete(`/boards/${id}`).then((res) => res.data),
    update: (editedID, data) => _axios.patch(`/boards/${editedID}`, data).then((res) => res.data),
};