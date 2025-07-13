import { Link, usePage } from "@inertiajs/react";
import { IconEditCircle } from "@tabler/icons-react";

export default function ShippingInformation() {
  const { shipping_address } = usePage().props;

  return (
    <div className="mt-10 border-t border-slate-200 pt-10">
      <h2 className="text-lg font-medium text-slate-900">Alamat Pengiriman</h2>

      <div className="relative mt-4 rounded-lg bg-white p-4 shadow">
        {shipping_address ? (
          <>
            <Link
              href={route("shipping-addresses.edit", [shipping_address])}
              className="absolute right-0 top-0 mr-2 mt-2 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-500 focus:outline-none focus:ring"
              aria-label="Edit alamat pengiriman"
            >
              <IconEditCircle className="h-5 w-5 stroke-[1.25]" />
            </Link>

            <p className="max-w-sm font-medium leading-relaxed text-slate-800">
              {shipping_address.address || "-"}
            </p>

            <div className="mt-2 flex flex-wrap gap-1 text-sm text-slate-600">
              {shipping_address.province?.name && (
                <span>{shipping_address.city.name}</span>
              )}
              {shipping_address.city?.name && (
                <>
                  <span className="text-slate-600">,</span>
                  <span>{shipping_address.province.name}</span>
                </>
              )}
              {shipping_address.subdistrict?.name && (
                <>
                  <span className="text-slate-600">/</span>
                  <span>{shipping_address.subdistrict.name}</span>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="max-w-sm space-y-2 text-slate-600">
            <p>Anda belum menambahkan alamat pengiriman.</p>

            <p>
              <Link
                className="text-blue-600 hover:text-blue-700 hover:underline"
                href={route("shipping-addresses.create")}
              >
                Tambahkan alamat pengiriman
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
