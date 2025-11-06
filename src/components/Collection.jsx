const products = [
  {
    name: 'HyperFlux // Nebula',
    color: 'Purple/Black',
    price: '$189',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww'
  },
  {
    name: 'HyperFlux // Ion',
    color: 'White/Volt',
    price: '$179',
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzfGVufDB8fDB8fHww'
  },
  {
    name: 'HyperFlux // Phantom',
    color: 'Black/Graphite',
    price: '$199',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D'
  }
];

export default function Collection() {
  return (
    <section id="collection" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Collection</h2>
            <p className="mt-2 text-white/70 max-w-xl">Select drops from the HyperFlux line. Designed for the street, coded for the future.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-sm text-white/60">{p.color}</p>
                  </div>
                  <span className="font-medium">{p.price}</span>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 py-2.5 text-sm font-medium hover:opacity-90 transition">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
