export const dynamic = "force-dynamic";

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="text-2xl text-green-400 font-semibold mt-3">
              {product.title}
            </h2>

            <p className="text-gray-600 text-sm line-clamp-2">
              {product.shortDescription}
            </p>

            <p className="mt-2 font-bold text-pink-600">৳ {product.price}</p>

            <a
              href={`/items/${product._id}`}
              className="mt-3 block text-center px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
