import create from "zustand";

export const useTravelerStore = create((set) => ({
    search: "",
    type: 1,
    setSearch: (search) => set({ search }),
    toggleType: () => set((state) => ({ type: state.type === 1 ? 2 : 1 })),
}));
