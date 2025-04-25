import React from "react";

const CertificationCard = ({ image, title, date }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all w-full sm:w-[400px]">
      <img
        src={image}
        alt={title}
        className="w-full h-35 object-cover rounded-lg mb-4"
      />
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{date}</p>
    </div>
  );
};

export default CertificationCard;