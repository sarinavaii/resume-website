/* eslint-disable react/no-unescaped-entities */
const Resume = () => {
    return (
        <div className='border border-night grid lg:grid-cols-12 grid-cols-1 mt-8'>
            <div className='lg:col-span-5 p-8 lg:border-r lg:border-b-0 border-b'>
                <h2 className='mb-2 text-2xl font-semibold uppercase'>expertise</h2>
                <hr />
                <h3 className='font-semibold mt-4'>Web Development:</h3>
                <ul className='text-sm '>
                    <li>
                        I build websites using <b>React.js</b> and <b>Next.js</b>, focusing on creating interactive and
                        high-performing user interfaces
                    </li>
                    <li>
                        I use <b>Tailwind CSS</b> for styling, leveraging its utility-first approach to design
                        responsive and aesthetically pleasing components.
                    </li>
                    <li>
                        I have experience with <b>React Query</b> for efficient server-state management, enabling
                        reliable data fetching and caching.
                    </li>
                    <li>
                        I implement state management using <b>Zustand</b>, providing lightweight and flexible solutions
                        for component state
                    </li>
                    <li>
                        I apply the <b>Atomic Design pattern</b> to ensure my projects are modular, scalable, and
                        maintainable over time.
                    </li>
                </ul>
                <h3 className='font-semibold mt-4'>Design:</h3>
                <ul className='text-sm'>
                    <li>
                        I use <b>Figma</b> to create high-fidelity designs, allowing for efficient collaboration and
                        prototyping.
                    </li>
                    <li>
                        I create wireframes to visualize layouts and use interactive prototypes to demonstrate user flow
                        and functionality.
                    </li>
                    <li>
                        I build and maintain design systems to ensure consistency across all UI elements, making
                        development and design workflows more efficient.
                    </li>
                    <li>
                        I incorporate accessibility best practices into my designs, ensuring that the user interface is
                        usable and inclusive for everyone.
                    </li>
                </ul>
                <h2 className='mb-2 text-2xl font-semibold uppercase mt-8'>education</h2>
                <hr />
                <div className='flex justify-between items-end gap-2 mt-4'>
                    <h3>Urmia University of Technology</h3>
                    <span className='text-nowrap'>2019-2022</span>
                </div>
                <div className='text-sm font-semibold uppercase'>master's degree - information technology</div>
                <div className='flex justify-between items-end gap-2 mt-4'>
                    <h3>University of Mazandaran</h3>
                    <span className='text-nowrap'>2014-2019</span>
                </div>
                <div className='text-sm font-semibold uppercase'>bachelor's degree - computer engineering</div>
            </div>
            <div className='lg:col-span-7 p-8'>
                <h2 className='mb-2 text-2xl font-semibold uppercase'>experience</h2>
                <hr />
                <h3 className='font-semibold mt-4 text-2xl capitalize'>front-end web developer</h3>
                <div className='flex justify-between items-end gap-2 mt-4 mb-2'>
                    <h3 className='capitalize font-semibold'>Dornica</h3>
                    <span className='text-nowrap'>May 2021 - October 2021</span>
                </div>
                <ul className='text-sm list-disc list-inside'>
                    <li>
                        Built and maintained responsive and mobile-friendly websites using HTML, CSS, JavaScript, and
                        jQuery
                    </li>
                    <li>Worked closely with clients to understand project requirements and provide timely solutions</li>
                </ul>
                <h3 className='font-semibold mt-4 text-2xl capitalize'>Head of Front-end Web Development</h3>
                <div className='flex justify-between items-end gap-2 mt-4 mb-2'>
                    <h3 className='capitalize font-semibold'>Dornica</h3>
                    <span className='text-nowrap'>October 2021 - March 2024</span>
                </div>
                <ul className='text-sm list-disc list-inside'>
                    <li>
                        Lead and manage a team of 3 front end web developers, providing technical guidance and
                        mentorship to ensure timely delivery of high-quality web applications
                    </li>
                    <li>
                        Developed and maintained standards for front-end development, ensuring adherence to best
                        practices, accessibility, and compliance with the latest web standards
                    </li>
                    <li>
                        Collaborated closely with UX designers, back-end developers, and project managers to ensure
                        effective communication and alignment of project goals
                    </li>
                    <li>Mentored junior developers and assisted with training and onboarding new team members</li>
                </ul>
                <h3 className='font-semibold mt-4 text-2xl capitalize'>Front-end Technical Lead</h3>
                <div className='flex justify-between items-end gap-2 mt-4 mb-2'>
                    <h3 className='capitalize font-semibold'>Dornica</h3>
                    <span className='text-nowrap'>March 2024 - Present</span>
                </div>
                <ul className='text-sm list-disc list-inside'>
                    <li>
                        Oversaw project planning, allocated tasks, and coordinated efforts among a team of 5 web
                        developers. Conducted regular meetings to ensure alignment with project goals.
                    </li>
                    <li>
                        Provided technical guidance to the team, conducted code reviews, and offered mentorship to
                        junior developers. Fostered a collaborative and growth-oriented team environment.
                    </li>
                    <li>
                        Designed scalable Next.js architectures with a focus on server-side rendering and static site
                        generation. Established consistent design patterns and state management strategies.
                    </li>
                    <li>
                        Promoted a culture of learning and encouraged the team to stay current with Next.js advancements
                        and industry best practices. Identified and implemented process improvements to enhance team
                        productivity.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Resume
