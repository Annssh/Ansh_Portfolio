"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack Development",
    title: "Wave",
    description:
      "Video Conferencing App . Wave is a video conferencing application in which multiple users can make a room and did a meeting with video and audio facility. This also provide facility of recording and storing it. Video and audio call is done with help of Stream JS library and validation of user is done by clerk authentication. This application is made with vibrant technology Next-Js",
    stack: [
      { name: "TypeScript" },
      { name: "Next.Js" },
      { name: "TailwindCss" },
      { name: "Express Js" },
    ],
    image: "/assets/project/wave.jpg",
    live: "https://wave-xi-eight.vercel.app/",
    target: "_blank",
    github: "https://github.com/Annssh/Wave-Video-Calling-App",
  },
  {
    num: "02",
    category: "BlockChain + Full Stack",
    title: "Vote Me",
    description:
      "This full stack application helps to organize polling or voting in decentralized way. Only registered candidate can vote and admin can see result in visualization form. User Authentication and Authorization, Voter registration, User-friendly interface, Anonymous voting, Auditing and Verification . Blockchain make every transaction of vote very safe and authenticate with decentralized system and servers, so there is a safety layer of blockchain for every transaction of vote from user to contestant.",
    stack: [
      { name: "Blockchain" },
      { name: "React.Js" },
      { name: "Express.Js" },
      { name: "TailwindCss" },
    ],
    image: "/assets/project/vote.jpg",
    target: "_blank",
    live: "https://github.com/Annssh/Online-Voting-App",
    github: "https://github.com/Annssh/Online-Voting-App",
  },
  {
    num: "03",
    category: "Web Development",
    title: "Medschedule",
    description:
      "This application helps patient to make contact with doctors and help them to book an appointment. Here all interaction is private, safe and secure with authorization. Doctor Availability Management, Patient records management, Appointment remainders, Payment processing using Rayzor Pay.",
    stack: [
      { name: "Next.Js" },
      { name: "TypeScript" },
      { name: "Express Js" },
    ],
    // image: "/assets/project/medschedule.jpg",
    image: "/assets/project/comingsoon.webp",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack Development",
    title: "Chat Application",
    description:
      "Created an application having functionality of one-to-one chat, group chat, create new group and many more. Functionality of Video call, Voice call in app. User Authentication, Real-time messaging, File sharing, Search functionality. Responsive and user-friendly interface",
    stack: [
      { name: "React.Js" },
      { name: "Node.Js" },
      { name: "Express.Js" },
      { name: "Socket.io" },
    ],
    image: "/assets/project/comingsoon.webp",
    target: "_blank",
    live: "",
    github: "https://github.com/Annssh/Chat-Application",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center md:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="flex items-center text-2xl md:text-4xl leading-none font-extrabold text-transparent text-outline">
                {project.num}.<p className="ml-[5%]">{project.title}</p>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#f79500] transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="gap-2 flex flex-col md:flex-row">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-lg md:text-xl text-[#f79500]"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target={project.target}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#f79500]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target={project.target}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#f79500]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] h-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mt-4"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group flex justify-center items-center">
                      <div className="absolute bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          quality={100}
                          className="object-contain "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-10 z-20 w-full justify-between md:w-max md:justify-none"
                btnStyles="bg-[#f79500] hover:bg[#f79500]-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all border rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
