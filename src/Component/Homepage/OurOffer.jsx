import React from 'react'
import { Truck, Undo2, Headset, Lock } from "lucide-react";

const OurOffer = () => {
  return (
    <section className='pb-16'>
        <div className="relative">
            {/* 📸 Background Image */}
            <img
            src="/images/BakeHome2.jpg"
            alt="Our Offer Background"
            className="w-full h-[40vh] object-cover"
            />

            {/* 🟣 Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* 📝 Centered Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 text-center px-6">
                <h2 className="text-4xl font-bold text-primary-light uppercase tracking-wide">
                    What We Offer
                </h2>
                <p className="max-w-2xl text-lg text-secondary-light">
                    Discover a delightful collection of artisanal treats and handcrafted merchandise designed to elevate every moment. From mouth-watering baked goods to stylish, functional keepsakes — we bring quality, creativity, and care in every product.
                </p>
                <div className="mt-4">
                    <a
                    href="#shop"
                    className="px-6 py-3 bg-primary-light text-white font-semibold rounded-full hover:bg-primary-dark transition"
                    >
                    Explore Our Products
                    </a>
                </div>
            </div>
        </div>
        {/* 🔹 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 pt-10 bg-white text-center">
            {/* Free Delivery */}
            <div className="flex flex-col items-center space-y-2">
            <Truck className="text-primary-light w-8 h-8" />
            <h4 className="text-lg font-semibold">Free Delivery</h4>
            <p className="text-sm text-gray-600">Enjoy fast, free delivery on all local orders.</p>
            </div>

            {/* Return & Refund */}
            <div className="flex flex-col items-center space-y-2">
            <Undo2 className="text-primary-light w-8 h-8" />
            <h4 className="text-lg font-semibold">Easy Returns</h4>
            <p className="text-sm text-gray-600">Not satisfied? Hassle-free returns and refunds.</p>
            </div>

            {/* Quality Support */}
            <div className="flex flex-col items-center space-y-2">
            <Headset className="text-primary-light w-8 h-8" />
            <h4 className="text-lg font-semibold">24/7 Support</h4>
            <p className="text-sm text-gray-600">We’re always here to help — day or night.</p>
            </div>

            {/* Secure Payment */}
            <div className="flex flex-col items-center space-y-2">
            <Lock className="text-primary-light w-8 h-8" />
            <h4 className="text-lg font-semibold">Secure Payment</h4>
            <p className="text-sm text-gray-600">Shop confidently with end-to-end encrypted checkout.</p>
            </div>
        </div>
    </section>

  )
}

export default OurOffer