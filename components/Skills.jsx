import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

const skills = {
  title: "My Skills",
  description:
    "lorem ipsum dolor sit amet, consectetur adip eum er at sapien et ea rebum ad minim veniam et",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js ",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

{
  /* <div key={index} className="">{item.icon}</div>; */
}

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly mt-4 ">
      <h3 className="text-2xl font-bold bg-white/80 text-black p-2 border rounded-xl group">
        <div className=" transition-all duration-300">{skills.title}</div>
      </h3>
      <div>
        <ul className="grid md:grid-cols-7 grid-cols-4 gap-x-[40px]">
          {skills.skillList.map((skill, index) => {
            return (
              <li key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-[80px] h-[80px] bg-[#232329] rounded-xl flex justify-center items-center group m-2">
                      <div className="md:text-5xl text-3xl  group-hover:text-[#f79500] transition-all duration-300">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
