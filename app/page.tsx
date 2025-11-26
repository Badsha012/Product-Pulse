"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Discover Smarter <span className="text-blue-400">Product Insights</span>
            </h1>
            <p className="mt-5 text-gray-300 text-lg">
              Compare products, read verified reviews, and make confident purchasing decisions.
            </p>

            <div className="mt-7 flex gap-4">
              <Link
                href="/products"
                className="px-7 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold"
              >
                Explore Products
              </Link>

              <Link
                href="/about"
                className="px-7 py-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://i.ibb.co/SXqh9tY/hero-product.png"
              alt="Hero Image"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl w-11/12 mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose ProductPulse?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          We offer smarter tools and verified insights to help you pick the best products with ease.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Verified Reviews",
              desc: "Every review is checked for quality and authenticity."
            },
            {
              title: "AI-Powered Product Matching",
              desc: "We recommend products based on your preferences."
            },
            {
              title: "Modern & Clean UI",
              desc: "Smooth navigation with a beautiful and responsive layout."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Items Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Trending Items</h2>
          <p className="text-gray-600 mb-14">Most searched & highly rated products this week.</p>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition">
                <img
                  src={`https://i.ibb.co/SXqh9tY/hero-product.png`}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Product {i}</h3>
                <p className="text-gray-600 mb-3">High quality product with top ratings.</p>
                <Link
                  href="/products"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
     {/* Testimonials Section */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl w-11/12 mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
    <p className="text-gray-600 mb-14">
      Real reviews shared by our happy and satisfied users.
    </p>

    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          text: "A posture corrector provides support and alignment to your shoulders. Really helpful for long rides.",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          name: "Awlad Hossin",
          role: "Senior Product Designer"
        },
        {
          text: "It gently aligns your back and keeps you productive. Excellent service!",
          img: "https://randomuser.me/api/portraits/men/45.jpg",
          name: "Rasel Ahmed",
          role: "CTO"
        },
        {
          text: "Reduces back strain and improves posture alignment. Highly recommend!",
          img: "https://randomuser.me/api/portraits/men/12.jpg",
          name: "Nasir Uddin",
          role: "CEO"
        },
        {
          text: "The service is fast, reliable, and very user-friendly. Love it!",
          img: "https://randomuser.me/api/portraits/women/22.jpg",
          name: "Sara Khan",
          role: "Marketing Head"
        },
        {
          text: "Highly recommend! Very professional and prompt service.",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Emily Clark",
          role: "Project Manager"
        },
        {
          text: "The experience was amazing! I will definitely use this service again.",
          img: "https://randomuser.me/api/portraits/men/65.jpg",
          name: "David Wilson",
          role: "Entrepreneur"
        }
      ].map((c, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <div className="text-5xl text-blue-500 mb-4">“</div>
          <p className="text-gray-700 mb-6">{c.text}</p>

          <div className="flex items-center gap-4">
            <img
              src={c.img}
              className="w-16 h-16 rounded-full border-2 border-blue-200"
              alt={c.name}
            />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{c.name}</h4>
              <p className="text-gray-500 text-sm">{c.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Banner */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-2 text-lg text-blue-100">
          Discover smarter product recommendations today.
        </p>

        <Link
          href="/register"
          className="inline-block mt-7 px-10 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
}
