import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function PaymentMethod({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  paymentMethods
}) {
  return /* @__PURE__ */ jsx("div", { className: "mt-10 border-t border-slate-200 pt-10", children: /* @__PURE__ */ jsxs(
    RadioGroup,
    {
      value: selectedPaymentMethod,
      onChange: setSelectedPaymentMethod,
      children: [
        /* @__PURE__ */ jsx(RadioGroup.Label, { className: "text-lg font-medium text-slate-900", children: "Metode Pembayaran" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: paymentMethods.map((paymentMethod) => /* @__PURE__ */ jsx(
          RadioGroup.Option,
          {
            value: paymentMethod,
            className: ({ checked, active }) => clsx(
              checked ? "border-transparent" : "border-slate-300",
              active ? "border-blue-500 ring ring-blue-100" : "",
              "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
            ),
            children: ({ checked, active }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "flex flex-1", children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx(
                  RadioGroup.Label,
                  {
                    as: "span",
                    className: "block text-sm font-medium text-slate-900",
                    children: paymentMethod.title
                  }
                ),
                /* @__PURE__ */ jsx(
                  RadioGroup.Description,
                  {
                    as: "span",
                    className: "mt-1 flex items-center text-sm text-slate-500",
                    children: paymentMethod.method
                  }
                ),
                /* @__PURE__ */ jsx(
                  RadioGroup.Description,
                  {
                    as: "span",
                    className: "mt-6 text-sm font-medium text-slate-900",
                    children: paymentMethod.description
                  }
                )
              ] }) }),
              checked ? /* @__PURE__ */ jsx(
                IconCircleCheckFilled,
                {
                  className: "h-5 w-5 text-blue-600",
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: clsx(
                    active ? "border" : "border-2",
                    checked ? "border-blue-500" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  ),
                  "aria-hidden": "true"
                }
              )
            ] })
          },
          paymentMethod.id
        )) })
      ]
    }
  ) });
}
export {
  PaymentMethod as default
};
