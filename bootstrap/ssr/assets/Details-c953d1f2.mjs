import { a as jsx, j as jsxs } from "../ssr.mjs";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Details({ open, setOpen, details }) {
  return /* @__PURE__ */ jsx(Transition.Root, { show: open, as: Fragment, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
    /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ jsx(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /* @__PURE__ */ jsx(Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: details.map((detail, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-x-2",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-12 w-12 rounded-lg",
                  src: detail.image,
                  alt: ""
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "block", children: detail.name }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
                  "Rp ",
                  detail.price
                ] })
              ] })
            ]
          },
          index
        )) }) })
      }
    ) }) })
  ] }) });
}
export {
  Details as default
};
