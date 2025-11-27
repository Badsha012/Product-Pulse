"use client";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

// ✅ Product Type
type Product = {
  _id: string;
  title: string;
  image: string;
  price: number;
  shortDescription: string;
  category?: string;
  name: string;   
  show: boolean;
 } 

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  // ✅ Fetch Products + add name + show
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.map((p: any) => ({
            ...p,
            name: p.title.toLowerCase(),
            show: true,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const features = [
    { title: "Fast Performance", desc: "Our platform is optimized for speed, providing smooth and seamless performance." },
    { title: "Responsive Design", desc: "Perfectly fits all devices—from mobile to large desktops." },
    { title: "Secure System", desc: "We use modern security measures to protect your data." },
    { title: "User Friendly UI", desc: "Clean and intuitive design ensures a great user experience." },
    { title: "Multi-Language Support", desc: "Use the platform in your preferred language effortlessly." }, { title: "Offline Mode", desc: "Access important features even without an internet connection." },
  ];

  const testimonials = [
    {
      text: "Amazing platform! Helped me compare products easily.",
      img: "https://i.pravatar.cc/150?img=3",
      name: "John Doe",
      role: "Product Researcher",
    },
    {
      text: "User-friendly and clean UI. Highly recommended!",
      img: "https://i.pravatar.cc/150?img=5",
      name: "Sarah Parker",
      role: "Marketing Specialist",
    },
    {
      text: "Loved the real-time updates and performance.",
      img: "https://i.pravatar.cc/150?img=8",
      name: "Michael Smith",
      role: "Tech Enthusiast",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* HERO SECTION */}
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
              <Link href="/products" className="px-7 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold">
                Explore Products
              </Link>

              <Link href="/features" className="px-7 py-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition font-semibold">
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://i.ibb.co.com/Xx02q218/business-people-with-magnifying-glass-diagrams-1262-18919.jpg"
              alt="Hero"
              className="rounded-xl w-full shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl w-11/12 mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-6">Our Features</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover the powerful features that make our website stand out.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-md hover:shadow-xl transition bg-white">
              <FaCheckCircle className="text-blue-600 text-3xl mb-3" />
              <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOME ITEMS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl w-11/12 mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">Trending Items</h2>
          <p className="text-gray-600 mb-14">
            Most searched & highly rated products this week.
          </p>

          {/* SEARCH + CATEGORY FILTER */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            
            {/* Search */}
            <input
              type="text"
              placeholder="Search items..."
              className="px-4 py-3 border rounded-lg w-full md:w-72"
              onChange={(e) => {
                const value = e.target.value.toLowerCase();
                setProducts((prev) =>
                  prev.map((p) => ({
                    ...p,
                    show: p.name.includes(value),
                  }))
                );
              }}
            />

            {/* Category Filter */}
            <select
              className="px-4 py-3 border rounded-lg w-full md:w-60"
              onChange={(e) => {
                const value = e.target.value;
                setProducts((prev) =>
                  prev.map((p) => ({
                    ...p,
                    show: value ? p.category === value : true,
                  }))
                );
              }}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="beauty">Beauty</option>
              <option value="home">Home & Living</option>
            </select>
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            {products.slice(0, 6).map(
              (product) =>
                product.show && (
                  <div
                    key={product._id}
                    className="p-6 bg-gray-50 rounded-xl border hover:shadow-lg transition"
                  >
                    <img
                      src={product.image}
                      className="rounded-md mb-4 h-48 w-full object-cover"
                      alt={product.title}
                    />

                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>

                    <p className="text-gray-600 mb-3">
                      {product.shortDescription?.slice(0, 60)}...
                    </p>

                    <div className="flex justify-between items-center">
                      <p className="text-blue-600 font-bold text-lg">৳{product.price}</p>

                      <Link
                        href={`/products/${product._id}`}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 mb-14">
            Real reviews shared by our happy and satisfied users.
          </p>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((c, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
                <div className="text-5xl text-blue-500 mb-4">“</div>
                <p className="text-gray-700 mb-6">{c.text}</p>

                <div className="flex items-center gap-4">
                  <img src={c.img} className="w-16 h-16 rounded-full border-2 border-blue-200" alt={c.name} />
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

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-2 text-lg text-blue-100">Discover smarter product recommendations today.</p>

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
