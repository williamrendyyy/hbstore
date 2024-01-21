import { j as jsxs, a as jsx } from "../ssr.mjs";
import { usePage, Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function OrderSummary() {
  const { orderSummary } = usePage().props;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "aria-labelledby": "summary-heading",
      className: "mt-16 rounded-lg bg-slate-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",
      children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            id: "summary-heading",
            className: "text-lg font-medium text-slate-900",
            children: "Order summary"
          }
        ),
        /* @__PURE__ */ jsxs("dl", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-sm text-slate-600", children: "Subtotal" }),
            /* @__PURE__ */ jsx("dd", { className: "font-mono text-sm font-medium text-slate-900", children: orderSummary.subtotal })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-slate-200 pt-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "flex text-sm text-slate-600", children: /* @__PURE__ */ jsx("span", { children: "PPN" }) }),
            /* @__PURE__ */ jsx("dd", { className: "font-mono text-sm font-medium text-slate-900", children: orderSummary.tax })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-slate-200 pt-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-base font-medium text-slate-900", children: "Order total" }),
            /* @__PURE__ */ jsxs("dd", { className: "font-mono text-base font-medium text-slate-900", children: [
              "Rp ",
              orderSummary.total
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
          Link,
          {
            method: "post",
            as: "button",
            href: route("checkout.create"),
            className: "block w-full rounded-md border border-transparent bg-blue-600 px-4 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50",
            children: "Checkout"
          }
        ) })
      ]
    }
  );
}
export {
  OrderSummary as default
};
