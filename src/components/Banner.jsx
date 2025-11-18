import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);
  return (
    <div>
      <div className="bg-banner bg-cover bg-no-repeat bg-center 
      pt-[120px] md:pt-[180px] lg:pt-[220px]
      h-[450px] md:h-[650px] lg:h-[750px]
      w-full absolute inset-0 z-10"
      >
        <div data-aos="fade-up" className="container md:text-left text-center">
          {/* Top Text */}
          <p className="uppercase text-white font-outfit tracking-[4px] text-sm md:text-base">
            Welcome
          </p>

          {/* Main Heading */}
          <p
            className="text-white font-playfair text-[28px] leading-[36px] md:text-[45px] md:leading-[55px]
          lg:text-[60px] lg:leading-[70px] max-w-[90%] md:max-w-[500px] lg:max-w-[650px] py-[10px] md:py-[15px] mx-auto md:mx-0"
          >
            We serve the richest coffee in the city!
          </p>

          {/* Subtitle */}
          <p
            className="text-white font-outfit text-[12px] md:text-[14px] max-w-[280px] md:max-w-[350px] lg:max-w-[420px] md:mx-0 mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          </p>

          {/* Button */}
          <button
            className="bg-white text-black font-outfit py-2 md:py-3 w-[100px] md:w-[150px] lg:w-[170px]
          rounded-full mt-5 cursor-pointer 
          border border-white
          hover:bg-transparent hover:text-white 
          transition duration-500 md:text-[15px] text-[12px]"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
