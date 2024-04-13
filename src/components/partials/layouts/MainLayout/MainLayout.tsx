import { PropsWithChildren } from "react"

const MainLayout = ({ children }: PropsWithChildren) => {
    return <div className='mx-auto max-w-6xl'>{children}</div>
}

export default MainLayout
