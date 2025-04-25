import React from "react";
import Profile from "../../assets/Profile.jpg";
import TextChange from "../TextChange";
import { SocialIcon } from 'react-social-icons'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-8 md:p-20 font-geist">
      <div className="md:w-3/5 w-full md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter my-5">
          <TextChange />
        </h1>

        <p className="text-xs md:text-base tracking-tight my-6 leading-relaxed">
          Hi, I'm <strong>Tarun Kumar</strong>, a passionate Computer Science student from 
          Lovely Professional University, Jalandhar, specializing in Full-Stack Development. 
          I'm deeply committed to building innovative and scalable applications that tackle 
          real-world problems through technology. With a strong foundation in Web Development, 
          I'm eager to contribute to impactful projects and continue growing in this exciting field.
          <br /><br />
          Currently, I'm pursuing my B.Tech in Computer Science & Engineering and constantly 
          honing my skills in emerging technologies to stay at the forefront of software development.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <SocialIcon url="https://www.linkedin.com/in/tarunkumar0007" style={{ width: 40, height: 40 }} />
          <SocialIcon url="https://github.com/tarunkumar1307" style={{ width: 40, height: 40 }} />
          <SocialIcon url="https://www.instagram.com/i__aadi07?igsh=MWlscW14d2ZyZWRqcw==" style={{ width: 40, height: 40 }} />
        </div>

        <div className="mt-6">
          <Link to="/resume">
            <button className="text-blue-950 text-sm md:text-base font-semibold rounded-3xl bg-white hover:opacity-85 duration-300 hover:scale-105 px-4 py-2">
              Resume
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/3 w-full flex justify-center">
        <img className="max-w-xs md:max-w-sm w-full" src={Profile} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
