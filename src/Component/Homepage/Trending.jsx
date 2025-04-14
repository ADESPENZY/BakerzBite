import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ProductCard from '../ProductCard'

const Trending = () => {
  return (
    <section className='bg-black-light'>
        <div className='py-16 space-y-14 max-w-7xl mx-auto px-5 md:px-0'>
            <div>
                <h2 className='text-center text-4xl text-white font-bold mb-10'>
                    Trending Confectioneries Products
                </h2>

                <div className='px-5'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Autoplay]}
                    >
                    {[
                        {
                        title: "Custom Cakes",
                        image: "images/BakeHome2.jpg",
                        description: "Made with love and tailored to your taste. Perfect for birthdays, weddings, and celebrations."
                        },
                        {
                        title: "Fresh Pastries",
                        image: "images/BakeHome.jpg",
                        description: "Flaky, buttery pastries baked fresh every morning for your perfect start."
                        },
                        {
                        title: "Crunchy Cookies",
                        image: "images/BakeHome2.jpg",
                        description: "Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!"
                        },
                        {
                        title: "Custom Cakes",
                        image: "images/BakeHome2.jpg",
                        description: "Made with love and tailored to your taste. Perfect for birthdays, weddings, and celebrations."
                        },
                        {
                        title: "Fresh Pastries",
                        image: "images/BakeHome.jpg",
                        description: "Flaky, buttery pastries baked fresh every morning for your perfect start."
                        },
                        {
                        title: "Crunchy Cookies",
                        image: "images/BakeHome2.jpg",
                        description: "Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!"
                        }
                    ].map((product, index) => (
                        <SwiperSlide key={index}>
                        <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>

                {/* CTA Button */}
                <div className='text-center mt-5'>
                    <button className="px-6 py-2 mt-4 bg-primary-light text-white rounded-full hover:bg-primary-dark transition">
                    More Of Our Products
                    </button>
                </div>
            </div>
            
            <div className='space-y-8'>
                <h2 className='text-center text-4xl text-white font-bold '>
                    Trending Merchandise Products
                </h2>

                <div className='px-5'>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Autoplay]}
                    >
                    {[
                        {
                        title: 'Mug',
                        image: 'images/BakeHome2.jpg',
                        description:
                            'A ceramic mug perfect for your morning coffee, with our exclusive design.',
                        },
                        {
                        title: 'Apron',
                        image: 'images/BakeHome.jpg',
                        description:
                            'Stylish and durable apron for baking or any kitchen task, with a comfortable fit.',
                        },
                        {
                        title: 'Tote Bag',
                        image: 'images/BakeHome2.jpg',
                        description:
                            'Carry your essentials with our eco-friendly tote bag, designed for everyday use.',
                        },
                        {
                        title: 'Mug',
                        image: 'images/BakeHome.jpg',
                        description:
                            'A ceramic mug perfect for your morning coffee, with our exclusive design.',
                        },
                        {
                        title: 'Apron',
                        image: 'images/BakeHome2.jpg',
                        description:
                            'Stylish and durable apron for baking or any kitchen task, with a comfortable fit.',
                        },
                        {
                        title: 'Tote Bag',
                        image: 'images/BakeHome.jpg',
                        description:
                            'Carry your essentials with our eco-friendly tote bag, designed for everyday use.',
                        },
                    ].map((product, index) => (
                        <SwiperSlide key={index}>
                        <ProductCard {...product} />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>

                {/* CTA Button */}
                <div className='text-center'>
                    <button className="px-6 py-2 mt-4 bg-primary-light text-white rounded-full hover:bg-primary-dark transition">
                    More Of Our Merchandise
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Trending