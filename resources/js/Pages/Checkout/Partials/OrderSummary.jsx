import { usePage } from "@inertiajs/react";
import { number_format } from "@/Libs/snippet";

export default function OrderSummary({ shipping = "-" }) {
  const { carts, order_summary } = usePage().props;

  const totalAfterCost =
    parseInt(order_summary.total?.replace(/\D/g, "")) +
    parseInt(shipping?.replace(/\D/g, "") || 0);

  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-lg font-semibold text-slate-900">
        Ringkasan Pesanan
      </h2>

      <div className="mt-4 rounded-lg border border-slate-200 bg-white shadow-sm">
        <ul role="list" className="divide-y divide-slate-200">
          {carts.map((cart) => (
            <li
              key={cart.id}
              className="flex items-start gap-4 px-4 py-6 sm:px-6"
            >
              <img
                src={cart.variation.product.imageSrc}
                alt={cart.variation.product.imageAlt || "Product Image"}
                className="h-20 w-20 flex-shrink-0 rounded-md object-cover"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h4 className="text-sm font-medium text-slate-800">
                    <a href={cart.href} className="hover:underline">
                      {cart.variation.product.name}
                    </a>
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    {cart.variation.attribute_1} / {cart.variation.attribute_2}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Rp {cart.price}
                  </p>
                  <p className="text-sm text-slate-600">{cart.quantity}x</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <dl className="space-y-4 border-t border-slate-200 px-4 py-6 sm:px-6">
          <div className="flex items-center justify-between text-sm">
            <dt>Subtotal</dt>
            <dd className="font-medium text-slate-900">
              Rp {order_summary.subtotal}
            </dd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <dt>Shipping</dt>
            <dd className="font-medium text-slate-900">Rp {shipping}</dd>
          </div>
          <div className="flex items-center justify-between text-sm">
            <dt>PPN</dt>
            <dd className="font-medium text-slate-900">
              Rp {order_summary.tax}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t pt-4 text-base font-semibold">
            <dt>Total</dt>
            <dd className="text-slate-900">
              Rp {number_format(totalAfterCost, 0, ",", ".")}
            </dd>
          </div>
        </dl>

        <div className="border-t border-slate-200 px-4 py-6 sm:px-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-sky-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-50"
          >
            Konfirmasi Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}
