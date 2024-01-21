import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { Head } from "@inertiajs/react";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { C as Container } from "./Container-1c7dc083.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
import "@tabler/icons-react";
function Home({ products }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome to Online Store" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-8 lg:py-16", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-slate-900", children: "Trending Products" }) }) })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Start Shopping" }),
    children: page
  }
);
export {
  Home as default
};
