export default function ProductDetail({ transaction }) {
  return (
    <div className="space-y-6 lg:col-span-5">
      {transaction.details.map((detail, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row sm:items-start sm:gap-x-6"
        >
          {/* Gambar Produk */}
          <div className="h-24 w-full flex-shrink-0 overflow-hidden rounded-md bg-gray-100 sm:w-24">
            <img
              src={detail.image}
              alt={detail.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Informasi Produk */}
          <div className="mt-4 flex flex-1 flex-col justify-between sm:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {detail.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {detail.variation.attribute_1} / {detail.variation.attribute_2}
              </p>
              {detail.quantity && (
                <p className="mt-1 text-sm text-slate-500">
                  Jumlah: {detail.quantity}
                </p>
              )}
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-900">
              Rp {detail.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
