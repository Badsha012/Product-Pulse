"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // function for active class
  const isActive = (path: string): string =>
    pathname === path
      ? "text-white font-semibold underline underline-offset-4"
      : "text-gray-300 hover:text-white transition";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-black border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Menu */}
        <div className="flex items-center gap-6">
          <img
            src="https://i.ibb.co.com/JFdXPrpm/919d8e35-313d-4f01-8082-a19580ad06d3.png"
            alt="Logo"
            className="w-10 h-10 rounded-2xl object-cover shadow"
          />

          <Link
            href="/"
            className="font-extrabold text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Product<span className="text-blue-400">Pulse</span>
          </Link>

          <div className="hidden md:flex gap-6 ml-10">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>

            <Link href="/items" className={isActive("/items")}>
              Products
            </Link>

            <Link href="/features" className={isActive("/features")}>
              About
            </Link>

            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </div>
        </div>

        {/* Login / Register */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className={
              isActive("/login") +
              " px-4 py-2 border border-gray-300 rounded-lg"
            }
          >
            Login
          </Link>

          <Link
            href="/register"
            className={
              isActive("/register") +
              " px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400 transition shadow"
            }
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
