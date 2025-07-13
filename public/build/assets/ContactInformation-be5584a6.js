import { q as l, j as t, F as s, a as e, d as r } from "./app-5671d959.js";
import { I as i } from "./IconEditCircle-02620867.js";
import "./createReactComponent-b151f947.js";
function n() {
  const { auth: a } = l().props;
  return t(s, {
    children: [
      e("h2", {
        className: "text-lg font-medium text-slate-900",
        children: "Detail Pembeli",
      }),
      t("div", {
        className: "relative mt-4 rounded-lg bg-white p-4 shadow",
        children: [
          e(r, {
            href: route("profile.edit"),
            className:
              "absolute right-0 top-0 mr-2 mt-2 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-500",
            children: e(i, { className: "h-5 w-5 stroke-[1.25]" }),
          }),
          t("div", {
            children: [
              e("label", {
                htmlFor: "email-address",
                className: "block text-sm font-medium text-slate-700",
                children: "Nama penerima",
              }),
              e("div", { children: a.user.name }),
            ],
          }),
          t("div", {
            className: "mt-4",
            children: [
              e("label", {
                htmlFor: "email-address",
                className: "block text-sm font-medium text-slate-700",
                children: "Email address",
              }),
              e("div", { children: a.user.email }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { n as default };
