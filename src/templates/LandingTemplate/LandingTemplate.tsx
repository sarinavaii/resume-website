"use client"

import { Button, useMantineColorScheme } from "@mantine/core"

const LandingTemplate = () => {
    const { setColorScheme, clearColorScheme } = useMantineColorScheme()
    return (
        <div className='h-screen grid place-items-center bg-khaki dark:bg-night'>
            <Button variant='filled' color='purple' onClick={() => setColorScheme("dark")}>
                Howdy Partner!
            </Button>
        </div>
    )
}

export { LandingTemplate }
