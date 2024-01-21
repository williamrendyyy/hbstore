import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { usePage, Head } from "@inertiajs/react";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { C as Container } from "./Container-1c7dc083.mjs";
import ProductBlock from "./ProductBlock-2c6e8737.mjs";
import { P as Pagination } from "./Pagination-d0059ed4.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
import "@tabler/icons-react";
import "clsx";
function Index({ title }) {
  const { data: products, meta, links } = usePage().props.products;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "py-8 lg:py-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-slate-900", children: "Trending Products" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: products.map((product) => /* @__PURE__ */ jsx(ProductBlock, { product }, product.id)) }),
      meta.has_pages && /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Pagination, { links }) })
    ] }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: page.props.title }),
    children: page
  }
);
export {
  Index as default
};
