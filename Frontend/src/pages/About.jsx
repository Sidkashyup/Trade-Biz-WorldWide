import React from 'react';

const leaders = [
  {
    name: "Mr. Purushottam P Singhal",
    title: "Chief Executive Officer",
    description:
      "Mr. Singhal, with a Bcom, Mcom, and MBA (Logistics), leads the company as CEO. He has worked in Amazon, Flipkart, and Meesho as a trusted asset across 6+ years in logistics. Let us know your case and we'll resolve it.",
    image: "/images/sir1.png",
  },
  {
    name: "Dr. Uttam Singhal",
    title: "Managing Director",
    description:
      "Dr. Singhal, our Managing Director, holds a B.Com, an MBA in Finance, and a Doctorate. His leadership inspires the organization. His strategic vision has strengthened our presence across India.",
    image: "/images/sir2.png",
  },
  {
    name: "Mr. Siddharth Kashyap",
    title: "Chief Financial Officer",
    description:
      "CFO & COO with expertise in financial management, Siddharth ensures efficiency and vision. He has been instrumental in driving financial and operational effectiveness.",
    image: "/images/sir3.jpeg",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.7s ease-out forwards; }
      `}</style>

      {/* Hero Section for About Us */}
      <section className="relative bg-gradient-to-br from-teal-700 to-teal-900 text-white py-24 px-6 overflow-hidden">
        {/* Subtle background pattern or image overlay */}
        <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: 'url("/images/hero-pattern-light.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Innovating the Future of Industrial Supply
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed opacity-95">
            Discover the driving force behind Trade Biz Worldwide's commitment to excellence and global impact.
          </p>
        </div>
      </section>

      {/* About Us Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold text-teal-800 mb-8 leading-tight">
                Our Foundation: Reliability, Quality, and Global Reach
              </h2>
              <div className="space-y-7 text-gray-700 leading-relaxed text-lg">
                <p className="transform transition-all duration-300 hover:text-gray-900 hover:translate-x-1.5 border-l-4 border-yellow-400 pl-4 py-1">
                  <strong className="text-teal-800">Company Overview:</strong> Trade Biz Worldwide is a global industrial supply and trading company,
                  dedicated to delivering quality products and equipment to industries across sectors. With a strong
                  focus on customer satisfaction through quality, pricing, and timely delivery, we've become a trusted
                  procurement partner for industrial operations.
                </p>
                <p className="transform transition-all duration-300 hover:text-gray-900 hover:translate-x-1.5 border-l-4 border-blue-400 pl-4 py-1" style={{ animationDelay: '0.1s' }}>
                  <strong className="text-teal-800">Expertise and Operations:</strong> Our operations are powered by a team of experienced professionals who understand the demands of
                  industrial procurement. Our extensive product portfolio, which ranges from structural steel and industrial
                  safety gear to specialized spares and consumables, we provide end-to-end sourcing support—
                  ensuring seamless project execution and reliability.
                </p>
                <p className="transform transition-all duration-300 hover:text-gray-900 hover:translate-x-1.5 border-l-4 border-green-400 pl-4 py-1" style={{ animationDelay: '0.2s' }}>
                  <strong className="text-teal-800">Global Reach:</strong> With multiple fabrication locations and a growing global presence, we continue to expand our
                  capabilities, ensuring you have access to quality products, consistently, and excellent service.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-500 animate-scale-in">
              <img
                src="https://res.cloudinary.com/dgaxalank/image/upload/v1754111615/about1_cy21zk.png"
                alt="Modern Industrial Facility"
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-700"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x500/E0F2F7/004D40?text=Industrial+Facility"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white text-xl font-bold">
                <p>Advanced Solutions, Global Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-8 transform transition-all duration-500 hover:scale-105">
              Our Vision: Empowering Industry Through People
            </h2>
            <p className="text-teal-100 leading-relaxed max-w-4xl mx-auto text-lg transform transition-all duration-300 hover:text-white hover:translate-y-1">
              We owe our success to our diligent team of professionals, which comprises highly skilled individuals.
              They hold relevant credentials and have immense industry experience, keeping well-acquainted
              with the latest industry trends and industrial requirements. They all work in close coordination to make
              sure that the highest quality standards are delivered at all costs. We are proud to be an equal opportunity
              and a people-centric organization, and we acknowledge their overwhelming contribution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
     <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] group">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="/images/about 5.jpg"
                  alt="Industrial Facility Collaboration"
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 brightness-95"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/E0F2F7/004D40?text=Industrial+Collaboration"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-teal-800 mb-8 leading-tight transform transition-all duration-300 hover:text-teal-700">
                  Why Choose Trade Biz Worldwide?
                </h2>
                <ul className="space-y-6">
                  {[
                    { title: "Broad Product Range:", desc: "We offer everything from essential industrial papers to heavy-duty steel and specialized chemicals, simplifying your procurement.", icon: "📦" },
                    { title: "Unwavering Quality Assurance:", desc: "Every product in our catalog meets rigorous industry standards for quality, reliability, and performance.", icon: "✅" },
                    { title: "Project Flexibility & Precision:", desc: "We adapt to your project's unique demands, providing precise and timely product supply for seamless execution.", icon: "⚙️" },
                    { title: "Decades of Industry Expertise:", desc: "Leverage our extensive experience in the industrial sector to gain access to the best solutions and strategic insights.", icon: "💡" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item transform transition-all duration-300 hover:translate-x-2 hover:bg-gray-100 p-3 rounded-xl shadow-sm" style={{ animationDelay: `${index * 100}ms` }}>
                      <span className="text-2xl mr-4 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">{item.icon}</span>
                      <div className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                        <span className="font-bold text-lg text-teal-700">{item.title}</span> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] group">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="/images/about4.jpg"
                  alt="Diverse Industry Scenes"
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 brightness-95"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/D0E6F0/004D40?text=Industry+Scene"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-8 leading-tight transform transition-all duration-300 hover:text-blue-700">
                  Industries We Empower
                </h2>
                <ul className="space-y-6">
                  {[
                    { title: "Construction:", desc: "Providing reliable steel, TMT bars, and essential building materials for large-scale infrastructure projects.", icon: "🏗️" },
                    { title: "Manufacturing:", desc: "Supplying industrial chemicals, precision fasteners, and advanced tools to optimize production lines.", icon: "🏭" },
                    { title: "Packaging:", desc: "Delivering high-quality industrial papers, films, and packaging materials tailored for diverse logistical needs.", icon: "📦" },
                    { title: "Energy & Infrastructure:", desc: "Crucial supplies including lubricant oils, robust valves, specialized cables, and pipes for critical energy ventures.", icon: "⚡" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item transform transition-all duration-300 hover:translate-x-2 hover:bg-white p-3 rounded-xl shadow-sm" style={{ animationDelay: `${index * 100}ms` }}>
                      <span className="text-2xl mr-4 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">{item.icon}</span>
                      <div className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                        <span className="font-bold text-lg text-blue-700">{item.title}</span> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] group">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src="/images/about6.jpg"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 brightness-95"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/F0F8FF/004D40?text=Core+Values"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-purple-800 mb-8 leading-tight transform transition-all duration-300 hover:text-purple-700">
                  Our Unwavering Core Values
                </h2>
                <ul className="space-y-6">
                  {[
                    { title: "Integrity:", desc: "Upholding transparency and ethical business practices in all our interactions with clients and partners.", icon: "🤝" },
                    { title: "Quality Excellence:", desc: "Dedicated to delivering the highest quality industrial products that consistently meet or exceed industry standards.", icon: "🌟" },
                    { title: "Customer Commitment:", desc: "Focused on building lasting relationships by consistently exceeding expectations with reliable, tailored solutions.", icon: "❤️" },
                    { title: "Continuous Innovation:", desc: "Continuously exploring new technologies and enhancing our product offerings to meet the evolving needs of the industrial sector.", icon: "🚀" },
                    { title: "Environmental Sustainability:", desc: "Committed to providing environmentally friendly products and solutions that actively promote sustainable industrial practices.", icon: "🌱" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group/item transform transition-all duration-300 hover:translate-x-2 hover:bg-gray-100 p-3 rounded-xl shadow-sm" style={{ animationDelay: `${index * 100}ms` }}>
                      <span className="text-2xl mr-4 flex-shrink-0 transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6">{item.icon}</span>
                      <div className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                        <span className="font-bold text-lg text-purple-700">{item.title}</span> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>





    <section className="py-20 bg-gradient-to-br from-white via-teal-50 to-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 mb-6 drop-shadow-lg animate-fade-in-down">
      Meet Our Visionary Leaders
    </h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg leading-relaxed animate-fade-in-up">
      Our CEO and MD are the driving force behind our innovation and success,
      leading with unparalleled expertise and an unwavering commitment to excellence.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {leaders.map((leader, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-lg rounded-3xl border border-teal-100 shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-102 relative overflow-hidden group"
        >
          <div className="relative mb-6">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-36 h-36 mx-auto rounded-full object-cover border-5 border-teal-300 shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-emerald-800 group-hover:text-teal-600 transition-colors duration-300">
            {leader.name}
          </h3>
          <p className="text-md font-semibold text-gray-700 mt-1">
            {leader.title}
          </p>
          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            {leader.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




    </div>
  );
}