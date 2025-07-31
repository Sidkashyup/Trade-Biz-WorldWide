import React, { useState, useEffect } from "react";
// import axios from "axios";

const GetQuote = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    comments: "",
  });

  const [emailForm, setEmailForm] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://trade-biz-worldwide-1.onrender.com/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setAlertMessage("Message sent successfully!");
        setAlertType("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          enquiryType: "",
          comments: "",
        });
      } else {
        setAlertMessage("Failed to send. Please try again.");
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertMessage("An error occurred. Please try again.");
      setAlertType("error");
    }

    setTimeout(() => setAlertMessage(null), 5000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setAlertMessage("Email submitted successfully!");
    setAlertType("success");
    setEmailForm("");
    setTimeout(() => setAlertMessage(null), 4000);
  };

  return (
    <div className={`min-h-screen bg-gray-50 font-inter transition-opacity duration-1000 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Custom Alert Toast */}
      {alertMessage && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-300
            ${alertType === "success" ? "bg-teal-600" : "bg-red-600"}`}
        >
          {alertMessage}
        </div>
      )}

      {/* Contact Header */}
      <section className="text-center py-20 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">Let’s Talk Business</h2>
        <p className="text-lg opacity-90">Reach out for a custom quote or business inquiry</p>
      </section>

      {/* Contact Cards */}
       <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2
      className="text-4xl font-bold text-teal-800 mb-12 text-center animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      Get in Touch
    </h2>

    <div className="flex justify-center">
      <div className="w-full max-w-xl">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] transform group">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4 text-teal-700 text-3xl font-semibold group-hover:rotate-6 transition-transform duration-300">
              SM
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-800 mb-1 group-hover:text-teal-700 transition-colors duration-300">
                Ms. Shiwangi Mittal
              </h3>
              <p className="text-gray-600 text-base font-medium">Business Development Manager</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-2 flex items-center">
            <i className="fas fa-envelope mr-2 text-teal-600"></i> info@tbww.in
          </p>
          <p className="text-gray-700 text-sm flex items-center">
            <i className="fas fa-phone-alt mr-2 text-teal-600"></i> +91-9582203775
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <hr className="border-t border-gray-200 my-8 max-w-7xl mx-auto" />

      {/* Quote Form Section */}
      <section className="py-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Quote Form */}
            <div className="lg:col-span-2 bg-white text-gray-800 p-10 rounded-xl shadow-2xl">
              <h2 className="text-4xl font-extrabold mb-4">Get a Quote</h2>
              <p className="text-lg mb-8 text-gray-600">Our team will contact you shortly to discuss your needs.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName">First Name:*</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:*</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email">Email:*</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400" />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company">Company:</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400" />
                  </div>
                  <div>
                    <label htmlFor="enquiryType">Enquiry Type:*</label>
                    <select name="enquiryType" value={form.enquiryType} onChange={handleChange} required
                      className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400">
                      <option value="">Select an Enquiry Type</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Inquiry</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="comments">Comments:</label>
                  <textarea name="comments" value={form.comments} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-teal-400 h-32 resize-y" />
                </div>

                <p className="text-sm text-gray-500">* Required fields</p>
                <button type="submit"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition hover:bg-teal-700 shadow-lg">
                  Send Inquiry →
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-8 text-white">
              {/* <div className="bg-white text-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Office Address</h3>
                <p>G-346, MAX HEIGHTS, SECTOR-62, KUNDLI, SONEPAT, HARYANA-131029</p>
              </div> */}
              <div className="bg-white text-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Correspondence Address</h3>
                <p>609, 610, 1110 PEARLS OMAXE TOWER-2, NETAJI SUBHASH PLACE, PITAMPURA, DELHI-110034</p>
                <div className="mt-4 rounded-xl overflow-hidden shadow-lg border-2 border-teal-600">
                  <iframe
                    title="Trade Biz Worldwide Location"
                    src="https://www.google.com/maps?q=609+Pearls+Omaxe+Tower+2,+Netaji+Subhash+Place,+Pitampura,+New+Delhi,+Delhi+110034&z=16&output=embed"
                    width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                    className="w-full h-64"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer section goes here (if needed, include your current footer) */}
      

    </div>
  );
};

export default GetQuote;
