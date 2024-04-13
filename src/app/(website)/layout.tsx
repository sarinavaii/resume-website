import { PropsWithChildren } from "react"

import { MainLayout } from "@partials/layouts/MainLayout"

const layout = ({ children }: PropsWithChildren) => {
    return <MainLayout>{children}</MainLayout>
}

export default layout
