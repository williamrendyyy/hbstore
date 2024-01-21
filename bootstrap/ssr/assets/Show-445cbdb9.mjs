import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { Head, router } from "@inertiajs/react";
import clsx from "clsx";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "@tabler/icons-react";
function Show({ product }) {
  const [selectedAttribute, setSelectedAttribute] = useState(
    Object.keys(product.variations)[0]
  );
  const [selectedVariation, setSelectedVariation] = useState(
    product.variations[selectedAttribute][0]
  );
  function addToCart(selectedVariation2) {
    router.post(
      route("carts.store"),
      {
        variation_id: selectedVariation2.id,
        quantity: 1
      },
      { preserveState: true }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: product.name }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-h-1 aspect-w-1 w-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: product.imageSrc,
          alt: product.imageAlt,
          className: "h-full w-full object-cover object-center sm:rounded-lg"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-slate-900", children: product.name }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Product information" }),
          /* @__PURE__ */ jsxs("p", { className: "text-3xl tracking-tight text-slate-900", children: [
            "Rp ",
            product.price
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Description" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-base leading-relaxed text-slate-700",
              dangerouslySetInnerHTML: {
                __html: product.description
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 rounded-lg bg-white p-4 shadow", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                value: selectedAttribute,
                onChange: setSelectedAttribute,
                className: "mt-2",
                children: [
                  /* @__PURE__ */ jsx(RadioGroup.Label, { className: "sr-only", children: "Choose variation 1" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: Object.keys(
                    product.variations
                  ).map((key, index) => /* @__PURE__ */ jsx(
                    RadioGroup.Option,
                    {
                      value: key,
                      className: ({
                        active,
                        checked
                      }) => clsx(
                        "cursor-pointer focus:outline-none",
                        active ? "ring-2 ring-blue-500 ring-offset-2" : "",
                        checked ? "border-transparent bg-blue-600 text-white hover:bg-blue-700" : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                        "inline-flex items-center justify-center rounded-md border px-3 py-2 text-xs font-medium uppercase"
                      ),
                      children: /* @__PURE__ */ jsx(RadioGroup.Label, { as: "span", children: key })
                    },
                    key
                  )) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                value: selectedVariation,
                onChange: setSelectedVariation,
                className: "mt-2",
                children: [
                  /* @__PURE__ */ jsx(RadioGroup.Label, { className: "sr-only", children: "Choose variation 2" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: selectedAttribute ? product.variations[selectedAttribute].map((variation) => {
                    return /* @__PURE__ */ jsx(
                      RadioGroup.Option,
                      {
                        value: variation,
                        className: ({
                          active,
                          checked
                        }) => clsx(
                          variation.inStock ? "cursor-pointer focus:outline-none" : "cursor-not-allowed opacity-25",
                          active ? "ring-2 ring-blue-500 ring-offset-2" : "",
                          checked ? "border-transparent bg-blue-600 text-white hover:bg-blue-700" : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                          "inline-flex items-center justify-center rounded-md border px-3 py-2 text-xs font-medium uppercase"
                        ),
                        disabled: !variation.inStock,
                        children: /* @__PURE__ */ jsx(RadioGroup.Label, { as: "span", children: variation.attribute_2 })
                      },
                      variation.id
                    );
                  }) : null })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sm:flex-col1 mt-10 flex", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => addToCart(selectedVariation),
              className: "flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-full",
              children: "Add to Cart"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}
Show.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: page.props.product.name }),
    children: page
  }
);
export {
  Show as default
};
