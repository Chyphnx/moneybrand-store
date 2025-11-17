import products from "../../data/products.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="tracking-[0.25em] text-sm uppercase mb-4">
            Money Brand
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            New Arrivals
          </h1>
          <p className="text-lg text-neutral-300 mb-8 max-w-xl">
            Made-in-USA luxury streetwear: tees, hoodies, currency crews,
            and hardware built around the Money Brand 2-bar seal.
          </p>
          <a
            href="#featured"
            className="inline-block bg-white text-black px-6 py-3 text-sm font-semibold tracking-wide"
          >
            SHOP NOW
          </a>
        </div>
      </section>

      <section id="featured" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <article
                key={p.sku}
                className="border border-neutral-200 rounded-lg p-4 flex flex-col justify-between"
              >
                <div className="mb-4">
                  {/* Placeholder image block – swap with real images later */}
                  <div className="w-full h-48 bg-neutral-100 flex items-center justify-center mb-4">
                    <span className="text-xs text-neutral-500">
                      {p.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-neutral-500 mb-2">
                    {p.descriptionShort}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">${p.price}</span>
                  <button className="text-xs uppercase tracking-wide border px-3 py-1">
                    View Product
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
