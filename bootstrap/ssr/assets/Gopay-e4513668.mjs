import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Gopay({ transaction }) {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 p-6", children: [
    /* @__PURE__ */ jsx("div", { className: "h-40 w-40 shrink-0 rounded-lg border p-1", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "h-full w-full",
        src: (_a = transaction.payment_method) == null ? void 0 : _a.qrcode,
        alt: ""
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "prose text-sm", children: /* @__PURE__ */ jsxs("ol", { children: [
      /* @__PURE__ */ jsxs("li", { children: [
        "Open your",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-green-600", children: "Gojek" }),
        " app and tap the ",
        /* @__PURE__ */ jsx("strong", { children: "Pay" }),
        " button on the home screen."
      ] }),
      /* @__PURE__ */ jsx("li", { children: "Tap the Scan QR button." }),
      /* @__PURE__ */ jsx("li", { children: "Scan the QR code above." }),
      /* @__PURE__ */ jsx("li", { children: "Enter the amount to pay and tap Pay." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Enter your",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-green-600", children: "GoPay PIN" }),
        " to complete the payment."
      ] })
    ] }) })
  ] });
}
export {
  Gopay as default
};
