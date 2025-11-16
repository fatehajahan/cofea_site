import React from 'react'
import coffeetheme from '../assets/belowBan.png'

const CoffeeTheme = () => {
  return (
    <div className='bg-[#E2D9C8] py-[30px] lg:block md:hidden hidden'>
        <img src={coffeetheme} alt="" className='w-[550px] mx-auto'/>
    </div>
  )
}

export default CoffeeTheme