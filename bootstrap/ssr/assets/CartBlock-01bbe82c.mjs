import { j as jsxs, a as jsx } from "../ssr.mjs";
import { Link, router } from "@inertiajs/react";
import { IconX, IconCircleCheckFilled } from "@tabler/icons-react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function CartBlock({ cart }) {
  function updateQuantity(e, cart2) {
    router.put(
      route("carts.update", [cart2]),
      { quantity: e.target.value },
      { preserveScroll: true }
    );
  }
  return /* @__PURE__ */ jsxs("li", { className: "flex py-6 sm:py-10", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: cart.variation.product.imageSrc,
        alt: cart.variation.product.imageAlt,
        className: "h-16 w-16 rounded-md object-cover object-center lg:h-24 lg:w-24"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "ml-4 flex flex-1 flex-col justify-between sm:ml-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsx("h3", { className: "text-sm", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: cart.variation.product.href,
              className: "font-medium text-slate-700 hover:text-slate-800",
              children: cart.variation.product.name
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 flex text-sm", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
            /* @__PURE__ */ jsx("span", { children: cart.variation.attribute_1 }),
            /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
            /* @__PURE__ */ jsx("span", { children: cart.variation.attribute_2 })
          ] }) }),
          /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm font-medium text-slate-900", children: [
            "Rp ",
            cart.variation.price
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:mt-0 sm:pr-9", children: [
          /* @__PURE__ */ jsxs("label", { className: "sr-only", children: [
            "Quantity, ",
            cart.variation.product.name
          ] }),
          /* @__PURE__ */ jsx(
            "select",
            {
              onChange: (e) => updateQuantity(e, cart),
              value: cart.quantity,
              className: "max-w-full rounded-md border border-slate-300 py-1.5 text-left text-base font-medium leading-5 text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm",
              children: Array.from(
                { length: cart.variation.stock },
                (_, i) => i + 1
              ).map((quantity) => /* @__PURE__ */ jsx("option", { children: quantity }, quantity))
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0", children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("carts.destroy", [cart]),
              method: "delete",
              as: "button",
              className: "-m-2 inline-flex p-2 text-slate-400 hover:text-slate-500",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Remove" }),
                /* @__PURE__ */ jsx(IconX, { className: "h-5 w-5", "aria-hidden": "true" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 flex space-x-2 text-sm text-slate-700", children: [
        cart.variation.inStock ? /* @__PURE__ */ jsx(
          IconCircleCheckFilled,
          {
            className: "h-5 w-5 flex-shrink-0 text-green-500",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsx(
          IconCircleCheckFilled,
          {
            className: "h-5 w-5 flex-shrink-0 text-orange-500",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx("span", { children: cart.variation.inStock ? "In stock" : `Low stock` })
      ] })
    ] })
  ] });
}
export {
  CartBlock as default
};
