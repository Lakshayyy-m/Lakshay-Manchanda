"use client";
import Spline from "@splinetool/react-spline";
import { Github, Linkedin, Loader, Mail } from "lucide-react";
import React, { Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const Hero = () => {
  const { scrollY } = useScroll();

  const textPosition = useTransform(
    scrollY,
    [0, 100, 150, 200, 250, 300, 350],
    [0, -50, -75, -100, -125, -150, -175]
  );

  return (
    <>
      <div className="fixed w-[40vw] aspect-square  shadow-2xl shadow-black rounded-full top-[10%] -left-56 z-10" />
      <div className="fixed w-[40vw] aspect-square  shadow-2xl shadow-black rounded-full bottom-[10%] -right-56 z-10" />
      <div className="text-7xl fixed bottom-32 left-24 max-md:bottom-12 max-lg:left-12 z-20 text-white mix-blend-difference">
        ...
      </div>
      <div className="text-7xl fixed top-32 right-24 z-20 text-white mix-blend-difference max-md:top-12 max-lg:right-12">
        ...
      </div>
      <main className="p-10 mt-10 relative  h-screen w-screen box-border">
        <section className=" h-screen w-full flex flex-col justify-center gap-10">
          <motion.div style={{ y: textPosition }} className="relative z-50">
            <p className="text-4xl font-bold">Hi, I am </p>
            <TypeAnimation
              className="text-6xl max-lg:text-5xl max-md:text-3xl max-sm:text-xl font-bold w-full"
              sequence={[
                "Lakshay Manchanda.",
                1000,
                "a Full-Stack Developer.",
                1000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <div className="flex flex-col gap-5 relative z-50">
            <div className="flex gap-5">
              <Link
                href={"https://github.com/Lakshayyy-m"}
                target="_blank"
                className="hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
              >
                <Github className="group-hover:text-black transition-colors" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/lakshaymanchanda033"}
                target="_blank"
                className="hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
              >
                <Linkedin className="group-hover:text-black transition-colors" />
              </Link>
            </div>
            <div className="flex gap-5 ms-10">
              <Link
                href={"https://wa.me/918920277767"}
                target="_blank"
                className="hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
              >
                <IconBrandWhatsapp className="group-hover:text-black transition-colors" />
              </Link>
              <Link
                href={"mailto:lakshaymanchanda03@gmail.com"}
                target="_blank"
                className="hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
              >
                <Mail className="group-hover:text-black transition-colors" />
              </Link>
            </div>
          </div>
        </section>
        <section className="absolute top-0 right-0 h-screen w-screen z-[15] scalje-50 ">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-full w-full">
                <Loader size={24} color="white" className="animate-spin" />
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/VYxONMlVZcgndOzB/scene.splinecode"
              className="w-full"
            />
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default Hero;
