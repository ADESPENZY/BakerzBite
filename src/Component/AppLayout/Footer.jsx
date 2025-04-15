import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#2a1d14] py-12 font-montserrat text-neutral'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Top section */}
        <div className='flex flex-col md:flex-row md:justify-between gap-10'>
          {/* Services */}
          <div>
            <h2 className='font-semibold text-lg mb-5 text-white'>Our Treats</h2>
            <ul className='space-y-3'>
              <Link to='/product/confectionaries'>
              <li className='text-sm text-gray-400 hover:text-white'>Custom Cakes</li>
              </Link>
              <Link to='/product/confectionaries'>
              <li className='text-sm text-gray-400 hover:text-white'>Fresh Pastries</li>
              </Link>
              <Link to='/product/confectionaries'>
              <li className='text-sm text-gray-400 hover:text-white'>Crunchy Cookies</li>
              </Link>
              <Link to='/product/confectionaries'>
              <li className='text-sm text-gray-400 hover:text-white'>Seasonal Specials</li>
              </Link>
            </ul>
          </div>

          {/* About */}
          <div>
            <h2 className='font-semibold text-lg mb-5 text-white'>BakerzBite</h2>
            <ul className='space-y-3'>
              <Link to='/about'>
              <li className='text-sm text-gray-400 hover:text-white'>About Us</li>
              </Link>
              <li className='text-sm text-gray-400 hover:text-white'>About Us</li>
              <li className='text-sm text-gray-400 hover:text-white'>Our Bakers</li>
              <li className='text-sm text-gray-400 hover:text-white'>Testimonials</li>
              <li className='text-sm text-gray-400 hover:text-white'>FAQ</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className='font-semibold text-lg mb-5 text-white'>Find Us</h2>
            <div className='flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0 text-sm text-gray-400'>
              <div className='space-y-3'>
                <p>123 Sweet Tooth Lane</p>
                <p>Bakerville, CA 90210</p>
              </div>
              <div className='space-y-3'>
                <p>15 Croissant Crescent</p>
                <p>Pastrytown, UK</p>
              </div>
            </div>
            <Link to='/contact'>
            <button className='bg-primary-light text-white px-4 py-2 rounded-md font-semibold mt-4'>
              Get in Touch
            </button>
            </Link>
            
          </div>
        </div>

        {/* Bottom section */}
        <div className='flex flex-col sm:flex-row justify-between items-center mt-10 gap-4'>
          <div className='flex flex-col sm:flex-row sm:space-x-3 text-sm text-gray-400 text-center sm:text-left'>
            <span>&copy; 2024 BakerzBite. All rights reserved.</span>
            <span className='hover:text-white cursor-pointer'>Privacy Policy</span>
          </div>

          <div className='flex space-x-4 items-center'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="text-gray-400 hover:text-white hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
