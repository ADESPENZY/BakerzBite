import React, { useState } from 'react'
import { Search } from 'lucide-react'
import bakerzItems from '../Data/bakerzData'
import BakerzCard from './BakerzCard'
import ProductModal from '../Component/ProductModal'
import { toast } from 'react-toastify';

const Confectionaries = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null); // 👈 for modal
  
    const categories = ['All', 'Cakes', 'Pastries', 'Bread', 'Drinks', 'Snacks', 'Special Orders'];
  
    let filteredData = bakerzItems
      .filter(item =>
        activeCategory === 'All' ? true : item.category === activeCategory
      )
      .filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
    if (activeCategory !== 'All') {
      filteredData = filteredData.slice(0, 9);
    }
  
    const handleAddToCart = () => {
        toast.success('Item added to cart!');
      };

  return (
    <div className="font-body pb-16">
      {/* Banner */}
      <div className="relative">
        <img
          src="/images/BakeHome.jpg"
          alt="Bakery Banner"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#3e1f47]/60 rounded-t-2xl"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Explore Our Delicious Collection</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl">
            Freshly baked delights for every craving. Handcrafted with love, daily.
          </p>
          <button className="mt-6 bg-white text-xl text-primary-light font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            ORDER NOW
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-bold my-10 text-center text-darkPurple">Bakery Menu</h2>

      {/* Filters */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center px-10 pb-5">
        {/* Search */}
        <div className="flex items-center border border-customDark rounded-md px-3 py-2 w-full max-w-56">
          <input
            type="text"
            placeholder="Search treats..."
            className="flex-grow outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-5 h-5" />
        </div>

        {/* Categories */}
        <ul className="flex items-center space-x-4 bg-[#f9f9f9] p-4 rounded-md overflow-x-auto">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer px-3 py-1 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary-light text-white'
                  : 'text-primary-light hover:bg-purple-100 hover:text-darkPurple'
              }`}
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Sort (optional) */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            id="sort"
            name="sort"
            className="border border-gray-300 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-darkPurple"
          >
            <option value="name">Name</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      {/* Products */}
      {filteredData.length > 0 ? (
        <div className="mt-8 max-w-7xl mx-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map(item => (
            <BakerzCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              onViewMore={() => setSelectedProduct(item)} // 👈 pass modal handler
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 space-y-6">
          <img src="/images/no-products.png" alt="Not Found" className="w-60 h-60 object-contain" />
          <p className="text-lg text-gray-600">
            No items found for <span className="font-semibold">{activeCategory}</span>.
          </p>
        </div>
      )}

      {/* Modal */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default Confectionaries
