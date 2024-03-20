import { createTheme } from "@mantine/core"

import { MANTINE_COLORS } from "../colors"

const MANTINE_THEME = createTheme({
    colors: MANTINE_COLORS,
    primaryColor: "blue",
    primaryShade: { light: 5, dark: 5 },
})

export default MANTINE_THEME
