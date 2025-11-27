"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  const features = [
    "Verified Product Reviews",
    
    "Secure & Reliable Platform",

    "24/7 Customer Support",
  ];

  const team = [
    {
      name: "Awlad Hossin",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Rasel Ahmed",
      role: "CTO",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sara Khan",
      role: "Marketing Head",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero / Banner */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24">
        <div className="max-w-7xl w-11/12 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              About <span className="text-blue-400">ProductPulse</span>
            </h1>
            <p className="mt-5 text-gray-300 text-lg">
              ProductPulse is dedicated to helping you make smarter purchasing decisions through verified reviews and AI-powered insights.
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co.com/PvcTRcSk/Adobe-Stock-1520915157-scaled.jpg"
              alt="About Hero"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl w-11/12 mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Our mission is to provide reliable and insightful product information to empower customers to make confident decisions. 
          <br />
          Our vision is to become the most trusted platform for product reviews and recommendations globally.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              Deliver accurate, trustworthy, and AI-enhanced product insights to simplify the decision-making process for everyone.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              Build a globally recognized platform where users rely on us for verified reviews, seamless experiences, and smarter shopping.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our platform is designed to ensure a seamless, secure, and informative experience.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex items-start gap-4"
              >
                <FaCheckCircle className="text-blue-600 text-3xl mt-1" />
                <p className="text-gray-700 font-semibold">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl w-11/12 mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A group of passionate professionals dedicated to improving your online shopping experience.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-blue-200"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
