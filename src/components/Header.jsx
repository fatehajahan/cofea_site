import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import fav1 from '../assets/coffee_1.jpg'
import { IoSearchCircle } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CiHeart, CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourite } from "../Slices/favouriteSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { toggleTheme } from "../Slices/themeSlice";

const Header = () => {
  const theme = useSelector((state) => state.themeDetails.theme);
  const data = useSelector((state) => state.favouriteDetails.favourites)
  console.log(theme)
  const dispatch = useDispatch()
  const [favourite, setFavourite] = useState(false);
  const favDesktopRef = useRef(null);
  const favMobileRef = useRef(null);
  const favBtnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [active, setActive] = useState('Home')
  const [isSticky, setIsSticky] = useState(true)

  // close favourite slider outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        favourite &&
        favDesktopRef.current &&
        favMobileRef.current &&
        !favDesktopRef.current.contains(e.target) &&
        !favMobileRef.current.contains(e.target) &&
        favBtnRef.current &&
        !favBtnRef.current.contains(e.target)
      ) {
        setFavourite(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [favourite])

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
        setFavourite(false);
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
        setFavourite(false);
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const removeFav = (coffee) => {
    try {
      dispatch(removeFromFavourite(coffee));
      setFavourite(false)
      toast.success("Removed Item Successfully!!")
    } catch (error) {
      console.log(error)
    }
  }

  // theme switch
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <header className="relative z-30 w-full">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
            {['Home', 'About', 'coffee', 'Review', 'contact'].map((item) => (
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
                    ? 'text-[#9e9e9e] drop-shadow-[0_0_6px_#b58855]'
                    : 'text-white group-hover:text-[#9e9e9e] group-hover:drop-shadow-[0_0_6px_#b58855]'
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
          {/* Search Icon + Favourite (Desktop) */}
          <div className="hidden md:block">
            <div className="flex items-center gap-[20px]">
              <IoSearchCircle className="text-[45px] text-white" />

              {/* Heart Button */}
              <div className="relative" ref={favDesktopRef} onClick={() => setFavourite(!favourite)}>
                <CiHeart className="text-[40px] text-white cursor-pointer duration-300" />

                <div className="bg-[#e2d9c8] w-[20px] h-[20px] rounded-full absolute top-0 left-0 flex items-center justify-center font-outfit font-semibold text-black">
                  {data.length > 9 ? <p>9+</p> : <p>{data.length}</p>}
                </div>
              </div>

              {/* theme button */}
              <div onClick={handleTheme} className="cursor-pointer">
                {theme === "light" ? (
                  <CiLight className="text-[40px] text-white" />
                ) : (
                  <CiLight className="text-[40px] text-yellow-300" />
                )}
              </div>
            </div>

            {/* Favourite Slide Panel for desktop */}
            <div
              ref={favDesktopRef}
              className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl text-black p-6 transform transition-transform duration-300 z-40 overflow-y-scroll lg:block md:block hidden ${favourite ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-playfair text-[22px] font-semibold">Your Favorites</h2>

                <button
                  onClick={() => setFavourite(false)}
                  className="text-black text-2xl font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              {
                data.length > 0 ?
                  data.map((cof) => {
                    return (
                      <div key={cof.id} className="font-outfit text-[15px] text-gray-700">
                        <div className="bg-[#e2d9c8] p-5 rounded-2xl mt-[20px]">
                          <div className="flex items-center gap-[15px]">
                            <img src={cof.image} alt="" className="w-[100px] h-[100px] object-cover" />
                            <div>
                              <p className="font-playfair text-[18px] font-bold">{cof.name}</p>
                              <p className="font-outfit text-[12px]">{cof.desc}</p>
                              <p className="font-outfit text-[12px]">{cof.price}</p>

                              <button onClick={() => removeFav(cof.id)} className="bg-[#30261c] text-white py-[5px] px-[10px] rounded-xl mt-[10px] border border-[#30261c] hover:bg-transparent hover:text-black cursor-pointer duration-500">
                                Remove from Favourite
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }) : <div className="flex justify-center items-center h-screen">No Item added as Favourite</div>
              }
            </div>
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
          {['Home', 'About', 'coffee', 'Review', 'contact'].map((item) => (
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
                  ? 'text-[#9e9e9e] drop-shadow-[0_0_6px_#b58855]'
                  : 'text-white group-hover:text-[#9e9e9e] group-hover:drop-shadow-[0_0_6px_#b58855]'
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
          <div className="flex items-center gap-[20px]">
            <IoSearchCircle className="text-[45px] text-white" />
            <div className="relative" ref={favBtnRef} onClick={() => setFavourite(!favourite)}>
              <CiHeart className="text-[40px] text-white cursor-pointer duration-300" />

              <div className="bg-[#e2d9c8] w-[20px] h-[20px] rounded-full absolute top-0 left-0 flex items-center justify-center font-outfit font-semibold text-black">
                {data.length > 9 ? <p>9+</p> : <p>{data.length}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Favourite Slide Panel for mobile and responsive */}
      <div
        ref={favMobileRef}
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-xl text-black p-6 transform transition-transform duration-300 z-40 overflow-y-scroll lg:hidden md:hidden block ${favourite ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-playfair text-[22px] font-semibold">Your Favorites</h2>

          <button
            onClick={() => setFavourite(false)}
            className="text-black text-2xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {
          data.length > 0 ?
            data.map((cof) => {
              return (
                <div key={cof.id} className="font-outfit text-[15px] text-gray-700">
                  <div className="bg-[#e2d9c8] p-5 rounded-2xl mt-[20px]">
                    <div className="flex items-center gap-[15px]">
                      <img src={cof.image} alt="" className="w-[100px] h-[100px] object-cover" />
                      <div>
                        <p className="font-playfair text-[18px] font-bold">{cof.name}</p>
                        <p className="font-outfit text-[12px]">{cof.desc}</p>
                        <p className="font-outfit text-[12px]">{cof.price}</p>

                        <button onClick={() => removeFav(cof.id)} className="bg-[#30261c] text-white py-[5px] px-[10px] rounded-xl mt-[10px] border border-[#30261c] hover:bg-transparent hover:text-black cursor-pointer duration-500">
                          Remove from Favourite
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : <div className="flex justify-center items-center h-screen">No Item added as Favourite</div>
        }
      </div>
    </header>
  );
};

export default Header;
