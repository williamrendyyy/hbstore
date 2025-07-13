import {
  q as c,
  r as i,
  j as a,
  F as d,
  a as t,
  b as h,
} from "./app-5671d959.js";
import { A as u } from "./AppLayout-4723d86e.js";
import { C as f } from "./Container-eb0ec0a9.js";
import g from "./Details-21163597.js";
import x from "./TransactionBlock-4f37574e.js";
import { P as y } from "./Pagination-0eb7db32.js";
import "./ApplicationLogo-009a746a.js";
import "./transition-a2c1e9ed.js";
import "./use-flags-24a59ca7.js";
import "./createReactComponent-b151f947.js";
import "./IconX-9b1a34b5.js";
import "./dialog-a123b514.js";
import "./keyboard-cf7c7369.js";
import "./description-a8d8054d.js";
import "./use-outside-click-60bef668.js";
import "./IconHomeCheck-6892af48.js";
import "./clsx.m-1229b3e0.js";
function C() {
  const { data: r, meta: e, links: m } = c().props.transactions,
    [n, o] = i.useState(!1),
    [s, p] = i.useState(null);
  return a(d, {
    children: [
      t(h, { title: "Pesanan Pelanggan" }),
      a(f, {
        children: [
          s !== null && t(g, { open: n, setOpen: o, details: s }),
          a("div", {
            className: "py-8 lg:py-16",
            children: [
              t("div", {
                className: "grid grid-cols-4 gap-4",
                children: r.map((l) =>
                  t(x, { transaction: l, setOpen: o, setDetails: p })
                ),
              }),
              e.has_pages && t(y, { links: m }),
            ],
          }),
        ],
      }),
    ],
  });
}
C.layout = (r) =>
  t(u, {
    header: t("h1", {
      className: "text-3xl font-bold tracking-tight text-slate-900",
      children: "Pesanan Pelanggan",
    }),
    children: r,
  });
export { C as default };
