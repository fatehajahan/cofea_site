import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePht from "../assets/revProfile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviewpg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);
  const reviews = [
    {
      name: "James Smith",
      role: "Entrepreneur",
      img: profilePht,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat asperiores commodi qui officia minima.",
    },
    {
      name: "Sophia Miller",
      role: "Coffee Lover",
      img: profilePht,
      text: "Ut expedita maxime cupiditate neque labore odit quidem tenetur, sapiente dolorem blanditiis repellendus!",
    },
    {
      name: "Michael Brown",
      role: "Business Owner",
      img: profilePht,
      text: "Accusantium delectus laudantium quae vero repudiandae dolor cumque consequuntur!",
    },
  ];

  return (
    <div className=" py-[80px] sm:py-[100px]">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="font-reggae text-[26px] sm:text-[30px]">Come and Join</h2>
        <h2 className="font-semibold font-playfair text-[26px] sm:text-[32px] uppercase">
          our happy customers
        </h2>
      </div>

      {/* MOBILE → SWIPER */}
      <div className="container sm:hidden mt-[40px] px-4">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {reviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <div data-aos="fade-right" className="revPg bg-[#ebe7df] p-[20px] rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={rev.img}
                    alt={rev.name}
                    className="w-[50px] h-[50px]"
                  />
                  <div>
                    <p className="font-outfit font-semibold text-[18px] text-[#30261C]">
                      {rev.name}
                    </p>
                    <p className="font-outfit text-[14px] text-[#30261C]">{rev.role}</p>
                  </div>
                </div>

                <p className="font-outfit text-[13px] leading-relaxed text-[#30261C]">
                  {rev.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* TABLET & DESKTOP → GRID */}
      <div className="container hidden sm:grid mt-[50px] px-4 grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev, index) => (
          <div
            key={index}
            className="revPg bg-[#ebe7df] p-[20px] rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={rev.img}
                alt={rev.name}
                className="w-[60px] h-[60px]"
              />
              <div>
                <p className="font-outfit font-semibold text-[18px] text-[#30261C]">
                  {rev.name}
                </p>
                <p className="font-outfit text-[14px] text-[#30261C]">{rev.role}</p>
              </div>
            </div>

            <p className="font-outfit text-[14px] leading-relaxed text-[#30261C]">
              {rev.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviewpg;
