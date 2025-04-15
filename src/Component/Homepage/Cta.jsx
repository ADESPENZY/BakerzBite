import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className=' border-black-light border-2 rounded-t-[70px] font-montserrat p-5'>
      <div className='max-w-7xl mx-auto pt-20 pb-20 space-y-10'>
        <h3 className='text-sm'>Craving Something Sweet?</h3>
        <h1 className="text-5xl font-medium tracking-wider mt-2 leading-relaxed max-w-md">
          Treat Yourself to Our Irresistible Cookies & Cakes
        </h1>
        <div className='flex flex-col md:flex-row gap-5 md:items-center'>
          <Link to='/custom-order'>
            <button className='bg-primary-light text-xl w-full md:w-fit font-medium px-5 py-3 rounded hover:bg-primary-dark'>
              Explore Our Menu
            </button>
          </Link>
          <Link
            to="/custom-order"
            className="border border-primary-light w-full text-center md:text-start md:w-fit text-xl font-medium px-5 py-3 rounded hover:bg-primary-dark"
          >
            Place a Custom Order
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
