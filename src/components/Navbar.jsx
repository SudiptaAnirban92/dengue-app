import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl shadow-[#032f3c3f] z-[100] bg-gradient-to-l from-[#10898d] to-[#EDF4F5] ">
      {/* Container */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b border-[#10898d]">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#10898d]">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#10898d]">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden p-4 cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* mobile menu container */}
      <div
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        {/* mobile menu icons */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#EDF4F5] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold text-[#10898d]">
              Dengue Prediction
            </h2>
            <div onClick={handleNav} className="p-4 cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="py-8">
            <p className="border-b border-[#10898d]">
              Get data regarding dengue
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                <Link onClick={handleNav} to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={handleNav} to="" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={handleNav} to="" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
