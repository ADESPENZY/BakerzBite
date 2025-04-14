import React from 'react'
import ProductCard from '../ProductCard'

const Delight = () => {
  return (
    <section className='bg-secondary-light py-16'>
      <div className='max-w-7xl mx-auto px-5 md:px-0'>
        <h2 className='text-center text-4xl font-bold'>Delight In Every Bite</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            <ProductCard
            title="Custom Cakes"
            image="images/BakeHome2.jpg"
            description="Made with love and tailored to your taste. Perfect for birthdays, weddings, and celebrations."
          />
          <ProductCard
            title="Fresh Pastries"
            image="images/BakeHome.jpg"
            description="Flaky, buttery pastries baked fresh every morning for your perfect start."
          />
          <ProductCard
            title="Crunchy Cookies"
            image="images/BakeHome2.jpg"
            description="Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!"
          />
        </div>

      </div>
    </section>
  )
}

export default Delight