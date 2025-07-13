import {
  q as n,
  j as r,
  F as o,
  a as e,
  b as c,
  d as a,
  g as m,
} from "./app-5671d959.js";
import { A as h } from "./AppLayout-4723d86e.js";
import { C as g } from "./Container-eb0ec0a9.js";
import { P as f } from "./Pagination-0eb7db32.js";
import "./ApplicationLogo-009a746a.js";
import "./transition-a2c1e9ed.js";
import "./use-flags-24a59ca7.js";
import "./createReactComponent-b151f947.js";
import "./IconX-9b1a34b5.js";
import "./clsx.m-1229b3e0.js";
function p() {
  const { data: i, meta: s, links: l } = n().props.products;
  function d(t) {
    confirm("Are you sure you want to delete this product?") === !0 &&
      m.delete(route("products.destroy", [t]));
  }
  return r(o, {
    children: [
      e(c, { title: "Products" }),
      r(g, {
        children: [
          e("div", {
            className: "grid grid-cols-4 gap-6 py-12",
            children: i.map((t) =>
              r(
                "div",
                {
                  className:
                    "flex h-48 flex-col divide-y rounded-lg bg-white shadow",
                  children: [
                    e("div", {
                      className: "flex-1 p-4",
                      children: r("div", {
                        className: "flex gap-4",
                        children: [
                          e("div", {
                            className:
                              "mb-5 aspect-[1/1] w-16 overflow-hidden rounded-lg",
                            children: e("img", {
                              className:
                                "h-full w-full object-cover object-center",
                              src: t.imageSrc,
                              alt: t.imageAlt,
                            }),
                          }),
                          r("div", {
                            children: [
                              e(a, {
                                href: t.href,
                                children: e("h4", {
                                  className:
                                    "text-sm font-semibold hover:underline",
                                  children: t.name,
                                }),
                              }),
                              r("p", {
                                className: "mt-4 text-sm text-gray-500",
                                children: ["Rp ", t.price],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    r("div", {
                      className: "flex items-center justify-between px-4 py-2",
                      children: [
                        r("div", {
                          className: "flex items-center gap-x-1",
                          children: [
                            e(a, {
                              className:
                                "rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium hover:bg-gray-200",
                              href: route("products.edit", [t]),
                              children: "Edit",
                            }),
                            e("button", {
                              onClick: () => d(t),
                              className:
                                "rounded-lg bg-rose-100 px-3 py-1.5 text-sm font-medium text-rose-900 hover:bg-red-200",
                              children: "Delete",
                            }),
                          ],
                        }),
                        t.category
                          ? e(a, {
                              className:
                                "rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium hover:bg-gray-200",
                              href: t.category.href,
                              children: t.category.name,
                            })
                          : null,
                      ],
                    }),
                  ],
                },
                t.id
              )
            ),
          }),
          s.has_pages && e(f, { links: l }),
        ],
      }),
    ],
  });
}
p.layout = (i) =>
  e(h, {
    header: r("div", {
      className: "flex justify-between",
      children: [
        e("h2", {
          className: "text-xl font-semibold leading-tight text-slate-800",
          children: "Products",
        }),
        e("div", {
          children: e(a, {
            className: "text-blue-600 underline",
            href: route("products.create"),
            children: "Tambah Produk",
          }),
        }),
      ],
    }),
    children: i,
  });
export { p as default };
