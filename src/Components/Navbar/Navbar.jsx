import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

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
          <li>
            <a
              href="#About"
              className="hover:text-gray-300 transition duration-300 p-1 md:p-0"
              onClick={() => openMenu(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              className="hover:text-gray-300 transition duration-300 p-1 md:p-0"
              onClick={() => openMenu(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-gray-300 transition duration-300 p-1 md:p-0"
              onClick={() => openMenu(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Certifications"
              className="hover:text-gray-300 transition duration-300 p-1 md:p-0"
              onClick={() => openMenu(false)}
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              href="#Footer"
              className="hover:text-gray-300 transition duration-300 p-1 md:p-0"
              onClick={() => openMenu(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
