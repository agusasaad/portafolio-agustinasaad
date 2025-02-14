import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "en",
      scaling: false,
      viewPorject: false,
      viewCopy: false,
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "en" ? "es" : "en" })),
      setScaling: (value) => set({ scaling: value }),
      setViewProject: (value) => set({ viewPorject: value }),
      setViewCopy: (value) => set({ viewCopy: value }),
    }),
    {
      name: "language-store",
    }
  )
);
