import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Users,
  Award,
  Globe,
  Zap,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import MapWithLocation from "../components/Location";
const toggleMenu = () => {
  setIsOpen(!isOpen);
};

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [location, setLocation] = useState({ lat: null, lng: null });
  <div className="max-w-7xl mx-auto px-6 mt-12">
    <h2 className="text-white text-xl font-semibold mb-4">
      Your Live Location
    </h2>
    {/* <MapWithLocation /> */}
  </div>;
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      bg: "hover:bg-blue-600",
      label: "Facebook",
      link: "https://facebook.com",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      bg: "hover:bg-sky-400",
      label: "Twitter",
      link: "https://twitter.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      bg: "hover:bg-blue-700",
      label: "LinkedIn",
      link: "https://linkedin.com",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      bg: "hover:bg-red-500",
      label: "Email",
      link: "mailto:info@tradebiz.com",
    },
  ];

  const features = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
      title: "Quality Assured",
      desc: "ISO Certified Products",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
      title: "Expert Team",
      desc: "Industry Professionals",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.11 5.511.442c.499.04.701.663.321.988l-4.204 3.602 1.259 5.24c.117.489-.373.87-.886.608L12 18.354l-4.705 2.502c-.513.273-1.003-.12-.886-.608l1.26-5.24-4.205-3.602a.562.562 0 0 1 .321-.988l5.511-.442 2.125-5.11Z" /></svg>`,
      title: "Award Winning",
      desc: "Excellence in Service",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21v-4.243m2.25-4.456-1.5.375m3.75 0 1.5.375M12 16.5V12a2.25 2.25 0 0 0-2.25-2.25H9M6 12.75l4.5 4.5M3.75 5.625h16.5a1.5 1.5 0 0 1 1.5 1.5v12.75a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V7.125a1.5 1.5 0 0 1 1.5-1.5ZM12 12.75a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5v-1.5Z" /></svg>`,
      title: "Global Reach",
      desc: "Worldwide Delivery",
    },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
        setLocation({ lat: 12.9716, lng: 77.5946 }); // fallback
      }
    );
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Steel Industries Ltd",
      text: "Exceptional quality and reliability. Our go-to partner for all industrial needs.",
    },
    {
      name: "Priya Sharma",
      company: "Manufacturing Corp",
      text: "Outstanding service and competitive pricing. Highly recommend Trade Biz Worldwide.",
    },
    {
      name: "Amit Patel",
      company: "Construction Giants",
      text: "Timely delivery and premium materials. They understand our business requirements perfectly.",
    },
    {
      name: "Sneha Verma",
      company: "AutoTech Solutions",
      text: "Professional team and seamless coordination. Trade Biz makes sourcing industrial supplies effortless.",
    },
    {
      name: "Vikram Desai",
      company: "Global Infra Works",
      text: "Excellent customer support and a wide product range. We’ve seen great value in partnering with them.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-teal-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-emerald-400/20 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-cyan-200/20 to-cyan-400/20 rounded-full animate-float-slow delay-300"></div>
      </div>
      {/* Hero Section with Enhanced Animations */}
      <section className="relative w-full h-[90vh] text-white overflow-hidden">
        {/* Background Video with Enhanced Zoom and Overlay */}
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
  style={{ animation: "zoomSlow 20s ease-in-out infinite" }}
  poster="https://res.cloudinary.com/dgaxalank/video/upload/v1754024754/3802790-uhd_2560_1440_30fps_xmkmvd.jpg"
>
  <source
    src="https://res.cloudinary.com/dgaxalank/video/upload/v1754024754/3802790-uhd_2560_1440_30fps_xmkmvd.mp4"
    type="video/mp4"
  />
</video>




        {/* Dynamic Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />

        {/* Foreground Content with Improved Spacing and Emphasis */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="w-full md:w-3/5 lg:w-1/2">
            {" "}
            {/* Adjusted width for better content focus */}
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg"
              style={{ animation: "fadeInUp 1s ease-out forwards" }}
            >
              Industrial Supplies, <br className="hidden md:inline" /> Delivered{" "}
              <span className="text-teal-400">Worldwide</span>
            </h1>
         <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
  Make your business more efficient with our <strong>global sourcing</strong> and <strong>logistics solutions</strong>. We simplify every step of your supply chain with dependable support and trust.
</p>

            <div
              className="flex flex-wrap gap-4 md:gap-6 mb-12"
              style={{
                animation: "fadeInUp 1s ease-out forwards",
                animationDelay: "0.4s",
              }}
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-300 text-base transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Explore Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 border border-white hover:border-teal-400 hover:text-teal-400 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 text-base transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Get a Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-8">
              {" "}
              {/* Adjusted gap for statistics */}
              <div
                className="text-center md:text-left"
                style={{
                  animation: "fadeInUp 1s ease-out forwards",
                  animationDelay: "0.6s",
                }}
              >
                <div className="text-4xl font-bold text-teal-400 mb-1">
                  500+
                </div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>
              <div
                className="text-center md:text-left"
                style={{
                  animation: "fadeInUp 1s ease-out forwards",
                  animationDelay: "0.8s",
                }}
              >
                <div className="text-4xl font-bold text-teal-400 mb-1">10+</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div
                className="text-center md:text-left"
                style={{
                  animation: "fadeInUp 1s ease-out forwards",
                  animationDelay: "1s",
                }}
              >
                <div className="text-4xl font-bold text-teal-400 mb-1">
                  10k+
                </div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">
                  Products Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Welcome Section */}
      <section
        id="welcome"
        className="py-20 bg-gradient-to-b from-white to-gray-50 relative"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div
          className={`max-w-6xl mx-auto px-6 text-center transition-all duration-1000 relative z-10 ${
            isVisible.welcome
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <span className="text-teal-600 font-semibold text-lg">
              Welcome to
            </span>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 mb-6 hover:scale-105 transition-transform cursor-pointer">
              Trade Biz Worldwide
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
            {/* Subtle gradient overlay for extra flair on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <p className="text-base md:text-lg text-gray-700 font-normal leading-relaxed tracking-wide relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-700 font-extrabold text-2xl md:text-3xl block mb-3 drop-shadow-sm">
                Your Trusted Global Partner
              </span>
              in industrial supply and project sourcing. With a vast inventory
              ranging from{" "}
              <span className="font-semibold text-gray-900 bg-gradient-to-r from-teal-100 to-emerald-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                structural steel
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 bg-gradient-to-r from-teal-100 to-emerald-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                precision tools
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 bg-gradient-to-r from-teal-100 to-emerald-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                safety gear
              </span>
              , to{" "}
              <span className="font-semibold text-gray-900 bg-gradient-to-r from-teal-100 to-emerald-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                packaging materials
              </span>
              , we cater to every industrial need—big or small.
            </p>

            <p className="text-base md:text-lg text-gray-700 font-normal leading-relaxed tracking-wide mt-8 relative z-10">
              Backed by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-700 font-extrabold">
                decades of experience
              </span>{" "}
              and a commitment to{" "}
              <span className="text-gray-900 font-bold">quality</span>,{" "}
              <span className="text-gray-900 font-bold">
                competitive pricing
              </span>
              , and{" "}
              <span className="text-gray-900 font-bold">on-time delivery</span>,
              we help industries thrive with reliable solutions. We deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-700 font-extrabold">
                from pin to plant
              </span>{" "}
              with the{" "}
              <span className="text-gray-900 font-bold">precision</span> and{" "}
              <span className="text-gray-900 font-bold">professionalism</span>{" "}
              your business deserves.
            </p>
          </div>

          {/* Trust indicators */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
            {/* Optional: Add subtle background shapes for visual interest */}
            <div
              className="absolute top-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
              style={{ animationDelay: "-2s" }}
            ></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  Choose Us
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
                Discover the qualities that set Trade Biz Worldwide apart in
                the industrial supply sector and propel your business forward.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 flex flex-col items-center text-center transform will-change-transform"
                  >
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 rounded-full mb-6 shadow-xl group-hover:scale-115 transition-transform duration-300 ease-in-out">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className="text-white text-3xl"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Keyframe Animations for background blobs */}
            <style>
              {`
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    .animate-blob {
      animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
    }
    `}
            </style>
          </section>
        </div>
      </section>
      {/* Enhanced Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Subtle Background Overlay with more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 to-emerald-50/40 opacity-70"></div>
        {/* Decorative Circles for background */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ animationDelay: "-4s" }}
        ></div>

        <div
          className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 ${
            isVisible.products
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            {" "}
            {/* Increased bottom margin for better spacing */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-700 mb-6 drop-shadow-md">
              Explore Our Diverse <br className="hidden sm:inline" /> Product
              Range
            </h2>
            {/* Enhanced Divider */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
              At Trade Biz Worldwide, we provide a comprehensive range of
              industrial products designed to meet the diverse needs of modern
              industries. From essential construction materials to precision
              tools and safety equipment, our extensive catalog ensures seamless
              project execution and operational excellence.
            </p>
          </div>

          <div className="space-y-12">
            {" "}
            {/* Increased vertical spacing between product cards */}
            {/* Structural Steel & TMT Bars */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              {" "}
              {/* Softer corners, subtle border */}
              {/* Subtle Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-emerald-600/5 group-hover:from-teal-600/15 group-hover:to-emerald-600/15 transition-all duration-500"></div>
              <div className="flex flex-col lg:flex-row relative z-10">
                {/* Left: Image Section - with more refined styling */}
                <div className="w-full lg:w-[320px] h-60 lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500 relative overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                  {/* Shine animation - stronger effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>

                  {/* Image with slight initial scale */}
                  <img
                    src="/images/image 2.png"
                    alt="Structural Steel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10 p-2 lg:p-4 rounded-3xl" /* Added padding and rounded corners for image */
                  />
                  {/* Small icon/badge at corner */}
                  <div className="absolute bottom-4 right-4 bg-teal-500 text-white rounded-full p-2 text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    BUILD
                  </div>
                </div>

                {/* Right: Content Section - with enhanced aesthetics */}
                <div className="flex-1 bg-gradient-to-r from-teal-600 to-emerald-600 p-8 lg:p-12 text-white relative group-hover:from-teal-700 group-hover:to-emerald-700 transition-all duration-500 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl flex flex-col justify-between">
                  {/* Abstract shape - more dynamic */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/15 rounded-full -translate-y-20 translate-x-20 group-hover:scale-175 transition-transform duration-700 z-0"></div>

                  <div>
                    <h3 className="text-4xl font-extrabold mb-4 group-hover:scale-[1.02] transition-transform origin-left relative z-10 drop-shadow-sm">
                      Structural Steel & TMT Bars
                    </h3>
                    <p className="text-teal-100 text-lg leading-relaxed mb-8 relative z-10">
                      Durable, high-strength materials for construction and
                      infrastructure projects, including TMT bars, MS plates,
                      and structural steel components engineered for maximum
                      reliability and performance under challenging conditions.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-md"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                    {/* Stars - more prominent */}
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-300 text-yellow-300 drop-shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Industrial Safety Gear */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5 group-hover:from-orange-600/15 group-hover:to-red-600/15 transition-all duration-500"></div>

              <div className="flex flex-col lg:flex-row-reverse relative z-10">
                {/* Image Section */}
                <div className="w-full lg:w-[320px] h-60 lg:h-auto relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-3xl lg:rounded-r-3xl lg:rounded-tl-none">
                  {/* Shine animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 z-20"></div>

                  <img
                    src="/images/image 3.png"
                    alt="Industrial Safety Gear"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-2 lg:p-4 rounded-3xl"
                  />
                  {/* Small icon/badge at corner */}
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white rounded-full p-2 text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    SAFE
                  </div>
                </div>

                {/* Right text content section */}
                <div className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 p-8 lg:p-12 text-white relative group-hover:from-orange-700 group-hover:to-red-700 transition-all duration-500 rounded-b-3xl lg:rounded-r-none lg:rounded-l-3xl flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-36 h-36 bg-white/15 rounded-full -translate-y-20 -translate-x-20 group-hover:scale-175 transition-transform duration-700 z-0"></div>

                  <div>
                    <h3 className="text-4xl font-extrabold mb-4 group-hover:scale-[1.02] transition-transform origin-left relative z-10 drop-shadow-sm">
                      Industrial Safety Gear
                    </h3>
                    <p className="text-orange-100 text-lg leading-relaxed mb-8 relative z-10">
                      Comprehensive safety essentials including gloves,
                      protective suits, and complete PPE kits, providing total
                      protection solutions for hazardous industrial environments
                      and ensuring workplace well-being.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-orange-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-md"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-300 text-yellow-300 drop-shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pipes, Valves & Fittings */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 group-hover:from-blue-600/15 group-hover:to-cyan-600/15 transition-all duration-500"></div>
              <div className="flex flex-col lg:flex-row relative z-10">
                {/* Left image section */}
                <div className="w-full lg:w-[320px] h-60 lg:h-auto relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 z-10"></div>
                  <img
                    src="/images/image 1.png"
                    alt="Pipes and Valves"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-2 lg:p-4 rounded-3xl"
                  />
                  {/* Small icon/badge at corner */}
                  <div className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    FLOW
                  </div>
                </div>

                {/* Right content section */}
                <div className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 lg:p-12 text-white relative group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-500 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/15 rounded-full -translate-y-20 translate-x-20 group-hover:scale-175 transition-transform duration-700 z-0"></div>
                  <div>
                    <h3 className="text-4xl font-extrabold mb-4 group-hover:scale-[1.02] transition-transform origin-left relative z-10 drop-shadow-sm">
                      Pipes, Valves & Fittings
                    </h3>
                    <p className="text-blue-100 text-lg leading-relaxed mb-8 relative z-10">
                      Reliable fluid-handling components built to withstand high
                      pressure and harsh conditions across diverse industries,
                      ensuring optimal performance, seamless operations, and
                      long-term durability.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-md"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-yellow-300 text-yellow-300 drop-shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styles for the blob animation (if not already in global CSS) */}
        <style>
          {`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
    }
    `}
        </style>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <p className="text-xl text-white/90 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/70">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      P{/* Enhanced Clients Section */}
      <section
  id="clients"
  className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
>
  {/* Enhanced Background Gradients and Shapes */}
  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/path/to/subtle-grid-pattern.svg")', backgroundSize: '30px 30px' }}></div> {/* Assuming you have a subtle grid pattern SVG */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/50 to-transparent rounded-full translate-x-48 -translate-y-48 filter blur-3xl opacity-30 animate-pulse-slow"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-emerald-200/50 to-transparent rounded-full -translate-x-48 translate-y-48 filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '-3s' }}></div>

  <div
    className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 ${
      isVisible.clients
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`}
  >
    <div className="text-center mb-20">
      <span className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 border border-teal-300 rounded-full text-teal-800 font-bold text-lg mb-6 shadow-md">
        Trusted Partnerships
      </span>
      <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-700 mb-8 leading-tight drop-shadow-lg">
        Industry Leaders <br className="hidden sm:inline"/> Choose Us
      </h2>
      <div className="w-32 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto mb-10 rounded-full"></div>
      <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
        Our reputation spans across manufacturing, energy,
        distilleries, and infrastructure sectors, reflecting our
        unwavering commitment to excellence and reliability in every
        partnership, big or small.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"> {/* Adjusted grid for more columns and spacing */}
      {[
        { name: "Paharpur", logo: "/images/Paharpur.png" },
        { name: "Azure", logo: "/images/Azure.png" },
        { name: "Siddhomal", logo: "/images/siddhomal.png" },
        { name: "Uttam Sucrotech", logo: "/images/uttam.png" },
        { name: "Metso", logo: "/images/Metso.png" },
        { name: "Thomson", logo: "/images/Thomson.png" },
        { name: "JP Group", logo: null },
        { name: "ISGEC", logo: "/images/ISGEC.png" },
        // { name: "More Clients", logo: null },
      ].map((client, index) => (
        <div
          key={index}
          className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 h-40 flex items-center justify-center hover:shadow-2xl hover:border-teal-300 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden transform will-change-transform"
        >
          {/* Internal gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/10 via-teal-50/70 to-emerald-50/70 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
          {/* Subtle glowing border on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

          {client.logo ? (
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-[120px] max-h-24 object-contain group-hover:scale-115 transition-transform duration-500 relative z-10 filter brightness-105 contrast-105 group-hover:brightness-125" /* Enhanced image effects */
            />
          ) : client.name === "JP Group" ? (
            <div className="text-center group-hover:scale-115 transition-transform duration-500 relative z-10">
              <div className="text-yellow-600 font-extrabold text-4xl leading-none">JP</div>
              <div className="text-yellow-500 text-2xl tracking-wide">GROUP</div>
            </div>
          ) : (
            <span className="text-gray-500 text-2xl font-bold group-hover:text-teal-600 group-hover:scale-115 transition-all duration-500 relative z-10">
              {client.name}
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Enhanced Call to Action */}
    <div className="text-center mt-16"> {/* Adjusted margin-top for spacing */}
      <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
        {/* Subtle background pattern for depth */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff20 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        {/* Abstract shapes for dynamism */}
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2 animate-spin-slow" style={{ animationDelay: '-5s' }}></div>

        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight drop-shadow-md">
            Ready to <span className="text-teal-200">Forge Your Success Story</span> with Us?
          </h3>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our reliable solutions and global expertise can
            power your next project and drive your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-teal-700 px-10 py-4 rounded-full font-bold shadow-xl transition-all duration-300 text-lg hover:bg-gray-100 hover:scale-105 border-2 border-transparent hover:border-teal-300 transform ring-2 ring-transparent hover:ring-white focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-teal-600"
          >
            Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Custom CSS for animations (add to your global stylesheet or within a <style> tag) */}
  <style>
    {`
    @keyframes pulse-slow {
      0% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.05); opacity: 0.4; }
      100% { transform: scale(1); opacity: 0.3; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }

    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    `}
  </style>
</section>
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
          @keyframes zoomSlow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomSlow {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-3deg);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse-bright {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.8);
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(2deg);
          }
          75% {
            transform: rotate(-2deg);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 3rem;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.3s both;
        }

        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out both;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-bright {
          animation: pulse-bright 2s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 3s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 1s ease-out;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            #d1d5db 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    </div>
  );
}
