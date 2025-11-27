"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Have any questions or need assistance?  
          Our team is here to help you with anything related to ProductPulse.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>

            <p className="text-gray-400 mb-4">
              Feel free to reach out to us through email, phone, or visit our office.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">📍 Address</h3>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">📞 Phone</h3>
                <p className="text-gray-400">+880 1234-567890</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">📧 Email</h3>
                <p className="text-gray-400">support@productpulse.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">🕒 Working Hours</h3>
                <p className="text-gray-400">Saturday - Thursday: 10AM - 6PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-200"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-200"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-200"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
