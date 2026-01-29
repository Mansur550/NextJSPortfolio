"use client";
import { motion, useInView } from "framer-motion";
import Brain from "@/components/Brain";
import { useScroll } from "framer-motion";
import { useRef } from "react";


const AboutPage = () => {
    const containerRef = useRef()
    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef);

    return (
        <motion.div className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className="h-full overflow-scroll md:flex lg:flex" ref={containerRef}>

                {/* text Container */}
                <div className="px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">

                    {/* biography */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg text-justify">
                            I am a Computer Science & Engineering student at
                            AIUB with a passion for architecting scalable,
                            full-stack solutions. My approach to development
                            sits at the intersection of robust backend logic
                            and intuitive frontend experiences. <br /> <br />
                            Using a modern stack of Next.js, NestJS, and PostgreSQL, I build applications that don't just
                            work—they perform. My experience ranges from developing role-based resource platforms to integrating
                            Machine Learning models for sentiment analysis. I believe in clean architecture, secure API design, and
                            writing code that is as maintainable as it is efficient.</p>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>


                    {/* Skills */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={skillRef}>

                        <motion.h1
                            initial={{ x: -"300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="font-bold text-2xl">SKILLS</motion.h1>
                        {/* Skills List */}
                        <div className="flex gap-4 flex-wrap">
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                TypeScript
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Nest.js
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PostgreSQL
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PostMan
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                C++
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Python
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                R
                            </div>
                        </div>


                    </div>
                </div>


                {/* SVG continer */}
                <div className="hidden lg:block w-1/3  sticky top-0 z-30 xl:w-1/2">

                    <Brain scrollYProgress={scrollYProgress} />

                </div>
            </div>
        </motion.div >
    );
};

export default AboutPage;
