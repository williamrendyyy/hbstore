import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Shipping({ transaction }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "mt-6 lg:col-span-7 lg:mt-0", children: /* @__PURE__ */ jsxs("dl", { className: "grid grid-cols-2 gap-x-6 text-sm", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("dt", { className: "font-medium text-gray-900", children: "Alamat Pengiriman" }),
      /* @__PURE__ */ jsx("dd", { className: "mt-3 text-gray-500", children: /* @__PURE__ */ jsx("span", { className: "block", children: transaction.shipping_information.address.detail }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("dt", { className: "font-medium text-gray-900", children: "Kurir" }),
      /* @__PURE__ */ jsxs("dd", { className: "mt-3 space-y-0 text-slate-500", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          transaction.shipping_information.courier.name,
          " ",
          /* @__PURE__ */ jsxs("strong", { className: "font-semibold uppercase", children: [
            "(",
            transaction.shipping_information.courier.code,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          transaction.shipping_information.service.name,
          " ",
          /* @__PURE__ */ jsxs("strong", { className: "font-semibold uppercase", children: [
            "(",
            transaction.shipping_information.service.id,
            ")"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
            "Estimated time of arrival is",
            " ",
            transaction.shipping_information.service.etd,
            " ",
            "days"
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  Shipping as default
};
