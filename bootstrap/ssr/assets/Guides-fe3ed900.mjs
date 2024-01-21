import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Guides({ bank }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-4 border-t", children: [
    bank === "bni" && /* @__PURE__ */ jsxs("div", { className: "prose p-4", children: [
      /* @__PURE__ */ jsx("h3", { children: "How to pay using BNI Virtual Account" }),
      /* @__PURE__ */ jsxs("ol", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "Go to the nearest BNI ATM or BNI Syariah ATM and select the ",
          /* @__PURE__ */ jsx("strong", { children: "Other Transactions" }),
          " menu."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Select ",
          /* @__PURE__ */ jsx("strong", { children: "Transfer" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Select ",
          /* @__PURE__ */ jsx("strong", { children: "Other Bank Account" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Enter the ",
          /* @__PURE__ */ jsx("strong", { children: "Virtual Account Number" }),
          " ",
          "that you have received."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Enter the ",
          /* @__PURE__ */ jsx("strong", { children: "amount" }),
          " that you have to pay."
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Follow the next instructions until the transaction is complete." })
      ] })
    ] }),
    bank === "mandiri" && /* @__PURE__ */ jsxs("div", { className: "prose p-4", children: [
      /* @__PURE__ */ jsx("h3", { children: "How to pay using Mandiri Virtual Account" }),
      /* @__PURE__ */ jsxs("ol", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "Go to the nearest Mandiri ATM and select the",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "Other Transactions" }),
          " menu."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Select ",
          /* @__PURE__ */ jsx("strong", { children: "Transfer" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Select ",
          /* @__PURE__ */ jsx("strong", { children: "Other Bank Account" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Enter the ",
          /* @__PURE__ */ jsx("strong", { children: "Virtual Account Number" }),
          " ",
          "that you have received."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Enter the ",
          /* @__PURE__ */ jsx("strong", { children: "amount" }),
          " that you have to pay."
        ] }),
        /* @__PURE__ */ jsx("li", { children: "Follow the next instructions until the transaction is complete." })
      ] })
    ] })
  ] });
}
export {
  Guides as default
};
