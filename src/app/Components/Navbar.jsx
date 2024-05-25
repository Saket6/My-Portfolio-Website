"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const navLinks = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
 
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 bg-gray-950 z-10 p-4">
      <div className="flex container md:justify-start justify-between lg:py-4 items-center px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          Portfolio
        </Link>
        <div className="mobile-menu  block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <MenuIcon className="h-5 w-5" />
              {/* <> ➕ </> */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto  ml-20 " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className=" text-xl p-2  hover:border-b-4 hover:border-pink-600 " > {link.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ?
      <div className="flex flex-col justify-center items-center">
        {navLinks.map((link, index) => (

              <li key={index} className=" list-none my-2">
                <Link href={link.path} className=" text-sm p-2  hover:border-b-2 hover:border-pink-600 " > {link.title} </Link>
              </li>
            ))}
      </div>
      
      : null}
    </nav>
  );
};

export default Navbar;