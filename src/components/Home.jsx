import React from 'react'
import Header from './Header'
import Banner from './Banner'
import CoffeeTheme from './CoffeeTheme'
import SpecialCoffee from './SpecialCoffee'
import CoffeeBeans from './CoffeeBeans'
import Reviewpg from './Reviewpg'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            {/* Hero wrapper */}
            <div className="relative h-[450px] md:h-[650px] lg:h-[750px]">
                <Header />
                <Banner /> {/* absolute */}
            </div>

            {/* Rest of content appears below banner */}
            <CoffeeTheme />
            <SpecialCoffee />
            <CoffeeBeans />
            <Reviewpg />
            <Footer />
        </div>
    )
}

export default Home
