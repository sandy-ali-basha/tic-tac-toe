import create from "zustand";

export const SquaresStore = create((set) => ({
    squares: Array(9).fill(null),

    setSquares: (data) => {
        set(() => ({ squares: data }));
    },
}));
