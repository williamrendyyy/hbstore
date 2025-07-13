import { Link, usePage } from "@inertiajs/react";

export default function OrderSummary() {
  const { orderSummary } = usePage().props;

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-slate-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-semibold text-slate-900">
        Ringkasan Pesanan
      </h2>

      <dl className="mt-6 space-y-4 text-sm text-slate-700">
        <div className="flex items-center justify-between">
          <dt>Subtotal</dt>
          <dd className="font-medium text-slate-900">
            Rp {orderSummary.subtotal}
          </dd>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <dt>PPN</dt>
          <dd className="font-medium text-slate-900">Rp {orderSummary.tax}</dd>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-base">
          <dt className="font-semibold text-slate-900">Total</dt>
          <dd className="font-semibold text-slate-900">
            Rp {orderSummary.total}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Link
          method="post"
          as="button"
          href={route("checkout.create")}
          className="block w-full rounded-lg bg-sky-600 px-4 py-3 text-center text-base font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Lanjut ke Pembayaran
        </Link>
      </div>
    </section>
  );
}
