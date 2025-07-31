import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/50' 
        : 'bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 shadow-xl border-b border-teal-700/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center group relative">
            <div className="w-12 h-12 mr-3 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="/images/tbz logo 2.png"
                alt="TBW Global Logo"
                className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10"
              />
            </div>
            <div className="relative">
              <span className={`font-bold text-2xl tracking-wide transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-800 group-hover:text-teal-600' 
                  : 'text-white group-hover:text-teal-300'
              }`}>
                Trade Biz Worldwide
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map(({ name, path }, idx) => (
              <Link
                key={idx}
                to={path}
                className={`relative px-4 py-2 font-medium tracking-wide transition-all duration-300 text-lg group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-teal-600' 
                    : 'text-white hover:text-teal-200'
                }`}
              >
                <span className="relative z-10">{name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}

            <div className="ml-4">
              <Link
                to="/quote"
                className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-3 rounded-lg transition-all duration-300 focus:outline-none ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 transform transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    className="animate-pulse"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 transform ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}
      >
        <div className={`px-6 py-8 space-y-4 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-t border-gray-200/50' 
            : 'bg-gradient-to-b from-teal-900 to-teal-800 border-t border-teal-700/50'
        }`}>
          {navLinks.map(({ name, path }, idx) => (
            <Link
              key={idx}
              to={path}
              onClick={toggleMenu}
              className={`block text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                scrolled 
                  ? 'text-gray-700 hover:text-teal-600 hover:bg-teal-50' 
                  : 'text-white hover:text-teal-200 hover:bg-white/10'
              }`}
              style={{
                animationDelay: `${idx * 100}ms`,
                animation: isOpen ? 'slideInUp 0.5s ease-out forwards' : 'none'
              }}
            >
              {name}
            </Link>
          ))}

          <div className="pt-4">
            <Link
              to="/quote"
              onClick={toggleMenu}
              className="block mx-auto w-fit bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{
                animationDelay: `${navLinks.length * 100}ms`,
                animation: isOpen ? 'slideInUp 0.5s ease-out forwards' : 'none'
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;