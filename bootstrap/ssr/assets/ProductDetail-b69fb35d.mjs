import { a as jsx, j as jsxs } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function ProductDetail({ transaction }) {
  return /* @__PURE__ */ jsx("div", { className: "space-y-4 lg:col-span-5", children: transaction.details.map((detail) => /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-h-1 aspect-w-1 sm:aspect-none w-full flex-shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: detail.image,
        alt: detail.name,
        className: "h-full w-full object-cover object-center sm:h-full sm:w-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col sm:ml-6 sm:mt-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-medium text-gray-900", children: detail.name }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 flex gap-x-2 text-sm text-gray-500", children: [
          /* @__PURE__ */ jsx("span", { children: detail.variation.attribute_1 }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: detail.variation.attribute_2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm font-medium text-gray-900", children: [
        "$",
        detail.price
      ] })
    ] })
  ] })) });
}
export {
  ProductDetail as default
};
