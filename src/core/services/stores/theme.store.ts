import { create } from "zustand"

// Define the interface for the store state and actions
interface ThemeStore {
    theme: string
    changeTheme: (theme: string) => void
}

// Create the store with Zustand and annotate with the defined interface
const useThemeStore = create<ThemeStore>((set) => ({
    theme: "light",
    changeTheme: (theme) =>
        set((state) => ({
            ...state,
            theme: theme === "light" ? "dark" : "light",
        })),
}))

export default useThemeStore
