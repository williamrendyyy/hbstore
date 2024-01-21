import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { Head } from "@inertiajs/react";
import Shipping from "./Shipping-f46c049f.mjs";
import BillingAddress from "./BillingAddress-5f079619.mjs";
import { useState } from "react";
import { C as Container } from "./Container-1c7dc083.mjs";
import ProductDetail from "./ProductDetail-b69fb35d.mjs";
import Status from "./Status-31b4af44.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "@headlessui/react";
import "@tabler/icons-react";
import "./Gopay-e4513668.mjs";
import "./BankTransfer-69ba91ec.mjs";
import "react-copy-to-clipboard";
import "./Guides-fe3ed900.mjs";
import "clsx";
function Show({ transaction }) {
  const [paid, setPaid] = useState(
    transaction.transaction_status === "settlement"
  );
  Echo.private(`transactions.${transaction.customer_id}`).listen(
    "InvoicePaid",
    (event) => {
      if (event.transaction.transaction_status === "settlement" && transaction.order_id === event.transaction.order_id) {
        setPaid(true);
      }
    }
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: transaction.order_id }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-8 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border", children: [
      /* @__PURE__ */ jsx(BillingAddress, { transaction, paid }),
      /* @__PURE__ */ jsxs("div", { className: "border-t px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8", children: [
        /* @__PURE__ */ jsx(ProductDetail, { transaction }),
        /* @__PURE__ */ jsx(Shipping, { transaction })
      ] }),
      /* @__PURE__ */ jsx(Status, { transaction })
    ] }) }) })
  ] });
}
Show.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-slate-900", children: "Order Details" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 pb-5 text-sm sm:flex sm:justify-between", children: [
        /* @__PURE__ */ jsxs("dl", { className: "flex", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-slate-500", children: "Order number " }),
          /* @__PURE__ */ jsx("dd", { className: "font-medium text-slate-900", children: page.props.transaction.order_id }),
          /* @__PURE__ */ jsxs("dt", { children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Date" }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "mx-2 text-slate-400",
                "aria-hidden": "true",
                children: "·"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("dd", { className: "font-medium text-slate-900", children: /* @__PURE__ */ jsx("time", { dateTime: "2021-03-22", children: page.props.transaction.transaction_time }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-0", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: route("invoices.download", [
              page.props.transaction
            ]),
            className: "font-medium text-blue-600 hover:text-blue-500",
            children: [
              "View invoice",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " →" })
            ]
          }
        ) })
      ] })
    ] }),
    children: page
  }
);
export {
  Show as default
};
