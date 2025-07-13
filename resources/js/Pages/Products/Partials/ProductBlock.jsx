export default function ProductBlock({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Gambar Produk */}
      <a href={product.href} className="group block">
        <div className="aspect-w-1 aspect-h-1 lg:aspect-none h-64 w-full overflow-hidden bg-slate-200">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>

      {/* Info Produk */}
      <div className="p-4">
        <h3 className="truncate text-base font-semibold text-slate-800">
          <a href={product.href}>{product.name}</a>
        </h3>
        <p className="mb-1 text-sm text-slate-500">{product.category?.name}</p>
        <p className="text-lg font-bold text-slate-900">Rp {product.price}</p>
      </div>
    </div>
  );
}
