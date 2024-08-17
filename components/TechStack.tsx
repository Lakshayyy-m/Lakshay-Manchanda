"use client";
import Spline from "@splinetool/react-spline";
import { Loader } from "lucide-react";
import React, { Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["end start"],
  });

  let innerWidth = 500;

  if (typeof window !== "undefined") {
    innerWidth = window.innerWidth;
  }
  const techStackScale = useTransform(
    scrollY,
    [500, 600, 700, 800, 900, 1000],
    [1.05, 1.1, 1.15, 1.2, 1.25, 1.3]
  );

  const techStackPosition = useTransform(
    scrollY,
    [1000, 1200, 1400, 1600, 1800, 2000],
    [-100, -200, -300, -400, -500, -600]
  );

  const techStackOpacity = useTransform(
    scrollY,
    [1000, 1200, 1400, 1600, 1800, 2000],
    [1, 0.8, 0.6, 0.4, 0.2, 0]
  );

  return (
    <section
      className="w-full h-screen flex justify-center items-center flex-col bg-transparent bg-none snap-start bg-white relative"
      ref={targetRef}
    >
      <motion.div
        className="relative z-30 flex flex-col gap-11"
        style={{
          scale: innerWidth > 300 ? techStackScale : 1,
          opacity: techStackOpacity,
          y: techStackPosition,
        }}
      >
        <h1 className="text-black font-extrabold text-8xl max-lg:text-7xl w-full text-center max-md:text-5xl max-sm:text-4xl">
          Technologies.
        </h1>
        <div className="flex justify-center items-center lg:gap-16 md:gap-10 sm:gap-5 w-full">
          <ul className="text-black font-bold lg:text-4xl md:text-3xl sm:text-2xl text-center">
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              NextJS
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              ReactJS
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              TypeScript
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              Vercel
            </li>
          </ul>
          <ul className="text-black font-bold lg:text-4xl text-center md:text-3xl sm:text-2xl ">
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              ExpressJS
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              MongoDB
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              SQL
            </li>
            <li className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              and many more...
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-screen h-screen  z-20">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full w-full">
              <Loader size={24} color="white" className="animate-spin" />{" "}
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/M0xZQU259GyS5vt4/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
};

export default TechStack;
