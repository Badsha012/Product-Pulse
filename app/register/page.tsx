"use client";

import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join us and start your journey today
        </p>

        <form className="space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border text-black mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border text-black mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="w-full border text-black mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full border text-black mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
