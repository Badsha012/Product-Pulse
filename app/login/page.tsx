"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to continue your journey
        </p>

        <form className="space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"  // clearer
              className="w-full border mt-1 px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your secure password" // clearer
              className="w-full border mt-1 px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          New here?{" "}
          <Link href="/register" className="text-blue-600 font-medium hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
