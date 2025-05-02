import React from "react";
import CertificationCard from "./CertificationCard";
import MongoDB from "../../assets/MongoDB.png"; 
import HTMLCSSJS from "../../assets/HTML, CSS, and Javascript for Web Developers.png";
import NodeJS from "../../assets/Server side JavaScript with Nodejs.png";

const Certification = () => {
  return (
    <div id="Certifications" className="bg-[var(--primary-bg)] text-[var(--primary-text)] px-4 md:px-20 py-16 pt-16 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Certifications</h2>
      
      <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto">
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