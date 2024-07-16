"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const experiences = [
  {
    num: "01",
    company: "Tata Motors Ltd.",
    address: "Pantnagar, Uttarakhand, India",
    description:
      "Created an Application for Tata Motors Ltd, Pantnagar, Uttarakhand.  This application is named as MES System Health Tracking (MSHT) • MES is an information system that help in effective execution of manufacturing operations. This creates reports on plant activities in real time data from order release, to manufacturing, to delivery, to the finished goods inventory. • MSHT application is based on JavaScript which keeps track on physically deployed systems in plant premise. • This displays insights of CPU like temperature, RAM usage, CPU load, CPU usage, cache memory, last login time and date, last rebooted time which helps Tata Motors a lot to maintains the information about their system. • This may reduce the maintenance time for system, cost savings, workers safety, operational efficiency, quality control and many more benefits for production industry. ",
    imgUrl: "/assets/experience/tatamotors.jpeg/",
  },
];

const Experience = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/tatamotorscertificate.pdf";
    link.download = "tatamotorscertificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-1 gap-[60px]"
        >
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 group "
              >
                <div className="w-full flex flex-col gap-10 justify-between items-center md:flex-row">
                  <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 md:text-5xl">
                    {experience.num}
                  </div>
                  <h2 className=" flex gap-6 items-center justify-between text-[30px] md:text-[35px] font-bold leading-none text-white group-hover:text-[#f79500] transition-all duration-500">
                    <Image
                      src="/assets/experience/tatamotors.jpeg"
                      width={80}
                      height={80}
                      className="border rounded-full md:w-[10vw] md:h-[11vh]"
                    />
                    {experience.company}
                  </h2>
                  <p>May 2024 - July 2024</p>
                </div>
                <p className="text-white/60">{experience.description}</p>

                <div className="border-b border-white/20 w-full"></div>
                <Button
                  onClick={handleDownload}
                  className="md:w-[150px] md:h-[70px] w-[130px] h-[60px] rounded-full bg-white group-hover:bg-[#f79500] transition-all duration-500 flex justify-center items-center hover:-translate-y-4 text-black text-[15px] md:text-[17px]"
                >
                  Certificate
                </Button>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
