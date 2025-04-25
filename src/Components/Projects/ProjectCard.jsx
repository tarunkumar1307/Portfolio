import React from "react";

const ProjectCard = ({ title, main, bannerImg, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-5 flex flex-col w-72 md:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={bannerImg} alt="Project banner" />
      <h3 className="px-4 text-lg md:text-xl font-bold leading-normal text-center">{title}</h3>
      <p className="px-4 text-sm md:text-base leading-tight py-2 text-center">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
          >
            Demo
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;