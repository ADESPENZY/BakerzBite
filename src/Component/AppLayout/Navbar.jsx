import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, ShoppingCart, Heart, Cake } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Ticker from "../Ticker";
import { useCart } from "@/context/CartContext";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
        name: "Our Products", 
        path: "/product",
        subLinks: [
          { name: "Confectionaries", path: "/product/confectionaries" },
          { name: "Merchandise", path: "/product/merchandise" }
        ]
      },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Faq's", path: "/faq" }
  ];

  return (
    <nav className={`font-heading sticky top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'shadow-lg' : ''}`}>
        {/* Top banner with features */}
        <section className="hidden md:block">
            <Ticker/>
        </section>
      
        {/* Main navbar */}
        <div className={`bg-white py-3 transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            <Cake size={28} className="text-primary-light" />
                            <h2 className="text-2xl font-bold text-black tracking-wide">
                                <span className="text-primary-light">Bakerz</span>Bite
                            </h2>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                        <div key={index} className="relative group">
                            {link.subLinks ? (
                            // Disable main link if subLinks exist
                            <span className="cursor-default font-medium hover:text-primary-light transition-colors">
                                {link.name}
                            </span>
                            ) : (
                            // Otherwise, allow normal NavLink
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                `font-medium hover:text-primary-light transition-colors ${
                                    isActive ? "text-primary-light font-semibold" : "font-medium"
                                }`
                                }
                            >
                                {link.name}
                            </NavLink>
                            )}

                            {link.subLinks && (
                            <div className="absolute left-0 mt-2 bg-white border shadow-md rounded-lg w-48 hidden group-hover:block z-50">
                                {link.subLinks.map((sub, subIndex) => (
                                <NavLink
                                    key={subIndex}
                                    to={sub.path}
                                    className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-white transition-colors"
                                >
                                    {sub.name}
                                </NavLink>
                                ))}
                            </div>
                            )}
                        </div>
                        ))}

                    </div>
                    
                    {/* Contact & Address - Desktop */}
                    <div className="hidden lg:flex items-center space-x-6">
                    <div className="flex items-center space-x-6 text-sm">
                        <Link to="/cart">
                        <ShoppingCart className="w-6 h-6 text-darkPurple" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                            {cartItems.length}
                            </span>
                        )}
                        </Link>

                        {/* Wishlist */}
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-primary">
                            <Heart size={20} className="text-pink-500" />
                            <span>Wishlist</span>
                        </div>

                        {/* Contact Us */}
                        <div className="flex items-center space-x-2">
                            <Phone size={20} className="text-primary" />
                            <a
                            href="https://wa.me/2349128721745"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary font-medium"
                            >
                            +234 912 872 1745
                            </a>
                        </div>
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                    className="md:hidden text-customDark focus:outline-none" 
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                    {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
            <div className="md:hidden bg-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link, index) => (
                            <NavLink 
                            key={index}
                            to={link.path}
                            onClick={() => setShowMobileMenu(false)}
                            className={({ isActive }) => 
                                `text-sm font-medium py-2 border-b border-customDark ${
                                isActive ? "text-darkPurple" : "text-customDark"
                                }`
                            }
                            >
                            {link.name}
                            </NavLink>
                        ))}
                    
                        <div className="pt-4 flex flex-col space-y-3">
                        <Link to="/cart">
                            <ShoppingCart className="w-6 h-6 text-darkPurple" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                                {cartItems.length}
                            </span>
                            )}
                            </Link>

                            <div className="flex items-center space-x-2">
                            <Phone className="text-darkPurple" size={18} />
                            <a href="https://wa.me/2349128721745" className="text-sm">+234 912 872 1745</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </nav>
  );
};

export default NavBar;