import React from 'react'
import Hero from '../Component/Homepage/Hero'
import Delight from '../Component/Homepage/Delight'
import About from '../Component/Homepage/About'
import Trending from '../Component/Homepage/Trending'
import OurOffer from '../Component/Homepage/OurOffer'
import Testimonial from '../Component/Homepage/Testimonial'
import Faq from '../Component/Homepage/Faq'
import Cta from '../Component/Homepage/Cta'

const Homepage = () => {
  return (
    <section className='font-body'>
        <Hero />
        <Delight />
        <About />
        <Trending />
        <OurOffer />
        <Testimonial />
        <Faq />
        <Cta />
    </section>
  )
}

export default Homepage