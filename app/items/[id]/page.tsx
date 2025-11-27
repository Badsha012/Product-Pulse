export const dynamic = "force-dynamic";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return null;
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-red-500 text-2xl font-bold">
          Product not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-96 object-cover rounded-xl mb-6"
        />
      )}

      <p className="text-lg text-gray-700 mb-4">{product.description}</p>

      <p className="text-2xl font-semibold text-blue-600">
        ৳ {product.price}
      </p>
    </div>
  );
}
