"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function FeaturesPage() {
  const features = [
  {
    title: "Fast Performance",
    desc: "Our platform is optimized for speed, providing smooth and seamless performance."
  },
  {
    title: "Responsive Design",
    desc: "Perfectly fits all devices—from mobile to large desktops."
  },
  {
    title: "Secure System",
    desc: "We use modern security measures to protect your data."
  },
  {
    title: "User Friendly UI",
    desc: "Clean and intuitive design ensures a great user experience."
  },
  {
    title: "Real-Time Updates",
    desc: "Information and status update instantly without page reload."
  },
  {
    title: "Cloud Storage",
    desc: "Store and manage your data securely in the cloud."
  },
  {
    title: "24/7 Support",
    desc: "Our team is always available to assist you anytime."
  },
  {
    title: "Customizable Settings",
    desc: "Easily adjust features to match your personal preferences."
  },
  {
    title: "Data Analytics",
    desc: "Get valuable insights through detailed analytics and reports."
  },
  {
    title: "Multi-Language Support",
    desc: "Use the platform in your preferred language effortlessly."
  },
  {
    title: "Offline Mode",
    desc: "Access important features even without an internet connection."
  },
  {
    title: "Advanced Search",
    desc: "Find anything quickly using powerful search capabilities."
  },
  {
    title: "Notification System",
    desc: "Receive instant alerts on important updates and activities."
  },
  {
    title: "Role-Based Access",
    desc: "Control user permissions with powerful access management."
  },
  {
    title: "Integration Ready",
    desc: "Easily connect with third-party apps and tools."
  }
]


  return (
    <div className="w-11/12 mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Our Features</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Discover the powerful features that make our website stand out.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-md hover:shadow-xl transition bg-white"
          >
            <FaCheckCircle className="text-blue-600 text-3xl mb-3" />
            <h2 className="text-xl text-amber-300 font-semibold mb-2">{f.title}</h2>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
