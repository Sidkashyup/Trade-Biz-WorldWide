import React, { useState, useEffect } from 'react';

export default function Products() {
  const [emailForm, setEmailForm] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productsData = [
    { id: 1, name: "Industrial Item", image: "/images/1.png", category: "Manufacturing", description: "Essential industrial components" },
    { id: 2, name: "Safety Items", image: "/images/2.png", category: "Safety", description: "Protective equipment & gear" },
    { id: 3, name: "Packaging Materials", image: "/images/3.png", category: "Packaging", description: "Durable packaging solutions" },
    { id: 4, name: "Generator Spares", image: "/images/4.png", category: "Power", description: "Generator parts & components" },
    { id: 5, name: "Industrial Papers", image: "/images/5.png", category: "Materials", description: "Specialized industrial papers" },
    { id: 6, name: "Machinery and Tools", image: "/images/6.png", category: "Equipment", description: "Professional tools & machinery" },
    { id: 7, name: "Boiler Spares", image: "/images/7.png", category: "Power", description: "Boiler parts & accessories" },
    { id: 8, name: "MS & SS Fabrication", image: "/images/8.png", category: "Fabrication", description: "Metal fabrication services" },
    { id: 9, name: "Protective Gear", image: "/images/9.png", category: "Safety", description: "Advanced protective equipment" },
    { id: 10, name: "Pipe and Fittings", image: "/images/10.png", category: "Plumbing", description: "Quality pipes & fittings" },
    { id: 11, name: "Structural Steels", image: "/images/11.png", category: "Construction", description: "Premium structural steel" },
    { id: 12, name: "Strainer", image: "/images/image 2.png", category: "Filtration", description: "Industrial filtration systems" }
  ];

  const categoryColors = {
    "Manufacturing": "from-blue-500 to-blue-600",
    "Safety": "from-red-500 to-red-600",
    "Packaging": "from-green-500 to-green-600",
    "Power": "from-yellow-500 to-yellow-600",
    "Materials": "from-purple-500 to-purple-600",
    "Equipment": "from-indigo-500 to-indigo-600",
    "Fabrication": "from-gray-500 to-gray-600",
    "Plumbing": "from-cyan-500 to-cyan-600",
    "Construction": "from-orange-500 to-orange-600",
    "Filtration": "from-teal-500 to-teal-600"
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", emailForm);
    alert("Email submitted successfully!");
    setEmailForm("");
  };

  // Navigation handlers
  const handleContactUs = () => {
    window.location.href = '/contact';
  };

  const handleGetQuote = () => {
    window.location.href = '/quote';
  };

  const handleExploreProducts = () => {
    // Smooth scroll to products section
    document.getElementById('products-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleAboutUs = () => {
    window.location.href = '/about';
  };

  const handleLearnMore = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-gray-800 overflow-hidden">
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.2); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient { animation: gradient-shift 8s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-fade-up { animation: fade-up 1s ease-out; }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #14b8a6, #0891b2, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover-effect {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card-hover-effect:hover {
          transform: translateY(-12px) scale(1.02);
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900 animate-gradient" style={{backgroundSize: '400% 400%'}}></div>
        
        {/* Hero Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">Discover Our</span>
              <br />
              <span className="text-white drop-shadow-2xl">Diverse Product Range</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              High-quality industrial supplies for every sector, delivered globally with precision and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleExploreProducts}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300 animate-pulse-glow cursor-pointer"
              >
                Explore Products
              </button>
              <button 
                onClick={handleContactUs}
                className="px-8 py-4 glass-effect text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-1 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Products Main Section */}
      <section id="products-section" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Our Extensive</span>
              <br />
              <span className="text-gray-800">Product Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
              At Trade Biz Worldwide, we provide a comprehensive range of industrial products designed to meet 
              the diverse needs of modern industries. From essential construction materials to specialized consumables, 
              our offerings cover every aspect of industrial sourcing with unwavering commitment to quality and reliability.
            </p>
          </div>

          {/* Enhanced Products Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-3xl"></div>
            <div className="relative glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {productsData.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="group card-hover-effect cursor-pointer animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100">
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[product.category] || 'from-gray-500 to-gray-600'} shadow-lg`}>
                        {product.category}
                      </div>

                      {/* Product Image Container */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain p-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                          onError={(e) => { 
                            e.target.onerror = null; 
                            e.target.src = `https://placehold.co/300x300/E2E8F0/4B5563?text=${encodeURIComponent(product.name)}`; 
                          }}
                        />
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>
                        
                        {/* Action Button */}
                       
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center animate-fade-up">
            <div className="glass-effect rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Ready to Get Started?</span>
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Connect with our experts to find the perfect industrial solutions for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleGetQuote}
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Request Quote
                </button>
                <button 
                  onClick={handleAboutUs}
                  className="px-8 py-4 border-2 border-teal-500 text-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}