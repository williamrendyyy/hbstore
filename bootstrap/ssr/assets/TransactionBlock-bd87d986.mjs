import { j as jsxs, a as jsx } from "../ssr.mjs";
import { IconHomeCheck } from "@tabler/icons-react";
import { router } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function TransactionBlock({ transaction, setOpen, setDetails }) {
  var _a, _b, _c, _d;
  function setStatus(status, transaction2) {
    router.put(
      route("transactions.update", [transaction2]),
      {
        order_status: status
      },
      {
        preserveScroll: true,
        preserveState: true
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex h-[35rem] flex-col overflow-hidden rounded-lg bg-white p-4 text-sm shadow", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5 flex justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Username:" }),
          /* @__PURE__ */ jsx("div", { children: transaction.customer.name })
        ] }),
        transaction.order_status === 4 && /* @__PURE__ */ jsx(IconHomeCheck, { className: "stroke-[1.25] text-emerald-500" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("span", { children: "Address:" }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            (_a = transaction.shipping_information) == null ? void 0 : _a.address.province,
            " ",
            "/ ",
            (_b = transaction.shipping_information) == null ? void 0 : _b.address.city,
            " /",
            " ",
            (_c = transaction.shipping_information) == null ? void 0 : _c.address.subdistrict
          ] }),
          /* @__PURE__ */ jsx("div", { children: (_d = transaction.shipping_information) == null ? void 0 : _d.address.detail })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("span", { children: "Order ID:" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: transaction.order_id })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("span", { children: "Total:" }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
          "Rp ",
          transaction.gross_amount
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("span", { children: "Waktu Transaksi:" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: transaction.transaction_time })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("span", { children: "Status Pembayaran:" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: transaction.transaction_status })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-1 block", children: "Status Pengiriman:" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            className: "rounded border-gray-300 py-1 text-sm shadow-sm focus:outline-none",
            onChange: (e) => setStatus(e.target.value, transaction),
            value: transaction.order_status,
            children: [
              { id: 1, name: "Pending" },
              { id: 2, name: "Processing" },
              { id: 3, name: "Shipping" },
              { id: 4, name: "Delivered" }
            ].map((status) => /* @__PURE__ */ jsx("option", { value: status.id, children: status.name }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "rounded border bg-gray-50 px-2 py-1 text-sm font-medium",
        onClick: () => {
          setDetails(transaction.details);
          setOpen(true);
        },
        children: "Show detail"
      }
    ) })
  ] });
}
export {
  TransactionBlock as default
};
