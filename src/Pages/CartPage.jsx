import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl font-body">
      <h2 className="text-4xl font-bold mb-10 text-center text-darkPurple">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          <p>No items in cart.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-xl font-semibold text-darkPurple">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.description?.slice(0, 60)}...</p>
                  <p className="mt-2 text-lg font-bold text-primary-light">₦{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-red-500 hover:text-red-700 transition text-sm font-medium"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
