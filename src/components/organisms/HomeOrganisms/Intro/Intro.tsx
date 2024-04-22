/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

const Intro = () => {
    const calculateAge = (dob: Date) => {
        const age = new Date(Date.now() - dob.getTime())
        return Math.abs(age.getUTCFullYear() - 1970)
    }
    return (
        <div className='flex flex-col relative sm:mt-12 mt-8'>
            <h1 className='lg:text-7xl md:text-6xl text-5xl capitalize font-bold absolute left-0 right-0'>
                hello, i'm
                <br />
                salar sari navaii
            </h1>
            <Image
                className='w-[400px] max-w-full lg:mt-20 md:mt-16 mt-24'
                unoptimized
                width={653}
                height={754}
                src='/images/self.png'
                alt='salar sari navaii'
            />
            <p className='uppercase text-justify mt-8'>
                a {calculateAge(new Date(1995, 12, 31))}-year-old front-end developer from Sari, Iran. I specialize in
                creating sleek user interfaces with React and Next.js, because someone's got to keep JavaScript's
                <i>"quirky charm"</i> under control. You know, like when JavaScript decides that the best way to handle
                asynchronous code is to create callbacks that nest deeper than your grandmother's Russian doll
                collection. When I'm not untangling code, I'm avoiding meetings that could've been an email. If you need
                a developer who can navigate through JavaScript's eccentricities and still come out with clean,
                functional designs, let's talk. Just don’t ask me to explain why JavaScript doesn't mind you changing
                the type of a variable mid-code but throws a fit if you forget a closing bracket. it's a sensitive
                topic.
            </p>
        </div>
    )
}

export default Intro
