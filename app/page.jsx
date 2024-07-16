"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Skills from "@/components/Skills";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/Resume_Final.pdf";
    link.download = "Resume_Final.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-lg md:text-xl xl:text-2xl">
              Software Developer
            </span>
            <h1 className="h1 mb-3">
              Hello I'm <br />
              <span className="text-[#f79500]">Ansh Agrawal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-[15px] md:text-[15px] xl:text-[20px]">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-5">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 md:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#f79500] rounded-full flex justify-center items-center text-[#f79500] text-base hover:bg-[#f79500] hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-8 md:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Home;
