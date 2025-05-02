import React from "react";
import ProjectCard from "./ProjectCard";
import WeatherAPI from "../../assets/Screenshot 2025-04-22 024309.png"; 
import NQueen from "../../assets/Screenshot from 2024-07-12 11-23-58.png";

const Projects = () => {
  return (
    <div id="Projects" className="bg-[var(--primary-bg)] text-[var(--primary-text)] w-full px-4 md:px-20 py-16 pt-16 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
        <ProjectCard
          bannerImg={WeatherAPI}
          title="Weather API"
          main="A weather app using React.js that fetches real-time weather data from an API."
          demoLink="https://weatherapi-rho-seven.vercel.app/"
          sourceLink="https://github.com/tarunkumar1307/Weather-API"
        />
        <ProjectCard
          bannerImg={NQueen}
          title="N-Queen Visualizer"
          main="A problem-solving app built with C++, solving the N-Queen challenge using backtracking."
          demoLink="https://your-nqueen-demo-link.com"
          sourceLink="https://github.com/tarunkumar1307/N_Queen"
        />
      </div>
    </div>
  );
};

export default Projects;