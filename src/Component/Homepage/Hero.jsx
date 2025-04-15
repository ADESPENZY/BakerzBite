import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section >
        <div className="relative max-w-[90%] ml-auto flex h-[60vh]">
            {/* ✨ Text Content */}
            <div className="w-1/3 z-10 flex flex-col justify-center space-y-5 px-6">
                <h3 className="text-md font-semibold text-primary-light tracking-wide uppercase">
                Freshly Baked For You
                </h3>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Handcrafted Goodness, Daily Delights 🍰
                </h2>
                <p className="text-md text-gray-600">
                At <span className="font-semibold text-primary-light">Bakerz Bite</span>, we blend tradition and taste to serve you
                warm pastries, crunchy cookies, and divine cakes — baked fresh, every single day.
                </p>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 pt-2">
                    <Link to='/product/confectionaries'>
                        <button className="bg-primary-light text-white px-5 py-2 rounded-full hover:bg-primary-dark transition duration-300">
                        Explore Menu
                        </button>
                    </Link>

                    <a
                        href="https://calendly.com/atoyebijoshua095?hide_gdpr_banner=1"
                        className="bg-primary-light lg:w-fit w-full text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-dark hover:border-none hover:text-white text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book A Tasting
                    </a>
                </div>

            </div>

            {/* 📸 Image Side */}
            <div className="w-2/3 h-full relative">
                <img
                src="/images/BakeHome2.jpg"
                alt="Hero Image"
                className="w-full h-full object-cover"
                />
                
                {/* 💨 Left Blur (30% of image) */}
                <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white via-white/70 to-transparent z-0" />
            </div>
        </div>

    </section>
  )
}

export default Hero