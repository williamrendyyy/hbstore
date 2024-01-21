import { a as jsx, j as jsxs } from "../ssr.mjs";
import Gopay from "./Gopay-e4513668.mjs";
import BankTransfer from "./BankTransfer-69ba91ec.mjs";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-copy-to-clipboard";
import "react";
import "./Guides-fe3ed900.mjs";
function BillingAddress({ transaction, paid }) {
  var _a, _b;
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: paid ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2 p-4", children: [
    /* @__PURE__ */ jsx(IconCircleCheckFilled, { className: "h-5 w-5 text-emerald-500" }),
    /* @__PURE__ */ jsx("div", { children: "Payment has been received." })
  ] }) : /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "px-6 pt-4", children: /* @__PURE__ */ jsxs("h1", { className: "text-xl font-semibold", children: [
      "Total: Rp ",
      transaction.gross_amount
    ] }) }),
    ((_a = transaction.payment_method) == null ? void 0 : _a.method) !== "e-wallet" && /* @__PURE__ */ jsx(BankTransfer, { transaction }),
    ((_b = transaction.payment_method) == null ? void 0 : _b.id) === "gopay" && /* @__PURE__ */ jsx(Gopay, { transaction })
  ] }) });
}
export {
  BillingAddress as default
};
