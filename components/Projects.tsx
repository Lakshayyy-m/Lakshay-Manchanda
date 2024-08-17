"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightSquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  const handleTransition = async () => {
    const cover = document.getElementById("cover")!;
    cover.style.top = "0";
    await sleep();
    router.push("/projects");
    await sleep();
    cover.style.top = "-100vh";
    await sleep();
    cover.style.display = "none";
    cover.style.top = "100vh";
    await sleep();
    cover.style.display = "flex";
  };

  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <>
      <section className="h-screen p-4 flex flex-col justify-center items-center gap-6">
        <motion.h1
          className="mt-4 font-extrabold lg:text-8xl md:text-7xl sm:text-6xl text-4xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] text-white mix-blend-difference text-center"
          initial={{ y: 30, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        >
          Projects I have worked on.
        </motion.h1>
        <motion.p
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.4 },
          }}
        >
          There are a lot, but these are just a few...
        </motion.p>
        <button
          className="flex gap-5 hover:bg-white hover:text-black py-6 px-4 rounded-xl transition-colors"
          onClick={handleTransition}
        >
          Lets go <ArrowRightSquareIcon />
        </button>
      </section>
    </>
  );
};

export default Projects;
