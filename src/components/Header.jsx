import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoSearchCircle } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [active, setActive] = useState('Home')

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

  // scroll navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
        setOpen(false);
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative z-30 w-full">
      <div className="container">
        <div className="py-[25px] flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[90px]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center text-white gap-x-[25px] font-outfit">
            {['Home', 'About', 'coffee', 'Review'].map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item)
                  const section = document.getElementById(item.toLowerCase())
                  if (section) section.scrollIntoView({ behavior: 'smooth' })
                }}
                className="relative cursor-pointer group transition duration-300"
              >
                <span
                  className={`relative ${active === item
                    ? 'text-[#9e9e9e] drop-shadow-[0_0_6px_red]'
                    : 'text-white group-hover:text-[#9e9e9e] group-hover:drop-shadow-[0_0_6px_red]'
                    }`}
                >
                  {item}
                </span>

                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#9e9e9e] transition-all duration-500 ${active === item ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </li>
            ))}
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
          {['Home', 'About', 'coffee', 'Review'].map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item)
                const section = document.getElementById(item.toLowerCase())
                if (section) section.scrollIntoView({ behavior: 'smooth' })
              }}
              className="relative cursor-pointer group transition duration-300"
            >
              <span
                className={`relative ${active === item
                  ? 'text-[#9e9e9e] drop-shadow-[0_0_6px_red]'
                  : 'text-white group-hover:text-[#9e9e9e] group-hover:drop-shadow-[0_0_6px_red]'
                  }`}
              >
                {item}
              </span>

              {/* Underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#9e9e9e] transition-all duration-500 ${active === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              ></span>
            </li>
          ))}
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
