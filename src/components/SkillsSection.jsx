import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 size={40} className="text-[#e34c26]" />, label: "HTML5" },
  { icon: <FaCss3Alt size={40} className="text-[#264de4]" />, label: "CSS3" },
  {
    icon: <FaJsSquare size={40} className="text-[#f7df1e]" />,
    label: "JavaScript",
  },
  {
    icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />,
    label: "Tailwind CSS",
  },
  { icon: <FaReact size={40} className="text-[#61dbfb]" />, label: "React.js" },
  { icon: <IoLogoNpm size={40} className="text-[#CB3837]" />, label: "NPM" },
  { icon: <FaNode size={40} className="text-[#68a063]" />, label: "Node.js" },
  {
    icon: <SiExpress size={40} className="text-[#e7dddd]" />,
    label: "Express.js",
  },
  {
    icon: <SiMongodb size={40} className="text-[#47a248]" />,
    label: "MongoDB",
  },
  {
    icon: <SiJsonwebtokens size={40} className="text-[#232F3E]" />,
    label: "JWT",
  },
  { icon: <FaGitAlt size={40} className="text-[#f05032]" />, label: "Git" },
  { icon: <FaGithub size={40} className="text-white" />, label: "GitHub" },
  {
    icon: <SiPostman size={40} className="text-[#ef5b25]" />,
    label: "Postman",
  },
  {
    icon: <SiNetlify size={40} className="text-[#00d1b2]" />,
    label: "Netlify",
  },
  { icon: <SiRender size={40} className="text-white" />, label: "Render" },
];

const sliderVariants = {
  animate: {
    x: [0, -1000], // slide left by 1000px — adjust if needed
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10, // adjust speed here
        ease: "linear",
      },
    },
  },
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 text-white"
      style={{ userSelect: "none" }} // prevent accidental text selection while sliding
    >
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-primary text-center">
            My Skills
          </h2>

          {/* Hide scrollbar and overflow */}
          <div className="overflow-hidden">
            {/* Animate sliding container */}
            <motion.div
              className="flex space-x-6"
              variants={sliderVariants}
              animate="animate"
            >
              {/* Duplicate skills to create continuous loop */}
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[80px]"
                >
                  {skill.icon}
                  <span className="font-bold mt-2">{skill.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
