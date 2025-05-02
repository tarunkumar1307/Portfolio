import React from "react";
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaDatabase } from "react-icons/fa"; 
import { SiCplusplus, SiSwift, SiTailwindcss, SiMongodb, SiVite } from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="min-h-screen bg-[var(--primary-bg)] text-[var(--primary-text)] px-4 md:px-20 py-16 pt-16 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
        {[
          { Icon: FaHtml5, label: "HTML", color: "#E34F26" },
          { Icon: FaCss3, label: "CSS", color: "#1572B6" },
          { Icon: FaJs, label: "JavaScript", color: "#F7DF1E" },
          { Icon: SiCplusplus, label: "C++", color: "#00599C" },
          { Icon: FaNodeJs, label: "Node.js", color: "#3C873A" },
          { Icon: FaReact, label: "React.js", color: "#61DAFB" },
          { Icon: FaDatabase, label: "MySQL", color: "#4F5B93" },
          { Icon: SiSwift, label: "Swift", color: "#F05138" },
          { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
          { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
          { Icon: SiVite, label: "Vite", color: "#646CFF" },
        ].map(({ Icon, label, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
          >
            <Icon size={50} color={color} />
            <p className="mt-3 text-lg text-[var(--secondary-text)]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;