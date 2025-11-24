import React from 'react';

const Contact = () => {
    return (
        <section className="contactDiv py-[80px] bg-[#f7f3ef] font-outfit">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-2 text-[#30261C]">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 text-[15px] sm:text-[16px]">
                        Visit us or get in touch! We’re here to serve the best coffee in town.
                    </p>
                </div>

                {/* layout for map*/}
                <div className="flex flex-col lg:flex-row gap-10 items-center">

                    {/* Map */}
                    <div className="lg:w-2/3 w-full h-[400px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.1114964568656!2d90.42149762965434!3d23.751655792384938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84ef83f14cd%3A0xd149c9c39897a2f!2sApon%20Coffee%20House!5e0!3m2!1sen!2sbd!4v1763314341185!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-xl shadow-md"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:w-1/3 w-full flex flex-col justify-start gap-6">
                        {/* Address */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-[#30261C]">Location</h3>
                            <p className="text-gray-700">
                                123 Coffee Street, Banani, Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* Hours */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-[#30261C]">Business Hours</h3>
                            <ul className="text-gray-700 space-y-1">
                                <li>Monday – Friday: 8:00 AM – 8:00 PM</li>
                                <li>Saturday: 9:00 AM – 6:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-[#30261C]">Get in Touch</h3>
                            <p className="text-gray-700">Phone: +880 123 456 789</p>
                            <p className="text-gray-700">Email: info@coffeeshop.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
