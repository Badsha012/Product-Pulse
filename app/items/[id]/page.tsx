export const dynamic = "force-dynamic";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  shortDescription: string;
  description?: string;
  price: number;
  image?: string;
};

export default async function ProductDetailsPage({ params }: any) {
  const res = await fetch(`https://product-purse-sever.vercel.app/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-6 text-red-600 font-bold text-xl">
        Product not found!
      </div>
    );
  }

  const product: Product = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg mb-5"
        />
      )}

      <p className="text-gray-700 mb-3">{product.shortDescription}</p>

      <p className="text-2xl font-semibold text-blue-600">৳ {product.price}</p>

      <Link
        href="/items"
        className="inline-block mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
      >
        Back
      </Link>
    </div>
  );
}
