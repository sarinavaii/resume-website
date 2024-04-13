"use client"

import { PropsWithChildren } from "react"
import { ColorSchemeScript, DirectionProvider, MantineProvider } from "@mantine/core"

import { MANTINE_THEME } from "@core/configs/mantine"
import { useThemeStore } from "@core/services/stores"

const RootProvider = ({ children }: PropsWithChildren) => {
    // const [loaded, setLoaded] = useState(false)
    const { theme } = useThemeStore()

    // useEffect(() => {
    //     setLoaded(true)
    // }, [])

    return (
        <DirectionProvider>
            <MantineProvider theme={MANTINE_THEME}>
                <div className={theme}>{children}</div>
            </MantineProvider>
            <ColorSchemeScript defaultColorScheme='light' />
        </DirectionProvider>
    )
}

export { RootProvider }
