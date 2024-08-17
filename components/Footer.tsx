import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex max-xl:flex-col items-center relative z-[100] my-20 max-w-full box-border">
      <div className="grow self-start sm:ps-5 max-sm:px-2 w-full">
        <div className="text-8xl font-bold max-md:text-6xl max-sm:text-5xl max-sm:w-screen max-sm:flex max-sm:justify-between">
          Lakshay
          <span className="sm:hidden relative text-stone-300 text-xl font-normal ps-3 max-md:text-base max-sm:text-xs text-nowrap">
            Full-stack <br /> Developer
          </span>
        </div>
        <div className="flex items-center font-bold text-8xl max-md:text-6xl max-sm:text-5xl max-sm:w-screen max-sm:justify-end">
          <span className="relative text-stone-300 text-xl font-normal px-10 max-md:text-base max-sm:text-xs text-nowrap max-sm:hidden">
            Full-stack <br /> Developer
          </span>
          Manchanda.
        </div>
      </div>
      <div className="self-end max-sm:self-center">
        <div className="flex flex-col gap-5 relative z-50 p-10 self-end max-sm:text-2xl w-full">
          <div className="flex gap-5">
            <Link
              href={"https://github.com/Lakshayyy-m"}
              target="_blank"
              className="flex gap-5 items-center hover:text-black relative bg-[#121212] font-semibold hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
            >
              <span className="max-sm:hidden">Github</span>
              <Github className="group-hover:text-black transition-colors" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/lakshaymanchanda033"}
              target="_blank"
              className="flex gap-5 items-center hover:text-black relative bg-[#121212] font-semibold hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
            >
              <span className="max-sm:hidden">LinkedIn</span>
              <Linkedin className="group-hover:text-black transition-colors" />
            </Link>
          </div>
          <div className="flex gap-5 relative right-10">
            <Link
              href={"https://wa.me/918920277767"}
              target="_blank"
              className="flex gap-5 items-center hover:text-black relative bg-[#121212] font-semibold hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
            >
              <span className="max-sm:hidden">Whatsapp</span>
              <IconBrandWhatsapp className="group-hover:text-black transition-colors" />
            </Link>
            <Link
              href={"mailto:lakshaymanchanda03@gmail.com"}
              target="_blank"
              className="flex gap-5 items-center hover:text-black relative bg-[#121212] font-semibold hover:bg-white border border-white py-2 px-10 rounded-full group transition-colors"
            >
              <span className="max-sm:hidden">E-Mail</span>

              <Mail className="group-hover:text-black transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
