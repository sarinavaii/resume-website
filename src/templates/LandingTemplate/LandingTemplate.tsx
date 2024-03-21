"use client"

import { Button } from "@mantine/core"

import { useThemeStore } from "@core/services/stores"

const LandingTemplate = () => {
    const { changeTheme, theme } = useThemeStore()
    return (
        <div className='h-screen grid place-items-center bg-khaki dark:bg-night'>
            <Button variant='filled' color='purple' onClick={() => changeTheme(theme)}>
                Howdy Partner!
            </Button>
        </div>
    )
}

export { LandingTemplate }
