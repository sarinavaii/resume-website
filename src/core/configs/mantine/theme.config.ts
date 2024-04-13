import { createTheme } from "@mantine/core"

import { MANTINE_COLORS } from "../colors"
import { Maven } from "../fonts/fonts.config"

const MANTINE_THEME = createTheme({
    colors: MANTINE_COLORS,
    primaryColor: "khaki",
    primaryShade: { light: 5, dark: 5 },
    fontFamily: Maven.style.fontFamily,
})

export default MANTINE_THEME
