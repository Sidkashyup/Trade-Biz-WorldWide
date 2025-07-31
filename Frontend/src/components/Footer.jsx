import React, { useState } from "react";
import { Mail, MapPin, Phone, ArrowUp, ExternalLink } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Instagram", icon: <FaInstagram />, scrollToTop: true, color: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600" },
  { label: "Twitter", icon: <FaTwitter />, scrollToTop: true, color: "hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600" },
  { label: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/twi-india/?originalSubdomain=in", newTab: true, color: "hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800" },
  { label: "Mail", icon: <MdMail />, link: "mailto:info@tbww.in", newTab: true, color: "hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showCareersMessage, setShowCareersMessage] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInternalLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setNewsletterStatus("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setNewsletterStatus(""), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 group">
              <div className="relative">
                <img 
                  src="/images/tbz logo 2.png" 
                  alt="TBW" 
                  className="w-12 h-12 mr-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-emerald-400/30 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                  Trade Biz
                </h2>
                <p className="text-teal-300 font-medium">Worldwide</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted partner for premium industrial supplies, delivering excellence globally.
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <h4 className="text-teal-300 font-semibold mb-2 flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 px-3 py-2 text-sm rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
              {newsletterStatus && (
                <p className="text-teal-300 text-xs mt-2 animate-fade-in">{newsletterStatus}</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                    onClick={handleInternalLinkClick}
                  >
                    <div className="w-1 h-1 bg-teal-400 rounded-full group-hover:w-3 group-hover:bg-yellow-400 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  onClick={() => {
                    setShowCareersMessage(true);
                    setTimeout(() => setShowCareersMessage(false), 3000);
                  }}
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <div className="w-1 h-1 bg-teal-400 rounded-full group-hover:w-3 group-hover:bg-yellow-400 transition-all duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Careers</span>
                </button>
                {showCareersMessage && (
                  <div className="absolute left-0 mt-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm rounded-xl px-4 py-3 shadow-2xl z-10 w-64 border border-white/20 animate-slide-up">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      Careers section coming soon!
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="group flex items-start gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <MapPin className="text-yellow-400 mt-1 group-hover:scale-110 transition-transform duration-300" size={16} />
                <div className="text-gray-300 text-xs leading-relaxed">
                  <p className="font-medium text-white mb-1">Our Office</p>
                  <p>609, Pearls Omaxe Tower 2,<br />NSP, Pitampura, New Delhi - 110034</p>
                </div>
              </div>
              
              <div className="group flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Phone className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={16} />
                <div>
                  <p className="font-medium text-white text-xs mb-1">Call Us</p>
                  <a href="tel:+919582203775" className="text-gray-300 hover:text-white transition-colors text-xs">
                    +91 9582203775
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <MdMail className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={16} />
                <div>
                  <p className="font-medium text-white text-xs mb-1">Email Us</p>
                  <a href="mailto:info@tbww.in" className="text-gray-300 hover:text-white transition-colors text-xs">
                    info@tbww.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map & CTA */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Find Us
            </h3>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group mb-4">
              <div className="relative">
                <iframe
                  title="Trade Biz Map"
                  src="https://www.google.com/maps?q=609+Pearls+Omaxe+Tower+2,+Netaji+Subhash+Place,+Pitampura,+New+Delhi,+Delhi+110034&z=16&output=embed"
                  className="w-full h-32 group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.location.href = "/contact";
              }}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 px-4 py-2 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-xs font-medium">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.scrollToTop ? "#" : social.link}
                    onClick={social.scrollToTop ? handleScrollTop : undefined}
                    title={social.label}
                    {...(social.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`w-9 h-9 border border-white/20 rounded-lg flex items-center justify-center text-white hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 group ${social.color}`}
                  >
                    <span className="group-hover:scale-125 transition-transform duration-300 text-sm">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white hover:text-teal-300 transition-all duration-300 hover:scale-105 group backdrop-blur-sm text-xs"
            >
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="font-medium">Top</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 pt-4 border-t border-white/10">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-semibold">Trade Biz Worldwide</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;