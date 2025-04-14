const BakerzCard = ({ title, image, description, onViewMore }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition duration-300 hover:scale-105"
        />
        <div className="p-5 space-y-3">
          <h3 className="text-lg md:text-xl font-bold text-primary-light">{title}</h3>
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
          <button
            onClick={onViewMore}
            className="inline-block px-5 py-2 bg-primary-light text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-all duration-300"
          >
            View More
          </button>
        </div>
      </div>
    );
  };
  
  export default BakerzCard;
  