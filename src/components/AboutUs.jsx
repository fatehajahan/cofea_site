import React from 'react';
import shopImg from '../assets/coffeeAbt.jpg';

const AboutUs = () => {
  return (
    <section className="py-[80px] bg-[#f7f3ef]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="lg:w-1/2">
          <img 
            src={shopImg} 
            alt="Our Coffee Shop" 
            className="w-full rounded-2xl shadow-lg object-cover h-[400px] lg:h-[500px]"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-4 text-[#30261C]">
            About Our Coffee Shop
          </h2>
          <p className="text-gray-700 mb-6 text-[15px] sm:text-[16px] leading-relaxed">
            Founded in 2010, our coffee shop has been dedicated to bringing the richest, most flavorful coffee experience to our community. 
            Starting as a small neighborhood café, we grew with a love for quality beans and handcrafted beverages. Every cup we serve carries the passion and warmth of our journey.
          </p>
          <p className="text-gray-700 mb-6 text-[15px] sm:text-[16px] leading-relaxed">
            From classic espresso to creative seasonal drinks, we carefully select our coffee beans, roast them to perfection, and craft every drink with care. Our mission is simple: deliver joy, one cup at a time.
          </p>
          <button className="bg-[#30261C] text-white py-3 px-6 rounded-full hover:bg-transparent hover:text-[#30261C] border border-[#30261C] transition duration-300 cursor-pointer font-semibold">
            Explore Our Menu
          </button>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
