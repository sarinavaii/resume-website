import type { Config } from "tailwindcss"

import { TAILWIND_COLORS } from "./src/core/configs/colors"

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
        colors: { ...TAILWIND_COLORS },
    },
    plugins: [],
}
export default config
