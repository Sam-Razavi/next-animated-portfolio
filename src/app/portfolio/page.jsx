'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const items = [
    {
        id: 1,
        color: 'from-purple-300 to-red-300',
        title: 'AI Image Generation App',
        desc: 'Allows users to generate images using the Hugging Face Stable Diffusion API, share them with a community, and browse shared images.',
        img: '/AI-Image-Home-page.jpg',
        link: 'https://ai-image-generation-app-delta.vercel.app/',
        sourceCode: 'https://github.com/Sam-Razavi/ai-image-generation-app'
    },
    {
        id: 2,
        color: 'from-green-300 to-blue-300',
        title: 'MERN Real-Time Chat App',
        desc: 'A real-time chat application built with the MERN stack, featuring authentication with JWT, real-time messaging with Socket.io, and responsive UI with TailwindCSS and Daisy UI. Users can securely log in, send messages instantly, and view online user statuses.',
        img: '/React-chat-app-first.jpg',
        link: 'https://mern-chat-app-oovz.onrender.com/',
        sourceCode: 'https://github.com/Sam-Razavi/mern-chat-app'
    },
    {
        id: 3,
        color: 'from-blue-300 to-green-300',
        title: 'Recipe Application',
        desc: 'A feature-rich recipe app enabling users to search for recipes, view instructions, and upload their custom recipes.',
        img: '/home-page.jpg',
        link: 'https://forkify-sam-razavi.netlify.app/?#664c8f193e7aa067e94e886e',
        sourceCode: 'https://github.com/Sam-Razavi/recipe-application'
    },
    {
        id: 4,
        color: 'from-violet-300 to-purple-300',
        title: 'Cross-Platform Mobile App',
        desc: 'A working project similar to Twitter, built with React Native, Typescript, and Firebase. Features user registration, post creation, and language toggle.',
        img: '/FejkTwitter-firstPage.jpg',
        link: 'https://github.com/Sam-Razavi/crossplatform-mobile/tree/master/crossplatform-mobile',
        sourceCode: 'https://github.com/Sam-Razavi/crossplatform-mobile'
    },
    {
        id: 5,
        color: 'from-green-300 to-yellow-300',
        title: 'To-Do List Application',
        desc: 'A user-friendly app for managing daily tasks. Features include adding tasks, marking them as completed, and filtering by due dates.',
        img: '/to-do-list-home-page.jpg',
        link: 'https://github.com/Sam-Razavi/to-do-list-app',
        sourceCode: 'https://github.com/Sam-Razavi/to-do-list-app'
    },
    {
        id: 6,
        color: 'from-blue-300 to-violet-300',
        title: 'Vue Exchange App',
        desc: 'A simple Vue.js app for exchanging currency with a clean interface.',
        img: '/Exchange.jpg',
        link: 'https://vue-chi-one.vercel.app',
        sourceCode: 'https://github.com/Sam-Razavi/vue-exchange-app'
    },
    {
        id: 7,
        color: 'from-red-300 to-blue-300',
        title: 'Vue Weather App',
        desc: 'A weather forecasting app built with Vue.js, fetching real-time weather data using an external API. Includes a bonus feature to convert temperatures between Celsius and Fahrenheit seamlessly.',
        img: '/Weather app.jpg',
        link: 'https://vue-weather-ruby.vercel.app',
        sourceCode: 'https://github.com/Sam-Razavi/vue-weather-app'
    },
    {
        id: 8,
        color: 'from-green-300 to-yellow-300',
        title: 'Calculator App',
        desc: 'A simple calculator app built with html and css.',
        img: '/calculator.jpg',
        link: 'https://sam-razavi.github.io/Calculator/',
        sourceCode: 'https://github.com/Sam-Razavi/calculator-app'
    },
    {
        id: 9,
        color: 'from-green-300 to-yellow-300',
        title: 'To-Do List Application',
        desc: 'A simple calculator app built with html and css.',
        img: '/calculator.jpg',
        link: 'https://sam-razavi.github.io/Calculator/',
        sourceCode: 'https://github.com/Sam-Razavi/to-do-list-app'
    }
]

const PortfolioPage = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className="relative h-[600vh]" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                            priority={item.id === 1} // Add priority only for the first visible image
                                        />
                                    </div>
                                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <div className="flex gap-4 justify-end">
                                        <Link
                                            href={item.link}
                                            target="_blank"
                                            className="flex"
                                        >
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                                                See Demo
                                            </button>
                                        </Link>
                                        {item.sourceCode && (
                                            <Link
                                                href={item.sourceCode}
                                                target="_blank"
                                                className="flex"
                                            >
                                                <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gray-800 text-white font-semibold m-4 rounded hover:bg-gray-700">
                                                    Source Code
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            ease: 'linear',
                            repeat: Infinity
                        }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px]"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                            />
                        </defs>
                        <text fill="#000">
                            <textPath
                                xlinkHref="#circlePath"
                                className="text-xl"
                            >
                                Innovative Full-Stack Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
                {/* Back to Top Button */}
                <motion.button
                    className="mt-8 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
                    onClick={() =>
                        window.scroll({ top: 0, behavior: 'smooth' })
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Back to Top"
                >
                    ↑ Back to Top
                </motion.button>
            </div>
        </motion.div>
    )
}

export default PortfolioPage
