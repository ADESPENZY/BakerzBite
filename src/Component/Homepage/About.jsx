import React from 'react'

const About = () => {
  return (
    <section className='py-16 max-w-7xl mx-auto px-5 md:px-0'>
        <h2 className='text-center text-4xl font-bold'>About Us</h2>
        <div className='flex flex-col md:flex-row gap-8 mt-10'>
            {/* First Section: Image first, then text */}
            <div className='w-1/2 space-y-8'>
                <img src="images/BakeHome.jpg" alt="" className='rounded-xl object-cover w-full h-64' />
                <div className='w-full'>
                    <h3 className="text-2xl font-semibold text-primary-light">Our Mission</h3>
                    <p className="text-md text-gray-600">
                        At Bakerz Bite, our mission is simple yet powerful: to create a world of delicious, handcrafted treats that inspire joy and bring people together. We are driven by the belief that food should not only be an experience for the taste buds but for the soul. Every cake, pastry, and cookie we make is crafted with passion, care, and the finest ingredients to ensure that every bite brings a sense of happiness.
                    </p>
                    <p className="text-md text-gray-600">
                        We strive to build relationships with our customers through trust, quality, and consistency, and we take pride in the smiles we create with every order. Whether you are celebrating a milestone or simply treating yourself, we are here to make each moment sweeter. Our mission is to continue evolving and growing while staying true to the craftsmanship and love that goes into every product we make.
                    </p>
                </div>
            </div>

            {/* Second Section: Text first, then image */}
            <div className='w-1/2 space-y-8'>
                <div className='space-y-4'>
                    <h3 className="text-2xl font-semibold text-primary-light">Our Story</h3>
                    <p className="text-md text-gray-600">
                        Our journey began with a simple dream: to create the best baked goods and bring smiles to people's faces. Starting from a small kitchen, we experimented with countless recipes, perfecting our cakes, pastries, and cookies. Over the years, our dedication to quality and flavor has earned us a loyal following, and we’ve grown from a small bakery to a beloved name in the community. But, no matter how big we get, our commitment to handmade, fresh treats remains the same.
                    </p>
                    <p className="text-md text-gray-600">
                        Today, we serve a variety of mouthwatering options, from customized cakes to delicate pastries, all made fresh daily. We are not just a bakery; we are a place where memories are created with every treat. Join us on our journey, and let us share the love of baking with you!
                    </p>
                </div>
                <img src="images/BakeHome2.jpg" alt="" className='rounded-xl object-cover w-full h-64' />
            </div>
        </div>
        <div className='text-center mt-10'>
            <button className="px-6 py-2 mt-4 bg-primary-light text-white rounded-full hover:bg-primary-dark transition">
                Learn More About Us
            </button>
        </div>        
    </section>
  )
}

export default About