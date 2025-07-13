export default function Shipping({ transaction }) {
  const shipping = transaction.shipping_information;

  return (
    <div className="mt-6 lg:col-span-7 lg:mt-0">
      <h3 className="mb-4 text-base font-semibold text-slate-900">
        Informasi Pengiriman
      </h3>
      <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
        {/* Alamat Pengiriman */}
        <div>
          <dt className="mb-1 font-medium text-slate-700">Alamat Pengiriman</dt>
          <dd className="whitespace-pre-line text-slate-500">
            {shipping?.address?.detail || "-"}
          </dd>
        </div>

        {/* Kurir dan Layanan */}
        <div>
          <dt className="mb-1 font-medium text-slate-700">Kurir</dt>
          <dd className="space-y-1 text-slate-500">
            <div>
              {shipping?.courier?.name || "-"}{" "}
              <strong className="uppercase">
                ({shipping?.courier?.code || "-"})
              </strong>
            </div>
            <div>
              {shipping?.service?.name || "-"}{" "}
              <strong className="uppercase">
                ({shipping?.service?.id || "-"})
              </strong>
            </div>
            <div className="text-sm text-slate-400">
              Estimasi tiba: {shipping?.service?.etd || "?"} hari
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
