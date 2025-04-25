import React from "react";
import CertificationCard from "./CertificationCard";
import MongoDB from "../../assets/MongoDB.png"; 
import HTMLCSSJS from "../../assets/HTML, CSS, and Javascript for Web Developers.png";
import NodeJS from "../../assets/Server side JavaScript with Nodejs.png";

const Certification = () => {
  return (
    <div id="Certifications" className="bg-[#0E1325] text-white py-16 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Certifications</h2>
      
      <div className="flex flex-wrap gap-8 justify-center">
        <CertificationCard
          image={MongoDB}
          title="Introduction to MongoDB for Students"
          date="July 2024"
        />
        <CertificationCard
          image={HTMLCSSJS}
          title="HTML, CSS, and JavaScript for Web Developers"
          date="April 2024"
        />
        <CertificationCard
          image={NodeJS}
          title="Server Side JavaScript with Node.js"
          date="April 2024"
        />
      </div>
    </div>
  );
};

export default Certification;
