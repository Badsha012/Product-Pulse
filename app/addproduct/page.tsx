"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(
      "https://product-purse-sever.vercel.app/products/products",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      alert("Product added successfully!");
      router.push("/manage-products");
    } else {
      alert("Failed to add product.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="title"
          placeholder="Product title"
          className="border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="shortDescription"
          placeholder="Short description"
          className="border p-3 rounded"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Full description"
          className="border p-3 rounded"
          rows={4}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          className="border p-3 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Optional image URL"
          className="border p-3 rounded"
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}
