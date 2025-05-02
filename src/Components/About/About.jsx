import React from "react";
import AboutImage from "../../assets/about.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[var(--primary-bg)] text-[var(--primary-text)] px-4 md:px-20 py-16 pt-16 flex flex-col items-center min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        About Me
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src={AboutImage}
          alt="Tarun Kumar portrait"
          className="w-full max-w-xs rounded-lg shadow-lg"
          loading="lazy"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
        <div className="space-y-6">
          <p className="text-sm md:text-base leading-relaxed text-[var(--secondary-text)]">
            I'm <strong>Tarun Kumar</strong>, a B.Tech Computer Science student at Lovely Professional University, Jalandhar (CGPA: 7.66). As a full-stack developer, I build innovative web applications using C++, JavaScript, React.js, Node.js, MongoDB, and Tailwind CSS.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-[var(--secondary-text)]">
            My projects include a dynamic Weather API App, and an N-Queen Visualizer. Certified in MongoDB, HTML/CSS/JavaScript, and Node.js, I’m passionate about solving real-world problems and collaborating on cutting-edge projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;