import React from 'react'

const CoffeeBeans = () => {
    return (
        <div
            className="bg-bean w-full min-h-[550px] hidden hidden lg:flex items-center justify-center bg-no-repeat bg-center bg-contain px-4 md:px-8 lg:px-16"
        >
            <div className="container text-center">
                <div>
                    <h2 className='font-playfair font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto w-[450px]'>
                        Check Out Our Best Coffee Beans
                    </h2>

                    <button className='bg-[#30261C] text-white py-2 sm:py-3 md:py-4 w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px] rounded-full mt-5 sm:mt-6 md:mt-8 hover:bg-transparent border border-[#30261C] hover:text-black transition duration-500 cursor-pointer font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]'>
                        Explore Our Products
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeBeans
