import React from "react";

const ProjectCard = ({ bannerImg, title, main, demoLink, sourceLink }) => {
  return (
    <div className="bg-[var(--secondary-bg)] bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center text-[var(--primary-text)] hover:scale-105 transition-all duration-300">
      <img
        src={bannerImg}
        alt={`${title} project banner`}
        className="w-full max-h-48 object-contain rounded-md mb-4 bg-gray-800"
        loading="lazy"
        onError={(e) => (e.target.src = "/fallback-image.jpg")}
      />
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-[var(--tertiary-text)] mb-4 text-center">{main}</p>
      <div className="flex gap-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent-primary)] text-black font-semibold py-2 px-4 rounded-md hover:bg-[var(--accent-primary-hover)] transition-colors duration-200"
          >
            Demo
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent-secondary)] text-[var(--primary-text)] font-semibold py-2 px-4 rounded-md hover:bg-[var(--accent-secondary-hover)] transition-colors duration-200"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;