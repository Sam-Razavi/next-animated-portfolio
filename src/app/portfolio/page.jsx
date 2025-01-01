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
        link: 'https://ai-image-generation-app-delta.vercel.app/'
    },
    {
        id: 2,
        color: 'from-blue-300 to-green-300',
        title: 'Recipe Application',
        desc: 'A feature-rich recipe app enabling users to search for recipes, view instructions, and upload their custom recipes.',
        img: '/home-page.jpg',
        link: 'https://forkify-sam-razavi.netlify.app/?#664c8f193e7aa067e94e886e'
    },
    {
        id: 3,
        color: 'from-violet-300 to-purple-300',
        title: 'Cross-Platform Mobile App',
        desc: 'A working project similar to Twitter, built with React Native, Typescript, and Firebase. Features user registration, post creation, and language toggle.',
        img: '/FejkTwitter-firstPage.jpg',
        link: 'https://github.com/Sam-Razavi/crossplatform-mobile/tree/master/crossplatform-mobile'
    },
    {
        id: 4,
        color: 'from-green-300 to-yellow-300',
        title: 'To-Do List Application',
        desc: 'A user-friendly app for managing daily tasks. Features include adding tasks, marking them as completed, and filtering by due dates.',
        img: '/to-do-list-home-page.jpg',
        link: 'https://to-do-list-sam-razavi.netlify.app/'
    },
    {
        id: 5,
        color: 'from-blue-300 to-violet-300',
        title: 'Vue Exchange App',
        desc: 'A simple Vue.js app for exchanging currency with a clean interface.',
        img: '/Exchange.jpg',
        link: 'https://vue-chi-one.vercel.app'
    },
    {
        id: 6,
        color: 'from-red-300 to-blue-300',
        title: 'Vue Weather App',
        desc: 'A weather forecasting app built with Vue.js, fetching real-time weather data using an external API. Includes a bonus feature to convert temperatures between Celsius and Fahrenheit seamlessly.',
        img: '/Weather app.jpg',
        link: 'https://vue-weather-ruby.vercel.app'
    },
    {
        id: 7,
        color: 'from-green-300 to-yellow-300',
        title: 'Calculator App',
        desc: 'A simple calculator app built with html and css.',
        img: '/calculator.jpg',
        link: 'https://sam-razavi.github.io/Calculator/'
    },
    {
        id: 8,
        color: 'from-green-300 to-yellow-300',
        title: 'To-Do List Application',
        desc: 'A simple calculator app built with html and css.',
        img: '/calculator.jpg',
        link: 'https://sam-razavi.github.io/Calculator/'
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
            <div className="h-[600vh] relative" ref={ref}>
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
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        className="flex justify-end"
                                    >
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                                            See Demo
                                        </button>
                                    </Link>
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
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
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
            </div>
        </motion.div>
    )
}

export default PortfolioPage
