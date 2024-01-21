import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as ApplicationLogo } from "./ApplicationLogo-48cce105.mjs";
import { Link } from "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center bg-slate-100 pt-6 sm:justify-center sm:pt-0", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "h-20 w-20 fill-current text-slate-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg", children })
  ] });
}
export {
  Guest as G
};
