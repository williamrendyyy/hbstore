import { j as jsxs, a as jsx } from "../ssr.mjs";
import { IconShoppingCartOff } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function CartEmpty() {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-xl sm:pt-32", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-white sm:h-24 sm:w-24", children: /* @__PURE__ */ jsx(IconShoppingCartOff, { className: "h-8 w-8 stroke-[1.25] sm:h-10 sm:w-10" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-slate-900 sm:text-2xl", children: "Your cart is empty" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 mt-2 text-xl text-slate-500", children: "Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake." }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          className: "rounded-lg bg-white px-6 py-3 text-sm font-medium shadow hover:shadow-lg",
          href: route("products.index"),
          children: [
            "Go shopping",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " →" })
          ]
        }
      )
    ] })
  ] });
}
export {
  CartEmpty as default
};
