import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { usePage, Link } from "@inertiajs/react";
import { IconEditCircle } from "@tabler/icons-react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function ContactInformation() {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx("h2", {
        className: "text-lg font-medium text-slate-900",
        children: "Detail Pembeli",
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "relative mt-4 rounded-lg bg-white p-4 shadow",
        children: [
          /* @__PURE__ */ jsx(Link, {
            href: route("profile.edit"),
            className:
              "absolute right-0 top-0 mr-2 mt-2 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-500",
            children: /* @__PURE__ */ jsx(IconEditCircle, {
              className: "h-5 w-5 stroke-[1.25]",
            }),
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx("label", {
                htmlFor: "email-address",
                className: "block text-sm font-medium text-slate-700",
                children: "Nama Penerima",
              }),
              /* @__PURE__ */ jsx("div", { children: auth.user.name }),
            ],
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "mt-4",
            children: [
              /* @__PURE__ */ jsx("label", {
                htmlFor: "email-address",
                className: "block text-sm font-medium text-slate-700",
                children: "Email address",
              }),
              /* @__PURE__ */ jsx("div", { children: auth.user.email }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { ContactInformation as default };
