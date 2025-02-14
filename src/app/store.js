import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "en",
  scaling: false,
  viewPorject: false,
  toggleLanguage: () =>
    set((state) => ({ language: state.language === "en" ? "es" : "en" })),
  setScaling: (value) => set({ scaling: value }),
  setViewProject: (value) => set({ viewPorject: value }),
}));
