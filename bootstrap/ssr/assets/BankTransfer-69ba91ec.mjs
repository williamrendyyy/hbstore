import { j as jsxs, a as jsx } from "../ssr.mjs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Guides from "./Guides-fe3ed900.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function BankTransfer({ transaction }) {
  var _a, _b, _c, _d, _e;
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2e3);
    }
  }, [copied]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "-mb-1 ml-3 text-sm font-medium", children: [
        transaction.payment_method.title,
        " Virtual Account"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex max-w-xs items-center justify-between rounded-2xl border px-4 py-2.5", children: [
        /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: ((_a = transaction.payment_method) == null ? void 0 : _a.va_number) || ((_b = transaction.payment_method) == null ? void 0 : _b.bill_key) }),
        /* @__PURE__ */ jsx(
          CopyToClipboard,
          {
            text: ((_c = transaction.payment_method) == null ? void 0 : _c.va_number) || ((_d = transaction.payment_method) == null ? void 0 : _d.bill_key),
            onCopy: () => setCopied(true),
            children: /* @__PURE__ */ jsx("button", { className: "focus:outline-none [&>svg]:stroke-1", children: copied ? /* @__PURE__ */ jsx(IconCheck, { className: "text-blue-500" }) : /* @__PURE__ */ jsx(IconCopy, { className: "text-slate-500" }) })
          }
        )
      ] })
    ] }),
    ((_e = transaction.payment_method) == null ? void 0 : _e.biller_code) && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      "Billing number:",
      " ",
      /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: transaction.payment_method.biller_code })
    ] }),
    transaction.payment_method.id === "bni" && /* @__PURE__ */ jsx(
      Guides,
      {
        bank: transaction.payment_method.id,
        transaction
      }
    ),
    transaction.payment_method.id === "mandiri" && /* @__PURE__ */ jsx(
      Guides,
      {
        bank: transaction.payment_method.id,
        transaction
      }
    )
  ] });
}
export {
  BankTransfer as default
};
