import React, { useEffect, useState } from 'react'
import cof01 from '../assets/coffee_1.jpg'
import cof02 from '../assets/coffee_2.png'
import cof03 from '../assets/coffee_3.jpg'
import cof04 from '../assets/coffee_4.jpg'
import cof05 from '../assets/coffee_5.jpg'
import cof06 from '../assets/coffee_6.png'
import cof07 from '../assets/coffee_7.jpg'
import cof08 from '../assets/coffee_8.jpg'
import { CiHeart } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import { addToFavourite } from '../Slices/favouriteSlice'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialCoffee = () => {
  const dispatch = useDispatch()
  const menuItems = [
    { id: 1, name: "Espresso", price: "$3.50", category: "Hot", image: cof01, desc: "Rich and smooth flavor for your perfect morning." },
    { id: 2, name: "Cappuccino", price: "$4.50", category: "Hot", image: cof02, desc: "Creamy and foamy delight for coffee lovers.", },
    { id: 3, name: "Latte", price: "$4.75", category: "Hot", image: cof03, desc: "Strong and bold taste to kickstart your day.", },
    { id: 4, name: "Iced Coffee", price: "$3.75", category: "Cold", image: cof04, desc: "Mild and smooth coffee with steamed milk.", },
    { id: 5, name: "Mocha", price: "$5.00", category: "Hot", desc: "Mild and smooth coffee with steamed milk.", image: cof05 },
    { id: 6, name: "Americano", price: "$3.25", category: "Hot", desc: "Mild and smooth coffee with steamed milk.", image: cof06 },
    { id: 7, name: "Cold Brew", price: "$4.25", category: "Cold", desc: "Mild and smooth coffee with steamed milk.", image: cof07 },
    { id: 8, name: "Frappuccino", price: "$5.50", category: "Cold", desc: "Mild and smooth coffee with steamed milk.", image: cof08 }
  ];

  const addToFav = (coffee) => {
    try {
      dispatch(addToFavourite(coffee));
      toast.success("Added to Favourites!!")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const coffeePerPg = 4;

  const lastIndex = currentPage * coffeePerPg;
  const firstIndex = lastIndex - coffeePerPg;

  const currentCoffees = menuItems.slice(firstIndex, lastIndex)
  const totalPage = Math.ceil(menuItems.length / coffeePerPg)

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <div className='pt-[80px] px-4 md:px-8 lg:px-16'>
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
      <div className="max-w-[1320px] mx-auto">
        <h3 className='font-playfair text-[28px] md:text-[32px] font-semibold uppercase text-center mb-12'>
          Our Special Coffee
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {currentCoffees.map(coffee => (
            <div
              data-aos="fade-right"
              key={coffee.id}
              className='cofeeCard group bg-[#eeebe6] text-[#30261C] p-4 rounded-md overflow-hidden transform transition-transform duration-500 hover:scale-105 cursor-pointer flex flex-col justify-between relative'
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className='w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[220px] object-cover rounded-md mb-4'
              />
              <div onClick={() => addToFav(coffee)} className='absolute top-[25px] right-[30px] flex flex-col items-center'>
                <CiHeart className=' text-[40px] text-white cursor-pointer duration-300' />
                <p className='text-white font-outfit'>favourite</p>
              </div>
              <h2 className='text-[24px] md:text-[28px] font-semibold font-outfit  mb-2'>
                {coffee.name}
              </h2>
              <p className='font-outfit text-[16px] md:text-[18px] mb-4 '>
                {coffee.desc}
              </p>

              <div className='flex items-center justify-between'>
                <p className='font-outfit text-[18px] md:text-[20px] font-semibold '>
                  TK. {coffee.price}
                </p>
                <button className='bg-[#30261C] text-white py-2 px-4 md:px-5 rounded-[10px] text-[14px] md:text-[16px]'>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="py-2 px-4 border rounded disabled:opacity-40"
        >
          Previous
        </button>

        <p className="font-semibold">
          Page {currentPage} of {totalPage}
        </p>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPage}
          className="py-2 px-4 border rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SpecialCoffee
