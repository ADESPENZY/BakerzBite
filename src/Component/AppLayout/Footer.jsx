import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-black-light py-12 font-montserrat'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Top section */}
        <div className='flex flex-col md:flex-row md:justify-between gap-10 text-neutral'>
          <div>
            <h2 className='font-medium text-lg mb-5'>Our Services</h2>
            <ul className='space-y-3'>
              <li className='text-sm text-gray-400 hover:text-white'>Custom Websites</li>
              <li className='text-sm text-gray-400 hover:text-white'>Custom Seo-Sites</li>
              <li className='text-sm text-gray-400 hover:text-white'>Custom WebApps</li>
              <li className='text-sm text-gray-400 hover:text-white'>Custom Web-Designs</li>
            </ul>
          </div>

          <div>
            <h2 className='font-medium text-lg mb-5'>Jatotech</h2>
            <ul className='space-y-3'>
              <li className='text-sm text-gray-400 hover:text-white'>Our Works</li>
              <li className='text-sm text-gray-400 hover:text-white'>Our Team</li>
              <li className='text-sm text-gray-400 hover:text-white'>Our Customs</li>
              <li className='text-sm text-gray-400 hover:text-white'>Our Visions</li>
            </ul>
          </div>

          <div>
            <h2 className='font-medium text-lg mb-5'>Find Us</h2>
            <div className='flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0 text-sm text-gray-400 hover:text-white'>
              <div className='space-y-3'>
                <p>1740 Broadway</p>
                <p>New York City 10019, United States</p>
              </div>
              <div className='space-y-3'>
                <p>Aleja Niepodległości 36</p>
                <p>61-714 Poznań, Poland</p>
              </div>
            </div>
            <button className='bg-primary-light text-white px-4 py-2 rounded-md font-semibold mt-4'>
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className='flex flex-col sm:flex-row justify-between items-center mt-10 gap-4'>
          <div className='flex flex-col sm:flex-row sm:space-x-3 text-sm text-gray-400 text-center sm:text-left'>
            <span>&copy; 2024 Jatotech. All rights reserved.</span>
            <span>Privacy Policy</span>
          </div>

          <div className='flex space-x-4 items-center'>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="text-gray-400 font-semibold hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} className="text-gray-400 font-semibold hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="text-gray-400 font-semibold hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="text-gray-400 font-semibold hover:scale-110 transition-transform" />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="text-gray-400 font-semibold hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
