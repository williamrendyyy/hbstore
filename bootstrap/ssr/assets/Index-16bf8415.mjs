import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./Container-1c7dc083.mjs";
import { useState } from "react";
import Details from "./Details-c953d1f2.mjs";
import TransactionBlock from "./TransactionBlock-bd87d986.mjs";
import { P as Pagination } from "./Pagination-d0059ed4.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "@headlessui/react";
import "@tabler/icons-react";
import "clsx";
function Show() {
  const { data: transactions, meta, links } = usePage().props.transactions;
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Customer Orders" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      details !== null && /* @__PURE__ */ jsx(Details, { open, setOpen, details }),
      /* @__PURE__ */ jsxs("div", { className: "py-8 lg:py-16", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-4", children: transactions.map((transaction) => /* @__PURE__ */ jsx(
          TransactionBlock,
          {
            ...{
              transaction,
              setOpen,
              setDetails
            }
          }
        )) }),
        meta.has_pages && /* @__PURE__ */ jsx(Pagination, { links })
      ] })
    ] })
  ] });
}
Show.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-slate-900", children: "Customer Orders" }),
    children: page
  }
);
export {
  Show as default
};
