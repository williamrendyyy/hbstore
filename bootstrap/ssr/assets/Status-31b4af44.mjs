import { j as jsxs, a as jsx } from "../ssr.mjs";
import { IconRotateClockwise2, IconPackages, IconTruckDelivery, IconHomeCheck } from "@tabler/icons-react";
import clsx from "clsx";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Status({ transaction }) {
  return /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8", children: [
    /* @__PURE__ */ jsx("h4", { className: "sr-only", children: "Status" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-full bg-slate-200", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-2 rounded-full bg-blue-600",
          style: {
            width: `calc((${transaction.step} * 2 + 1) / 8 * 100%)`
          }
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 hidden grid-cols-4 font-medium text-slate-600 sm:grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1.5 text-blue-600", children: [
          /* @__PURE__ */ jsx(IconRotateClockwise2, { className: "stroke-[1.25]" }),
          "Pending"
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: clsx(
              transaction.order_status === "delivered" || transaction.order_status === "processing" || transaction.order_status === "shipping" ? "text-blue-600" : "",
              "flex items-center justify-center gap-x-1.5"
            ),
            children: [
              /* @__PURE__ */ jsx(IconPackages, { className: "stroke-[1.25]" }),
              "Processing"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: clsx(
              transaction.order_status === "proccesing" || transaction.order_status === "delivered" || transaction.order_status === "shipping" ? "text-blue-600" : "",
              "flex items-center justify-center gap-x-1.5"
            ),
            children: [
              /* @__PURE__ */ jsx(IconTruckDelivery, { className: "stroke-[1.25]" }),
              "Shipped"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: clsx(
              transaction.order_status === "delivered" ? "text-blue-600" : "",
              "flex items-center justify-end gap-x-1.5"
            ),
            children: [
              /* @__PURE__ */ jsx(IconHomeCheck, { className: "stroke-[1.25]" }),
              "Delivered"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Status as default
};
