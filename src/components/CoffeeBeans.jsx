import React from 'react'
import bgBean from '../assets/coffeebean.png' // your image path

const CoffeeBeans = () => {
    return (
        <div
            className="w-full min-h-[450px] md:min-h-[650px] lg:min-h-[750px] flex items-center justify-center bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${bgBean})` }}
        >
            <div className="container text-center">
                <div>
                    <h2 className='font-playfair text-[40px] font-semibold w-[380px] mx-auto'>
                        Check Out Our Best Coffee Beans
                    </h2>

                    <button className='bg-[#30261C] text-white py-[15px] w-[250px] rounded-full mt-[20px] hover:bg-transparent border border-[#30261C]  hover:text-black transition duration-500 cursor-pointer font-semibold'>
                        Explore Out Products
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeBeans
