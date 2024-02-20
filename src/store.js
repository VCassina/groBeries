import create from "zustand";

export const useStore = create((set) => ({
  exampleValue: null,
  setExampleValue: (value) => set({ exampleValue: value }),
}));