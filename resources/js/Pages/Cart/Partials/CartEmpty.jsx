import { IconShoppingCartOff } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

export default function CartEmpty() {
  return (
    <div className="mx-auto w-full max-w-xl text-center sm:pt-32">
      <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-white shadow">
        <IconShoppingCartOff className="h-10 w-10 text-slate-500" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-800">
        Keranjang Belanja Kosong
      </h3>
      <p className="mt-2 text-base text-slate-500">
        Belum ada produk yang ditambahkan ke keranjang.
      </p>

      <Link
        href={route("products.index")}
        className="mt-6 inline-block rounded-lg bg-sky-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-sky-700"
      >
        Belanja Sekarang &rarr;
      </Link>
    </div>
  );
}
