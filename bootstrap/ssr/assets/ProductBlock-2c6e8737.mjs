import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function ProductBlock({ product }) {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
    /* @__PURE__ */ jsx("div", { className: "min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-slate-200 group-hover:opacity-75 lg:h-80", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: product.imageSrc,
        alt: product.imageAlt,
        className: "h-full w-full object-cover object-center lg:h-full lg:w-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm text-slate-700", children: /* @__PURE__ */ jsxs("a", { href: product.href, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-0"
            }
          ),
          product.name
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: (_a = product.category) == null ? void 0 : _a.name })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-slate-900", children: [
        "Rp ",
        product.price
      ] })
    ] })
  ] });
}
export {
  ProductBlock as default
};
