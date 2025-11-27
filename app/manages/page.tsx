import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ManageProducts() {
  const products = await getProducts();

  async function deleteProduct(id: string) {
    "use server";
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <div className="grid md:grid-cols-2 gap-6">

        {products.map((p: any) => (
          <div key={p._id} className="border rounded-lg p-4 shadow">
            
            <img
              src={p.image}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-3">{p.title}</h2>
            <p className="text-gray-600">{p.shortDescription}</p>
            <p className="font-bold mt-2">৳ {p.price}</p>

            <div className="flex gap-3 mt-4">
              <Link
                href={`/items/${p._id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                View
              </Link>

              <form action={deleteProduct.bind(null, p._id)}>
                <button className="px-4 py-2 bg-red-600 text-white rounded">
                  Delete
                </button>
              </form>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
