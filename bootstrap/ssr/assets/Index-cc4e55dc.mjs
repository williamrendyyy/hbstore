import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { Head, Link } from "@inertiajs/react";
import { C as Container } from "./Container-1c7dc083.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
import "@tabler/icons-react";
function Index({ shipping_addresses }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Shipping Address" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex justify-end", children: /* @__PURE__ */ jsx(
        Link,
        {
          href: route("shipping-addresses.create"),
          className: "text-blue-500 underline",
          children: "New Shipping Address"
        }
      ) }),
      shipping_addresses.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-2", children: shipping_addresses.map((shippingAddress) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white p-4 shadow sm:rounded-lg sm:p-6",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: shippingAddress.address }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-x-3", children: [
              /* @__PURE__ */ jsx("span", { children: shippingAddress.province }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "/" }),
              /* @__PURE__ */ jsx("span", { children: shippingAddress.city }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "/" }),
              /* @__PURE__ */ jsx("span", { children: shippingAddress.subdistrict })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              shippingAddress.is_default ? /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "The default shipping address." }) : /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    as: "button",
                    method: "delete",
                    href: route(
                      "shipping-addresses.destroy",
                      [shippingAddress]
                    ),
                    className: "text-red-500 underline",
                    children: "Delete"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route(
                      "shipping-addresses.edit",
                      [shippingAddress]
                    ),
                    className: "text-blue-500 underline",
                    children: "Edit"
                  }
                )
              ] })
            ] })
          ]
        },
        shippingAddress.id
      )) }) : /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-6", children: "Anda belum memiliki alamat pengiriman." })
    ] }) }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Shipping Address" }),
    children: page
  }
);
export {
  Index as default
};
