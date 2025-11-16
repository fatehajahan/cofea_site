import React from 'react'
import Header from './Header'
import Banner from './Banner'
import CoffeeTheme from './CoffeeTheme'
import SpecialCoffee from './SpecialCoffee'
import CoffeeBeans from './CoffeeBeans'

const Home = () => {
    return (
        <div>
            {/* Hero wrapper */}
            <div className="relative h-[450px] md:h-[65 0px] lg:h-[750px]">
                <Header />
                <Banner /> {/* absolute */}
            </div>

            {/* Rest of content appears below banner */}
            <CoffeeTheme />
            <SpecialCoffee />
            <CoffeeBeans />
        </div>
    )
}

export default Home
