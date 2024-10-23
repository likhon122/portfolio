"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const ClientProjects = ({ projects }) => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.2, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none group">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* Outline Num */}
              <div className="text-6xl sm:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Category */}
              <h2 className="text-[32px] sm:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>

              <h3 className="text-[22px] sm:text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-[16px] sm:text-[18px] text-white/60 mt-4">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2 sm:gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-lg sm:text-xl">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Live Project Button */}
                <a href={project.live} className="" target="_blank">
                  <TooltipProvider delayDuration={50}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center hover:text-accent">
                        <BsArrowUpRight className="text-white text-2xl sm:text-3xl hover:text-accent" />
                        <TooltipContent style={{ borderRadius: "0.5rem" }}>
                          Live Project
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </a>

                {/* Github Button */}
                <a href={project.github} target="_blank">
                  <TooltipProvider delayDuration={50}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl sm:text-3xl hover:text-accent" />
                        <TooltipContent style={{ borderRadius: "0.5rem" }}>
                          Github Repository
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-[360px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                    style={{ borderRadius: "1rem", overflow: "hidden" }}
                  >
                    {/* Overview */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderButtons
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] sm:text-[22px] w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] transition-all flex justify-center items-center"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientProjects;
