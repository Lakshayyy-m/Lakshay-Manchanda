'use client';
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ProjectCard = ({
  title,
  images,
  description,
  link,
  skills,
}: {
  title: string;
  images: string[];
  description: string;
  link: string;
  skills: string;
}) => {
  return (
    <div className="w-full h-svh lg:p-14 p-8">
      <div className="w-full h-full border border-white rounded-3xl flex flex-col p-2">
        <div className="flex max-lg:flex-col">
          <h1 className="xl:text-8xl max-xl:text-7xl max-md:text-4xl max-md:p-4 font-bold w-full p-7">
            {title}.
          </h1>
          <div className="p-10 max-lg:p-2 max-md:text-sm max-sm:text-xs max-md:py-1 flex flex-col gap-3">
            <p className="italic">{description}</p>
            <p>
              Access at:{" "}
              <Link href={link} target="_blank" className="hover:underline">
                {title}
              </Link>
              .
            </p>
            <p>Skills: {skills}</p>
          </div>
        </div>
        <div className="basis-[100%] w-full p-10 max-lg:p-6 max-md:p-1">
          <Carousel
            className=" h-full w-full"
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 2500 })]}
          >
            <CarouselContent className="h-full w-full">
              {images.map((image, index) => (
                <CarouselItem key={index} className="p-10 relative">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain  w-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
