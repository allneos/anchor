import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SettingsState {
  language: string;
  theme: "dark" | "light";
  navTooltip: "full" | "title" | "none";
  lastRoute: string;
  setLanguage: (lang: string) => void;
  setTheme: (theme: "dark" | "light") => void;
  setNavTooltip: (navTooltip: "full" | "title" | "none") => void;
  setLastRoute: (route: string) => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      language: "en",
      theme: "dark",
      navTooltip: "full",
      lastRoute: "/workspace/dashboard",
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      setNavTooltip: (navTooltip) => set({ navTooltip }),
      setLastRoute: (lastRoute) => set({ lastRoute }),
    }),
    {
      name: "anchor-settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
