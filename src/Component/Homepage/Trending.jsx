import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BakerzCard from '@/Pages/BakerzCard';
import ProductModal from '../ProductModal';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';


const Trending = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addingToCart } = useCart();
  

  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = () => {
    if (!selectedProduct) return;
  
    addingToCart({
      ...selectedProduct,
      id: selectedProduct.title.replace(/\s+/g, '-').toLowerCase() + '-' + Math.random().toString(36).substring(7), // Generate a quick unique ID
    });
  
    toast.success(`${selectedProduct.title} added to cart! 🛒`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  
    closeModal();
  };

  const confectioneryProducts = [
    {
      title: "Custom Cakes",
      image: "images/BakeHome2.jpg",
      description: "Made with love and tailored to your taste. Perfect for birthdays, weddings, and celebrations.",
      price: "5500"
    },
    {
      title: "Fresh Pastries",
      image: "images/BakeHome.jpg",
      description: "Flaky, buttery pastries baked fresh every morning for your perfect start.",
      price: "5500"
    },
    {
      title: "Iced Tea",
      image: "/images/drink7.jpg",
      description: "Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!",
      price: "5500"
    },
    {
      title: "Sausage Roll",
      image: "/images/snack2.jpg",
      description: "Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!",
      price: "5500"
    },
    {
      title: "Crunchy Cookies",
      image: "images/BakeHome2.jpg",
      description: "Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!",
      price: "5500"
    },
    {
      title: "Wedding Cake",
      image: "/images/special1.jpg",
      description: "Classic and chocolatey — a cookie lover’s dream. Grab a bite or a dozen!",
      price: "5500"
    },
    // repeat or add more items
  ];

  const merchandiseProducts = [
    {
      title: 'Mug',
      image: '/images/mug1.jpg',
      description: 'A ceramic mug perfect for your morning coffee, with our exclusive design.',
      price: "5500"
    },
    {
      title: 'Apron',
      image: 'images/apron1.jpg',
      description: 'Stylish and durable apron for baking or any kitchen task, with a comfortable fit.',
      price: "5500"
    },
    {
      title: 'Tote Bag',
      image: 'images/tote3.jpg',
      description: 'Carry your essentials with our eco-friendly tote bag, designed for everyday use.',
      price: "5500"
    },
    {
      title: 'Bake Mode Tee',
      image: 'images/shirt2.jpg',
      description: 'Carry your essentials with our eco-friendly tote bag, designed for everyday use.',
      price: "5500"
    },
    {
      title: 'Silicone Spatula Set',
      image: 'images/tool1.jpg',
      description: 'Carry your essentials with our eco-friendly tote bag, designed for everyday use.',
      price: "5500"
    },
    {
      title: 'Tote Bag',
      image: 'images/tote3.jpg',
      description: 'Carry your essentials with our eco-friendly tote bag, designed for everyday use.',
      price: "5500"
    },
    
  ];

  return (
    <section className='bg-black-light relative'>
      <div className='py-16 space-y-14 max-w-7xl mx-auto px-5 md:px-0'>
        {/* Confectionery Section */}
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
              {confectioneryProducts.map((product, index) => (
                <SwiperSlide key={index}>
                  <BakerzCard {...product} onViewMore={() => handleViewMore(product)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='text-center mt-5'>
            <Link to='/product/confectionaries'>
                <button className="px-6 py-2 mt-4 bg-primary-light text-white rounded-full hover:bg-primary-dark transition">
                    More Of Our Products
                </button>
            </Link>
          </div>
        </div>

        {/* Merchandise Section */}
        <div className='space-y-8'>
          <h2 className='text-center text-4xl text-white font-bold'>
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
              {merchandiseProducts.map((product, index) => (
                <SwiperSlide key={index}>
                  <BakerzCard {...product} onViewMore={() => handleViewMore(product)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='text-center'>
            <Link to='/product/merchandise'>
            <button className="px-6 py-2 mt-4 bg-primary-light text-white rounded-full hover:bg-primary-dark transition">
              More Of Our Merchandise
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
        onAddToCart={addToCart}
      />
    </section>
  );
};

export default Trending;
