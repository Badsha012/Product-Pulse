"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300 px-4">
      <div className="bg-gray-200 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to continue your journey
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>

          <div>
            <label className="text-sm font-medium text-black">Email</label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="w-full border text-black mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your secure password"
              className="w-full border text-black mt-1 px-3 py-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full bg-red-500 text-white py-2.5 rounded-lg mt-4"
        >
          Continue with Google
        </button>

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
