import create from "zustand";
const useStore = create((set) => ({
  index: 0,
  increaseIndex: () =>
    set((state) =>
      state.index < 2
        ? { index: state.index + 1 }
        : { index: state.index === 0 }
    ),
  decreaseIndex: () =>
    set((state) =>
      state.index > 0
        ? { index: state.index - 1 }
        : { index: state.index === 0 }
    ),
}));
export { useStore };
