import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import Container from "@/Components/Container";

export default function Index({ shipping_addresses }) {
  return (
    <div>
      <Head title="Alamat" />
      <Container>
        <div className="py-8">
          <div className="max-w-2xl space-y-4">
            {shipping_addresses.length > 0 ? (
              shipping_addresses.map((address) => (
                <div
                  key={address.id}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-slate-800">
                      <p className="font-medium">{address.address}</p>
                      <div className="mt-2 space-x-1 text-slate-500">
                        <span>{address.subdistrict}</span>
                        <span>{address.city}</span>
                        <span>,</span>
                        <span>{address.province}</span>
                      </div>
                      {address.is_default && (
                        <p className="mt-2 text-xs font-medium text-green-600">
                          Alamat utama
                        </p>
                      )}
                    </div>

                    <div className="mt-4 flex gap-3 sm:mt-0">
                      <Link
                        href={route("shipping-addresses.edit", [address])}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        as="button"
                        method="delete"
                        href={route("shipping-addresses.destroy", [address])}
                        className="text-sm font-medium text-red-500 hover:underline"
                      >
                        Hapus
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-lg bg-white p-5 text-slate-600 shadow-sm">
                Anda belum menambahkan alamat pengiriman.
              </div>
            )}

            {/* Tombol Tambah */}
            <div className="pt-4">
              <Link
                href={route("shipping-addresses.create")}
                className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                + Tambah Alamat
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

Index.layout = (page) => (
  <AppLayout
    header={
      <h2 className="text-xl font-semibold leading-tight text-slate-800">
        Alamat Pengiriman
      </h2>
    }
    children={page}
  />
);
