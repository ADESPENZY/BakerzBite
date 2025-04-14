import React from 'react'
import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    title: "Customers Support",
    name: "JahGrant Aiyedun",
    image: "/images/BakeHome2.jpg",
    review:
      "Absolutely delicious! The pastries are fresh and flavorful — my whole family loves them!",
  },
  {
    title: "Customers Support",
    name: "Teni Olayemi",
    image: "/images/BakeHome.jpg",
    review:
      "Customer service was top-notch. They handled my special order with care and it turned out amazing!",
  },
  {
    title: "Customers Support",
    name: "Michael Adeyemi",
    image: "/images/BakeHome2.jpg",
    review:
      "Great packaging, prompt delivery, and the best cookies I’ve ever had. Highly recommend!",
  },
  {
    title: "Customers Support",
    name: "Bola Johnson",
    image: "/images/BakeHome.jpg",
    review:
      "I keep coming back for the custom cakes. They never miss — both in look and taste!",
  },
  {
    title: "Customers Support",
    name: "Chisom Eze",
    image: "/images/BakeHome2.jpg",
    review:
      "Support was quick to respond to my query. They made me feel like a valued customer.",
  },
  {
    title: "Customers Support",
    name: "Daniel Okon",
    image: "/images/BakeHome.jpg",
    review:
      "The attention to detail in both service and taste is unmatched. I’m a loyal fan now.",
  },
]

const Testimonial = () => {
  return (
    <section className="bg-secondary-light py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-16 h-16 object-cover border-2 border-white shadow"
                />
                <h3 className="text-lg font-bold">{testimonial.title}</h3>
                <p className="text-sm text-gray-600 italic">"{testimonial.review}"</p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
