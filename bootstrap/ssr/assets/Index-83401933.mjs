import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { C as Container } from "./Container-1c7dc083.mjs";
import { Head } from "@inertiajs/react";
import OrderSummary from "./OrderSummary-7d3863e2.mjs";
import CartBlock from "./CartBlock-01bbe82c.mjs";
import CartEmpty from "./CartEmpty-00ec9c78.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
import "@tabler/icons-react";
function Index({ carts }) {
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Shopping Cart" }),
    carts.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16", children: [
      /* @__PURE__ */ jsxs(
        "section",
        {
          "aria-labelledby": "cart-heading",
          className: "lg:col-span-7",
          children: [
            /* @__PURE__ */ jsx("h2", { id: "cart-heading", className: "sr-only", children: "Items in your shopping cart" }),
            /* @__PURE__ */ jsx(
              "ul",
              {
                role: "list",
                className: "divide-y divide-slate-200 border-b border-t border-slate-200",
                children: carts.map((cart, idx) => /* @__PURE__ */ jsx(CartBlock, { cart }, idx))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(OrderSummary, {})
    ] }) }) : /* @__PURE__ */ jsx(CartEmpty, {})
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Shopping Cart" }),
    children: page
  }
);
export {
  Index as default
};
