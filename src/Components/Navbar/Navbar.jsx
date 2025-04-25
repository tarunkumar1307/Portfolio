import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F37] shadow-md text-white">
      <div className="flex items-center justify-end px-6 py-4 md:px-20">
        {/* Menu toggle icons (Mobile only) */}
        <div className="md:hidden absolute right-6 top-4 z-20">
          {menu ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer"
              onClick={() => openMenu(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer"
              onClick={() => openMenu(true)}
            />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            menu ? "block" : "hidden"
          } md:flex gap-6 font-medium text-sm md:text-base md:static absolute top-16 right-6 md:top-0 md:right-0 bg-[#1A1F37] md:bg-transparent rounded-xl px-4 py-4 md:p-0 z-10`}
        >
          <a href="#About">
            <li className="hover:text-gray-300 transition duration-300 p-1 md:p-0">About</li>
          </a>
          <a href="#Experience">
            <li className="hover:text-gray-300 transition duration-300 p-1 md:p-0">Skills</li>
          </a>
          <a href="#Projects">
            <li className="hover:text-gray-300 transition duration-300 p-1 md:p-0">Projects</li>
          </a>
          <a href="#Certifications">
            <li className="hover:text-gray-300 transition duration-300 p-1 md:p-0">Certifications</li>
          </a>
          <a href="#Footer">
            <li className="hover:text-gray-300 transition duration-300 p-1 md:p-0">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
