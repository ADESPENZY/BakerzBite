import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import AboutCard from '../Data/AboutCard.json'

const About = () => {
  return (
    <section className='font-body'>
      <div className="relative">
        {/* 📸 Background Image */}
        <img
          src="/images/BakeHome2.jpg"
          alt="BakerzBite Banner"
          className="w-full h-[60vh] object-cover"
        />

        {/* 🟣 Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* 📝 Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 text-center px-6">
          <h2 className='text-4xl font-bold text-primary-light'>About Us</h2>
          <p className="max-w-xl text-center text-md text-secondary-light">
            At BakerzBite, we blend passion with precision to serve joy in every bite. From fresh ingredients to delightful creations, we bake memories daily.
          </p>
        </div>
      </div>

      <section className='bg-secondary-light pb-12 px-5'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <div className='flex items-center md:justify-start justify-center gap-2 -mt-28'>
            <img src="images/BakeHome2.jpg" alt="About image 1" className='w-80 h-64 object-cover rounded-2xl z-10' />
            <img src="images/cake9.jpg" alt="About Image 2" className='w-80 h-52 hidden md:block object-cover rounded-2xl z-10' />
            <img src="images/drink3.jpg" alt="About Image 3" className='w-80 h-64 hidden md:block object-cover rounded-2xl z-10' />
            <img src="images/mug3.jpg" alt="About Image 4" className='w-80 h-52 hidden md:block object-cover rounded-2xl z-10' />
          </div>

          <div className='space-y-6'>
            <h2 className='text-3xl font-medium tracking-wider leading-normal max-w-xl'>
              Crafting Baked Goodness That Warms the Heart
            </h2>
            <div className='flex flex-col items-center md:flex-row gap-24'>
              <p className='text-secondary-dark tracking-wider text-md max-w-lg'>
                BakerzBite started with a simple belief — that the perfect slice of cake or the aroma of warm bread can turn an ordinary moment into something magical. We pour love into every recipe, ensuring that each treat brings comfort, joy, and unforgettable taste.
              </p>
              <p className='text-secondary-dark tracking-wider text-md max-w-lg'>
                Our team of passionate bakers and creatives combine classic techniques with a flair for innovation. Whether it’s your morning pastry or a custom celebration cake, we aim to make each bite a beautiful memory worth sharing.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-24'>
            <div className='md:w-5/12'>
              <img src="/images/bread7.jpg" alt="" className='w-full h-96 object-cover rounded-2xl' />
            </div>
            <div className='max-w-xl space-y-5'>
              <h2 className='text-3xl tracking-wider leading-normal font-medium '>
                Why We Bake
              </h2>
              <div className='text-secondary-dark tracking-wider text-md max-w-lg space-y-5'>
                <p>We believe in the joy of shared moments and the power of delicious food to bring people together. Every cookie, cake, or croissant we make is baked to spark happiness and connection.</p>
                <p className='text-black border-l-2 border-primary-light pl-2'>Whether you're celebrating something special or just treating yourself, BakerzBite is here to make it a little sweeter. Our mission is simple: deliver delightful experiences, one bite at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-12 px-5'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <div className='space-y-5'>
            <h2 className='text-4xl font-bold text-primary-light text-center'>Our Team</h2>
            <p className='text-black-light text-center'>
              Meet the warm-hearted bakers, decorators, and food lovers behind BakerzBite’s oven doors.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {AboutCard.map((member, index) => (
              <div key={index} className='bg-secondary-light rounded-xl'>
                <img src={member.image} alt={member.name} className='h-56 w-full object-cover rounded-xl' />
                <div className='m-3 space-y-4'>
                  <div className='bg-primary-light rounded-xl text-center space-y-1 py-3 px-5'>
                    <h2 className='text-lg font-semibold'>{member.name}</h2>
                    <h3 className='font-medium'>{member.role}</h3>
                  </div>
                  <div className="flex space-x-4">
                    {member.socials.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-light p-3">
                        <Facebook className="text-white w-5 h-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-light p-3">
                        <Twitter className="text-white w-5 h-5" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-light p-3">
                        <Instagram className="text-white w-5 h-5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-light p-3">
                        <Linkedin className="text-white w-5 h-5" />
                      </a>
                    )}
                    {member.socials.youtube && (
                      <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-light p-3">
                        <Youtube className="text-white w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className='text-center text-md'>BakerzBite Family</h3>
        </div>
      </section>
    </section>
  )
}

export default About
