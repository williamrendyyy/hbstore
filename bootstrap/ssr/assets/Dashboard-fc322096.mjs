import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./Container-1c7dc083.mjs";
import { IconRotateClockwise2, IconPackages, IconTruckDelivery, IconHomeCheck } from "@tabler/icons-react";
import clsx from "clsx";
import { P as Pagination } from "./Pagination-d0059ed4.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
function Dashboard() {
  const { data: transactions, meta, links } = usePage().props.transactions;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx(Container, { children: transactions.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6", children: transactions.map((transaction) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "space-y-2 rounded-lg bg-white p-4 shadow",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-x-1 rounded border px-1 py-0.5 text-sm font-medium [&>svg]:h-4  [&>svg]:w-4  [&>svg]:stroke-[1.25]", children: [
                transaction.order_status === "pending" && /* @__PURE__ */ jsx(IconRotateClockwise2, {}),
                transaction.order_status === "processing" && /* @__PURE__ */ jsx(IconPackages, {}),
                transaction.order_status === "shipping" && /* @__PURE__ */ jsx(IconTruckDelivery, {}),
                transaction.order_status === "delivered" && /* @__PURE__ */ jsx(IconHomeCheck, {}),
                transaction.order_status === "pending" ? "wait for confirmed" : transaction.order_status
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: clsx(
                    "text-sm font-semibold",
                    transaction.transaction_status === "settlement" && "text-green-500",
                    transaction.transaction_status === "pending" && "text-yellow-500",
                    transaction.transaction_status === "cancel" && "text-red-500",
                    transaction.transaction_status === "expiry" && "text-red-500"
                  ),
                  children: transaction.transaction_status
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold", children: [
              "Order #",
              transaction.order_id
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "uppercase", children: [
              transaction.shipping.courier.id,
              " -",
              " ",
              transaction.shipping.service.id,
              " ",
              "(Etd",
              " ",
              transaction.shipping.service.etd,
              " ",
              "hari)"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Total",
              " ",
              /* @__PURE__ */ jsxs("strong", { className: "font-semibold", children: [
                "Rp ",
                transaction.gross_amount
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: route(
                    "transactions.show",
                    [transaction]
                  ),
                  className: "rounded-lg border bg-slate-50 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-slate-100",
                  children: "Lihat Detail"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: route(
                    "invoices.download",
                    [transaction]
                  ),
                  className: "rounded-lg border bg-slate-50 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-slate-100",
                  children: "Download invoice"
                }
              )
            ] })
          ]
        },
        transaction.id
      )) }),
      meta.has_pages && /* @__PURE__ */ jsx(Pagination, { meta, links })
    ] }) : /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-white p-4 shadow", children: "Anda tidak memiliki transaksi" }) }) })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Dashboard" }),
    children: page
  }
);
export {
  Dashboard as default
};
