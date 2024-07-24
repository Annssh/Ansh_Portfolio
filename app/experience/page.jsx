"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const experiences = [
  {
    num: "01",
    company: "Tata Motors Ltd.",
    position: "Summer Intern",
    address: "Pantnagar, Uttarakhand, India",
    description: (
      <div style={{ padding: "20px" }}>
        <h2>
          MES System Health Tracking (MSHT) using{" "}
          <span
            style={{ transition: "color 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.color = "#f79500")}
            onMouseLeave={(e) => (e.target.style.color = "inherit")}
          >
            MERN Stack Development
          </span>
        </h2>
        <p>Application for Tata Motors Ltd, Pantnagar, Uttarakhand</p>
        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
          <li>
            MES is an information system that helps in effective execution of
            manufacturing operations. It creates reports on plant activities in
            real-time data from order release, to manufacturing, to delivery, to
            the finished goods inventory.
          </li>
          <li>
            MSHT application is based on JavaScript which keeps track of
            physically deployed systems in the plant premise.
          </li>
          <li>
            This displays insights of CPU like:
            <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
              <li>Temperature</li>
              <li>RAM usage</li>
              <li>CPU load</li>
              <li>CPU usage</li>
              <li>Cache memory</li>
              <li>Last login time and date</li>
              <li>Last rebooted time</li>
            </ul>
          </li>
          <li>
            Helps Tata Motors a lot to maintain the information about their
            systems.
          </li>
          <li>
            This may reduce the maintenance time for systems, cost savings,
            workers' safety, operational efficiency, quality control, and many
            more benefits for the production industry.
          </li>
        </ul>
      </div>
    ),
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
                <div className="w-full flex flex-col gap-10 md:gap-[100px] justify-left items-center md:flex-row md:m-10">
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
                </div>
                <div className="flex justify-between items-center mx-10">
                  <div className="text-[15px] font-bold md:text-[20px]">{experience.position}</div>
                  <p className="text-[15px] font-bold md:text-[20px]">May 2024 - July 2024</p>
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
