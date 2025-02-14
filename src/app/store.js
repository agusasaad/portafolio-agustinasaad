import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "en",
      scaling: false,
      viewProject: false,
      viewCopy: false,
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "en" ? "es" : "en" })),
      setScaling: (value) => set({ scaling: value }),
      setViewProject: (value) => set({ viewProject: value }),
      setViewCopy: (value) => set({ viewCopy: value }),
    }),
    {
      name: "language-store",
    }
  )
);
