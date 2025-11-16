import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#30261C] text-white py-[80px]">
            <div className="container mx-auto px-4">

                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <img src={logo} alt="logo" className="w-[120px]" />
                </div>

                {/* Footer Menu Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-[15px]">

                    {/* Column 1 */}
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]">Coffee</h3>
                        <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                            <li>Shop</li>
                            <li>Menu</li>
                            <li>Order ahead</li>
                            <li>Find a location</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]">Privacy</h3>
                        <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Cookies</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div >
                        <h3 className="font-semibold mb-4 text-[17px]">Services</h3>
                        <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                            <li>Plans & pricing</li>
                            <li>Sell your products</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]">About Us</h3>
                        <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                            <li>Our story</li>
                            <li>Jobs</li>
                            <li>Information</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]">Social Media</h3>
                        <ul className="space-y-2 opacity-80 hover:opacity-100 transition">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12 opacity-70 text-[14px]">
                    © 2025 <span className='font-bold'>Coffee Company</span>  — All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
