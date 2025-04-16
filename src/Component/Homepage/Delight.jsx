import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BakerzCard from '@/Pages/BakerzCard'
import ProductModal from '../ProductModal'
import { useCart } from '@/context/CartContext'

const Delight = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct)
    toast.success(`${selectedProduct.title} added to cart! 🛒`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    closeModal()
  }

  const products = [
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
      title: "Crunchy Cookies",
      image: "images/BakeHome2.jpg",
      description: "Classic and chocolatey — a cookie lover's dream. Grab a bite or a dozen!",
      price: "5500"
    }
  ]

  return (
    <section className='bg-secondary-light py-16'>
      <div className='max-w-7xl mx-auto px-5 md:px-0'>
        <h2 className='text-center text-4xl font-bold'>Delight In Every Bite</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {products.map((product, index) => (
            <BakerzCard
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              onViewMore={() => openModal(product)}
            />
          ))}
        </div>

        {/* Product Modal */}
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      </div>
    </section>
  )
}

export default Delight
