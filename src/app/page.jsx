"use client";
import Image from "next/image";
import { motion } from "framer-motion"



const Homepage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-4 ">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-contain"
          />

        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Designing Interfaces, Developing Solutions, Delivering Impact.</h1>
          <p className="md:xl">I design and build modern web applications with a
            strong focus on performance, usability, and scalability.
            I love solving problems with code and continuously exploring
            new technologies to create impactful solutions.

          </p>
          {/* button */}
          <div className=" flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Homepage;
