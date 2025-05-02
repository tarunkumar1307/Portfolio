import React from "react";

const CertificationCard = ({ image, title, date }) => {
  return (
    <div className="bg-[var(--secondary-bg)] bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-md text-[var(--primary-text)] hover:scale-105 hover:border-[var(--accent-secondary)] border-2 border-transparent transition-all duration-300 flex flex-col items-center">
      <img
        src={image}
        alt={`${title} certification`}
        className="w-full h-48 object-contain rounded-md mb-6 bg-gray-800"
        loading="lazy"
        onError={(e) => (e.target.src = "/fallback-image.jpg")}
      />
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-[var(--tertiary-text)]">{date}</p>
    </div>
  );
};

export default CertificationCard;