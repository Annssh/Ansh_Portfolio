import Education from "@/components/Education";
import Stats from "@/components/Stats";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-10">
      <div><Stats /></div>
      <div><Education/></div>
    </div>
  );
};

export default About;
