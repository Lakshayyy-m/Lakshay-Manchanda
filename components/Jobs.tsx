"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Jobs = () => {
  const targetRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const jobPosition = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
    [100, 75, 50, 0, -50, -75, -100]
  );

  return (
    <div
      className=" h-screen w-full flex flex-col justify-start p-10 relative overflow-x-hidden"
      ref={targetRef}
    >
      <div className="h-[100vh] lg:w-[13vw] sm:min-w-[200px] max-sm:min-w-[90px]  bg-white absolute top-0 left-0 rounded-ee-3xl" />
      <div className="h-[75vh] lg:w-[13vw] sm:min-w-[200px] max-sm:min-w-[90px] bg-white absolute top-0 lg:left-[13vw] sm:left-[200px] max-sm:left-[90px] rounded-ee-3xl" />
      <div className="h-[50vh] lg:w-[13vw] sm:min-w-[200px] max-sm:min-w-[90px] bg-white absolute top-0 lg:left-[26vw] sm:left-[400px] max-sm:left-[180px] rounded-ee-3xl " />
      <div className="h-[25vh] lg:w-[13vw] sm:min-w-[200px] max-sm:min-w-[90px] bg-white absolute top-0 lg:left-[39vw] sm:left-[600px] max-sm:left-[270px] rounded-ee-3xl " />

      <h1 className="font-extrabold text-8xl  text-white mix-blend-difference max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
        Things I can do for you.
      </h1>

      <div className="flex w-full h-full justify-center flex-col items-end lg:text-4xl md:text-3xl sm:text-2xl gap-5  mix-blend-difference ">
        <motion.ul
          className="w-[50%] max-lg:w-full flex flex-col gap-10"
          style={{ y: jobPosition }}
        >
          <li className="w-full text-center ">Full stack Development.</li>
          <li className="w-full text-left  ">Frontend Development.</li>
          <li className="w-full text-right">Backend Development.</li>
          <li className="w-full text-center">Optimize you website.</li>
          <li className="w-full text-right">Design to Code.</li>
          <li className="w-full text-left ">
            Search Engine Optimized Websites.
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Jobs;
