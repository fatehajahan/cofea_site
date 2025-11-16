import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoSearchCircle } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="relative z-30 w-full">
      <div className="container">
        <div className="py-[25px] flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="w-[90px]" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center text-white gap-x-[25px] font-outfit">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Coffee</li>
            <li className="cursor-pointer hover:text-gray-300">Banery</li>
            <li className="cursor-pointer hover:text-gray-300">About</li>
            <li className="cursor-pointer hover:text-gray-300">Login</li>
          </ul>

          {/* Search Icon (Desktop) */}
          <div className="hidden md:block">
            <IoSearchCircle className="text-[45px] text-white" />
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden text-white text-3xl relative z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX className="text-white" /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-black/90 
        text-white p-6 transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="space-y-6 text-lg mt-14 font-outfit">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Coffee</li>
          <li className="cursor-pointer">Banery</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Login</li>
        </ul>

        {/* Mobile Search */}
        <div className="mt-6">
          <IoSearchCircle className="text-[45px] text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
