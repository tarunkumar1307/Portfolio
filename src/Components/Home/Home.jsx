import React from "react";
import PropTypes from "prop-types";
import Profile from "../../assets/Profile.jpg";
import TextChange from "../TextChange";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="text-[var(--primary-text)] flex flex-col md:flex-row w-full justify-between items-center md:items-start px-4 md:px-20 py-16 pt-16 bg-[var(--primary-bg)] min-h-screen"
      aria-labelledby="home-heading"
    >
      <div className="md:w-3/5 w-full md:pt-10 space-y-6">
        <h1
          id="home-heading"
          className="text-xl md:text-6xl font-bold leading-normal tracking-tighter my-5 animate-fade-in"
        >
          <TextChange />
        </h1>

        <p className="text-xs sm:text-sm md:text-base tracking-tight my-6 leading-relaxed text-[var(--secondary-text)]">
          Hi, I'm <strong>Tarun Kumar</strong>, a passionate Computer Science student from
          Lovely Professional University, Jalandhar, specializing in Full-Stack Development.
          I'm deeply committed to building innovative and scalable applications that tackle
          real-world problems through technology. With a strong foundation in Web Development,
          I'm eager to contribute to impactful projects and continue growing in this exciting field.
          <br />
          <br />
          Currently, I'm pursuing my B.Tech in Computer Science & Engineering and constantly
          honing my skills in emerging technologies to stay at the forefront of software development.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <SocialIcon
            url="https://www.linkedin.com/in/tarunkumar0007"
            style={{ width: 40, height: 40 }}
            bgColor="var(--accent-secondary)"
            aria-label="LinkedIn Profile"
            className="hover:scale-110 transition-transform duration-200"
          />
          <SocialIcon
            url="https://github.com/tarunkumar1307"
            style={{ width: 40, height: 40 }}
            bgColor="var(--accent-secondary)"
            aria-label="GitHub Profile"
            className="hover:scale-110 transition-transform duration-200"
          />
        </div>

        <div className="mt-6">
          <Link to="/resume" aria-label="View Tarun Kumar's Resume">
            <button className="text-black text-sm md:text-base font-semibold rounded-3xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] transition-all duration-300 px-4 py-2 focus:ring-2 focus:ring-[var(--accent-secondary)] focus:outline-none">
              Resume
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/3 w-full flex justify-center">
        <img
          className="max-w-xs md:max-w-sm w-full rounded-lg shadow-lg animate-fade-in"
          src={Profile}
          alt="Tarun Kumar's profile portrait"
          loading="lazy"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
      </div>
    </section>
  );
};

Home.propTypes = {};

export default Home;