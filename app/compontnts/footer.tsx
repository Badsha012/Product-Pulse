"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-10 mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Product<span className="text-blue-400">Pulse</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Your trusted partner for modern digital products.  
            High quality. Fast. Reliable.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Join Newsletter</h3>
          <p className="text-gray-400 mb-3">Get weekly updates and product insights.</p>

          <div className="flex">
            <input
              type="email"
              placeholder=" Enter email"
              className="px-3 py-2 w-full rounded-l bg-gray-800 border border-gray-600 text-gray-200 focus:outline-none"
            />
            <button className="px-4 bg-pink-500 hover:bg-pink-400 rounded-r text-white font-semibold transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} ProductPulse — All Rights Reserved.
      </div>
    </footer>
  );
}
