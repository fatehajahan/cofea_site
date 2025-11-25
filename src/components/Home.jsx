import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import CoffeeTheme from './CoffeeTheme'
import SpecialCoffee from './SpecialCoffee'
import CoffeeBeans from './CoffeeBeans'
import Reviewpg from './Reviewpg'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Conatct from './Conatct'
import { CiCircleChevUp } from 'react-icons/ci'
import { Bounce, ToastContainer } from 'react-toastify'

const Home = () => {
    const [setHeaderActive, setSetHeaderActive] = useState(null);

    return (
        <div>
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
            {/* Hero wrapper */}
            <div className="relative h-[450px] md:h-[650px] lg:h-[750px]">
                <Header setActiveFromTop={setSetHeaderActive} />
                <div id="home">
                    <Banner />
                </div>
            </div>

            {/* Rest of content appears below banner */}
            <CoffeeTheme />
            <div id="coffee">
                <SpecialCoffee />
            </div>
            <CoffeeBeans />
            <div id="review">
                <Reviewpg />
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="contact">
                <Conatct />
            </div>
            <Footer />
            <CiCircleChevUp
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    if (setHeaderActive) setHeaderActive('Home');
                }}
                id='top' className="fixed bottom-6 right-6 z-50 text-white bg-[#895017] p-2 rounded-full text-[45px] cursor-pointer shadow-lg" />
        </div>
    )
}

export default Home
