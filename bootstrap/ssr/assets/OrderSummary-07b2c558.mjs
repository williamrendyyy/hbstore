import { j as jsxs, a as jsx } from "../ssr.mjs";
import { usePage } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + "").replace(",", "").replace(" ", "");
  let n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = typeof thousands_sep === "undefined" ? "," : thousands_sep, dec = typeof dec_point === "undefined" ? "." : dec_point, s = "", toFixedFix = function(n2, prec2) {
    let k = Math.pow(10, prec2);
    return "" + Math.round(n2 * k) / k;
  };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  let re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
function OrderSummary({ shipping = "-" }) {
  var _a;
  const { carts, order_summary } = usePage().props;
  let totalAfterCost = parseInt((_a = order_summary.total) == null ? void 0 : _a.replace(/\D/g, "")) + parseInt((shipping == null ? void 0 : shipping.replace(/\D/g, "")) || 0);
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 lg:mt-0", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-slate-900", children: "Order summary" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-lg border border-slate-200 bg-white shadow-sm", children: [
      /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Items in your cart" }),
      /* @__PURE__ */ jsx("ul", { role: "list", className: "divide-y divide-slate-200", children: carts.map((cart) => /* @__PURE__ */ jsxs("li", { className: "flex px-4 py-6 sm:px-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: cart.variation.product.imageSrc,
            alt: cart.variation.product.imageAlt,
            className: "w-20 rounded-md"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-6 flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: cart.href,
                className: "font-medium text-slate-700 hover:text-slate-800",
                children: cart.variation.product.name
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1 flex items-center gap-x-2 text-sm text-slate-500", children: [
              /* @__PURE__ */ jsx("span", { children: cart.variation.attribute_1 }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "/" }),
              /* @__PURE__ */ jsx("span", { children: cart.variation.attribute_2 })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-end justify-between pt-2", children: /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm font-medium text-slate-900", children: [
            "Rp ",
            cart.price
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm font-medium text-slate-900", children: [
          cart.quantity,
          "x"
        ] }) })
      ] }, cart.id)) }),
      /* @__PURE__ */ jsxs("dl", { className: "space-y-6 border-t border-slate-200 px-4 py-6 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm", children: "Subtotal" }),
          /* @__PURE__ */ jsxs("dd", { className: "text-sm font-medium text-slate-900", children: [
            "Rp ",
            order_summary.subtotal
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm", children: "Shipping" }),
          /* @__PURE__ */ jsxs("dd", { className: "text-sm font-medium text-slate-900", children: [
            "Rp ",
            shipping
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-sm", children: "PPN" }),
          /* @__PURE__ */ jsxs("dd", { className: "text-sm font-medium text-slate-900", children: [
            "Rp ",
            order_summary.tax
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-slate-200 pt-6", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-base font-medium", children: "Total" }),
          /* @__PURE__ */ jsxs("dd", { className: "text-base font-medium text-slate-900", children: [
            "Rp ",
            number_format(totalAfterCost, 0, ",", ".")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-slate-200 px-4 py-6 sm:px-6", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50",
          children: "Konfirmasi Pesanan"
        }
      ) })
    ] })
  ] });
}
export {
  OrderSummary as default
};
