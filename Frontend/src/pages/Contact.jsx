import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data?.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        message: "Server error. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-teal-900 to-slate-900 text-white transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6">
            <h2 className="text-3xl font-semibold text-white">Let's Talk</h2>
            <p className="text-gray-200">
              We’re here to help and answer any question you might have.
            </p>

            <div className="space-y-4 text-gray-100">
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                609, Tower II, Pearls Omaxe, Netaji Subash Place, Pitampura, New
                Delhi - 110034
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" /> +91 9582203775
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" /> support@tbww.in
              </p>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://www.linkedin.com/company/twi-india/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-gray-300 hover:text-white"
              >
                <Twitter />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-gray-300 hover:text-white"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-2xl p-10 shadow-2xl">
            <h2 className="text-2xl font-bold text-teal-700 mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {status && (
                <p
                  className={`text-sm font-semibold ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 transition disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"} <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=609+Pearls+Omaxe+Tower+2,+Netaji+Subhash+Place,+Pitampura,+New+Delhi,+Delhi+110034&z=16&output=embed"
            className="w-full h-96 border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
