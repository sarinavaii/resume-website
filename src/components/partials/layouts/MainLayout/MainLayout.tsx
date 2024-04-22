import { PropsWithChildren } from "react"

const MainLayout = ({ children }: PropsWithChildren) => {
    return <div className='mx-auto max-w-6xl sm:px-8 px-6 pb-8'>{children}</div>
}

export default MainLayout
