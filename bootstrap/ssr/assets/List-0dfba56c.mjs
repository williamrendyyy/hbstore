import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { C as Container } from "./Container-1c7dc083.mjs";
import { P as Pagination } from "./Pagination-d0059ed4.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
import "@tabler/icons-react";
import "clsx";
function List() {
  const { data: products, meta, links } = usePage().props.products;
  function kick(product) {
    if (confirm("Are you sure you want to delete this product?") === true) {
      router.delete(route("products.destroy", [product]));
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Products" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-6 py-12", children: products.map((product) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex h-48 flex-col divide-y rounded-lg bg-white shadow",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-5 aspect-[1/1] w-16 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-full w-full object-cover object-center",
                  src: product.imageSrc,
                  alt: product.imageAlt
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Link, { href: product.href, children: /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold hover:underline", children: product.name }) }),
                /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-gray-500", children: [
                  "Rp ",
                  product.price
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    className: "rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium hover:bg-gray-200",
                    href: route("products.edit", [product]),
                    children: "Edit"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => kick(product),
                    className: "rounded-lg bg-rose-100 px-3 py-1.5 text-sm font-medium text-rose-900 hover:bg-red-200",
                    children: "Delete"
                  }
                )
              ] }),
              product.category ? /* @__PURE__ */ jsx(
                Link,
                {
                  className: "rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium hover:bg-gray-200",
                  href: product.category.href,
                  children: product.category.name
                }
              ) : null
            ] })
          ]
        },
        product.id
      )) }),
      meta.has_pages && /* @__PURE__ */ jsx(Pagination, { links })
    ] })
  ] });
}
List.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Products" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Link,
        {
          className: "text-blue-600 underline",
          href: route("products.create"),
          children: "Create Product"
        }
      ) })
    ] }),
    children: page
  }
);
export {
  List as default
};
