"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-blue-400">ProductPulse</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Your all-in-one platform to explore top-rated products, compare
              features, and make smarter decisions.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold"
              >
                Explore Products
              </Link>
              <Link
                href="/features"
                className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition font-semibold"
              >
                See Features
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://i.ibb.co/SXqh9tY/hero-product.png"
              alt="Hero"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-11/12 mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          We provide high-quality product insights to help you choose the best.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Product Reviews",
              desc: "All reviews are manually checked for authenticity."
            },
            {
              title: "Smart Search System",
              desc: "Easily find products based on category and rating."
            },
            {
              title: "Modern Clean UI",
              desc: "Beautiful UI for a smooth and enjoyable experience."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold">Ready to explore products?</h2>
        <p className="mt-2 text-lg text-blue-100">
          Join thousands of users who trust ProductPulse.
        </p>

        <Link
          href="/register"
          className="inline-block mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
