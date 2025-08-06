import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle, FaTiktok, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#0D1B2A] text-gray-300 pt-16 pb-8 px-6 lg:px-8'>
            {/* brand detail  */}

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12'>
                {/* company logo and detail  */}
                <div>
                    <img src="https://i.pinimg.com/736x/fb/a2/72/fba27285d6f70e5e73a3507ca0ec42ee.jpg" alt="company logo"
                        className='w-[160px] h-[60px] mb-4 object-cover' />
                    <p className='text-sm  text-gray-400 '>Streamline your administrative tasks, access critical patient data, and enhance collaboration among your healthcare team effortlessly.</p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Service</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="" className="hover:text-[white] transition">Quick Links</a></li>
                        <li><a href="" className="hover:text-[white] transition">Home</a></li>
                        <li><a href="" className="hover:text-[white] transition">About us</a></li>
                        <li><a href="" className="hover:text-[white] transition">Services</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">Available City</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="" className="hover:text-[white] transition">Delhi</a></li>
                        <li><a href="" className="hover:text-[white] transition">Mumbai</a></li>
                        <li><a href="" className="hover:text-[white] transition">Noida</a></li>
                        <li><a href="" className="hover:text-[white] transition">Indore</a></li>
                    </ul>
                </div>
                {/* contact div  */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><span>abc123@gmail.com</span></li>
                        <li><span>+91-3456784567</span></li>
                        <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span></li>
                    </ul>
                </div>
            </div>

            {/* copy right */}
            <div className='max-w-7xl m-auto mt-4 md:flex justify-between'>
                <p>© 2025 Clinic. All rights reserved.</p>
                <p>Made with ❤️ by Webseeder Technologies</p>
            </div>
        </footer>
    )
}

export default Footer
