"use client"

import { PropsWithChildren } from "react"
import { ColorSchemeScript, DirectionProvider, MantineProvider } from "@mantine/core"

import { MANTINE_THEME } from "@core/configs/mantine"

const RootProvider = ({ children }: PropsWithChildren) => {
    return (
        <DirectionProvider>
            <MantineProvider theme={MANTINE_THEME}>{children}</MantineProvider>
            <ColorSchemeScript defaultColorScheme='light' />
        </DirectionProvider>
    )
}

export { RootProvider }
