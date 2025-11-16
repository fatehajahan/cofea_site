import React from 'react'
import Header from './Header'
import Banner from './Banner'
import CoffeeTheme from './CoffeeTheme'

const Home = () => {
    return (
        <div>
            {/* Hero wrapper */}
            <div className="relative h-[700px] md:h-[800px] lg:h-[750px]">
                <Header />
                <Banner /> {/* absolute */}
            </div>

            {/* Rest of content appears below banner */}
            <CoffeeTheme />
        </div>
    )
}

export default Home
