import AppLayout from "@/Layouts/AppLayout";
import { Head, router } from "@inertiajs/react";
import clsx from "clsx";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

export default function Show({ product }) {
  const [selectedAttribute, setSelectedAttribute] = useState(
    Object.keys(product.variations)[0]
  );
  const [selectedVariation, setSelectedVariation] = useState(
    product.variations[selectedAttribute][0]
  );

  function addToCart(selectedVariation) {
    router.post(
      route("carts.store"),
      {
        variation_id: selectedVariation.id,
        quantity: 1,
      },
      { preserveState: true }
    );
  }

  return (
    <>
      <Head title={product.name} />
      <div className="py-15 mx-auto max-w-2xl px-4 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <div
          onClick={() => window.history.back()}
          className="hover inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-slate-700 transition duration-200 hover:text-sky-600"
        >
          ← Kembali
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* GAMBAR PRODUK */}
          <div className="aspect-square w-full overflow-hidden rounded-xl shadow-md">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* INFO PRODUK */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {product.name}
            </h1>

            <h1 className="mt-3 text-2xl font-semibold text-slate-800">
              Rp {product.price}
            </h1>

            <div className="mt-6">
              <div
                className="space-y-4 text-base leading-relaxed text-slate-700"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            </div>

            {/* PILIHAN VARIASI */}
            <div className="mt-8">
              <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                {/* Variasi 1 */}
                <RadioGroup
                  value={selectedAttribute}
                  onChange={setSelectedAttribute}
                >
                  <RadioGroup.Label className="text-sm font-medium text-slate-700">
                    Warna Tersedia
                  </RadioGroup.Label>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {Object.keys(product.variations).map((key) => (
                      <RadioGroup.Option
                        key={key}
                        value={key}
                        className={({ active, checked }) =>
                          clsx(
                            "cursor-pointer rounded-md border px-3 py-2 text-sm font-semibold uppercase transition-all duration-200",
                            active ? "ring-2 ring-sky-600 ring-offset-1" : "",
                            checked
                              ? "border-transparent bg-sky-600 text-white"
                              : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                          )
                        }
                      >
                        <RadioGroup.Label as="span">{key}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>

                {/* Variasi 2 */}
                <RadioGroup
                  value={selectedVariation}
                  onChange={setSelectedVariation}
                >
                  <RadioGroup.Label className="text-sm font-medium text-slate-700">
                    Ukuran Tersedia
                  </RadioGroup.Label>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {product.variations[selectedAttribute]?.map((variation) => (
                      <RadioGroup.Option
                        key={variation.id}
                        value={variation}
                        disabled={!variation.inStock}
                        className={({ active, checked }) =>
                          clsx(
                            "rounded-md border px-3 py-2 text-sm font-medium uppercase transition-all duration-200",
                            variation.inStock
                              ? "cursor-pointer"
                              : "cursor-not-allowed opacity-40",
                            active ? "ring-2 ring-sky-500 ring-offset-1" : "",
                            checked
                              ? "border-transparent bg-sky-600 text-white"
                              : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                          )
                        }
                      >
                        <RadioGroup.Label as="span">
                          {variation.attribute_2}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* TOMBOL ADD TO CART */}
            <div className="mt-5">
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => addToCart(selectedVariation)}
                  className="w-full rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Tambah Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Show.layout = (page) => (
  <AppLayout
    header={
      <h2 className="text-xl font-semibold leading-tight text-slate-800">
        {page.props.product.name}
      </h2>
    }
    children={page}
  />
);
