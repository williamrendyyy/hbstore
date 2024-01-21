import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { usePage, Link } from "@inertiajs/react";
import { IconEditCircle } from "@tabler/icons-react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function ShippingInformation() {
  var _a;
  const { shipping_address } = usePage().props;
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-slate-200 pt-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-slate-900", children: "Alamat Pengirimanan" }),
    /* @__PURE__ */ jsx("div", { className: "relative mt-4 rounded-lg bg-white p-4 shadow", children: shipping_address ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("shipping-addresses.edit", [
            shipping_address
          ]),
          className: "absolute right-0 top-0 mr-2 mt-2 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-500",
          children: /* @__PURE__ */ jsx(IconEditCircle, { className: "h-5 w-5 stroke-[1.25]" })
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "max-w-sm leading-relaxed", children: shipping_address.address }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-x-3", children: [
        /* @__PURE__ */ jsx("span", { children: shipping_address.province.name }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "/" }),
        /* @__PURE__ */ jsx("span", { children: shipping_address.city.name }),
        (shipping_address == null ? void 0 : shipping_address.subdistrict) ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "/" }),
          /* @__PURE__ */ jsx("span", { children: ((_a = shipping_address == null ? void 0 : shipping_address.subdistrict) == null ? void 0 : _a.name) || "" })
        ] }) : null
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "max-w-sm space-y-2", children: [
      /* @__PURE__ */ jsx("p", { children: "Anda belum menambahkan alamat pengiriman" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
        Link,
        {
          className: "text-blue-600 hover:text-blue-700 hover:underline",
          href: route("shipping-addresses.create"),
          children: "Tambahkan alamat pengiriman"
        }
      ) })
    ] }) })
  ] });
}
export {
  ShippingInformation as default
};
