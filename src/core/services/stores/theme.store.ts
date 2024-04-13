import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

// Create the store with Zustand and annotate with the defined interface
const useThemeStore = create<any>(
    persist(
        (set) => ({
            theme: "light",
            changeTheme: (theme: string) =>
                set((state: any) => ({
                    ...state,
                    theme: theme === "light" ? "dark" : "light",
                })),
        }),
        {
            name: "theme-storage",
        },
    ),
)

export default useThemeStore
