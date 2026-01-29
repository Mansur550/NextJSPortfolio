"use client";
import { motion } from "framer-motion";


const AboutPage = () => {
    return (
        <motion.div className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className="h-full">

                {/* text Container */}
                <div className="px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">

                    {/* biography */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">I am a Computer Science & Engineering student at AIUB with a passion for architecting scalable,
                            full-stack solutions. My approach to development sits at the intersection of robust backend logic
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
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">SKILLSs</h1>
                        {/* Skills List */}
                        <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                    </div>
                </div>


                {/* SVG continer */}
                <div className="hidden"></div>
            </div>
        </motion.div >
    );
};

export default AboutPage;