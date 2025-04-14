const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
          <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-xl mb-4" />
          <h2 className="text-xl font-semibold text-primary-dark mb-2">{product.title}</h2>
          <p className="text-sm text-gray-700 mb-4">{product.description}</p>
          <button
            onClick={onAddToCart}
            className="w-full py-2 px-4 bg-primary-light text-white rounded-full hover:bg-primary-dark transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductModal;
  