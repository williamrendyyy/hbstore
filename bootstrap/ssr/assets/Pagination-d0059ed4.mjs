import { j as jsxs, a as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/react";
import clsx from "clsx";
function Pagination({ links }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 justify-between sm:justify-end", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        as: "button",
        disabled: !links.prev,
        href: links.prev,
        className: clsx(
          !links.prev && "cursor-none opacity-50",
          "relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:outline-offset-0"
        ),
        children: "Previous"
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        as: "button",
        disabled: !links.next,
        href: links.next,
        className: clsx(
          "relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:outline-offset-0",
          !links.next && "cursor-none opacity-50"
        ),
        children: "Next"
      }
    )
  ] });
}
export {
  Pagination as P
};
