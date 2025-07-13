import { Head, Link, router, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";

export default function List() {
  const { data: products, meta, links } = usePage().props.products;

  function kick(product) {
    if (confirm("Are you sure you want to delete this product?") === true) {
      router.delete(route("products.destroy", [product]));
    }
  }

  return (
    <>
      <Head title="Daftar Produk" />
      <Container>
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-2xl bg-white shadow-md transition hover:shadow-lg"
            >
              <div className="flex flex-col gap-3 p-4">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <Link href={product.href}>
                  <h4 className="text-base font-semibold text-slate-800 hover:underline">
                    {product.name}
                  </h4>
                </Link>
                <p className="text-sm font-medium text-slate-800">
                  Rp {product.price}
                </p>
              </div>

              <div className="flex items-center justify-between border-t px-4 py-3">
                <div className="flex gap-2">
                  <Link
                    href={route("products.edit", [product])}
                    className="rounded-md bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 hover:bg-sky-200"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => kick(product)}
                    className="rounded-md bg-rose-100 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-200"
                  >
                    Delete
                  </button>
                </div>

                {product.category && (
                  <span className="inline-block rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {product.category.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {meta.has_pages && <Pagination links={links} />}
      </Container>
    </>
  );
}

List.layout = (page) => (
  <AppLayout
    header={
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold leading-tight text-slate-800">
          Daftar Produk
        </h2>
        <div>
          <Link
            href={route("products.create")}
            className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            <span className="text-base">+</span> Tambah Produk
          </Link>
        </div>
      </div>
    }
    children={page}
  />
);
