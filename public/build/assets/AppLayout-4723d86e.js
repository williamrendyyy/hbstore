import {
  a as e,
  d as m,
  r as l,
  j as r,
  F as d,
  q as b,
} from "./app-5671d959.js";
import { A as y } from "./ApplicationLogo-009a746a.js";
import { t as N } from "./transition-a2c1e9ed.js";
import { c as h } from "./createReactComponent-b151f947.js";
import { I as w } from "./IconX-9b1a34b5.js";
function f({ active: t = !1, className: s = "", children: a, ...i }) {
  return e(m, {
    ...i,
    className:
      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
      (t
        ? "border-blue-400 text-slate-900 focus:border-blue-700 "
        : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 focus:border-slate-300 focus:text-slate-700 ") +
      s,
    children: a,
  });
}
const x = l.createContext(),
  u = ({ children: t }) => {
    const [s, a] = l.useState(!1),
      i = () => {
        a((n) => !n);
      };
    return e(x.Provider, {
      value: { open: s, setOpen: a, toggleOpen: i },
      children: e("div", { className: "relative", children: t }),
    });
  },
  C = ({ children: t }) => {
    const { open: s, setOpen: a, toggleOpen: i } = l.useContext(x);
    return r(d, {
      children: [
        e("div", { onClick: i, children: t }),
        s &&
          e("div", { className: "fixed inset-0 z-40", onClick: () => a(!1) }),
      ],
    });
  },
  L = ({
    align: t = "right",
    width: s = "48",
    contentClasses: a = "py-1 bg-white",
    children: i,
  }) => {
    const { open: n, setOpen: k } = l.useContext(x);
    let p = "origin-top";
    t === "left"
      ? (p = "origin-top-left left-0")
      : t === "right" && (p = "origin-top-right right-0");
    let g = "";
    return (
      s === "48" && (g = "w-48"),
      e(d, {
        children: e(N, {
          as: l.Fragment,
          show: n,
          enter: "transition ease-out duration-200",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
          children: e("div", {
            className: `absolute z-50 mt-2 rounded-md shadow-lg ${p} ${g}`,
            onClick: () => k(!1),
            children: e("div", {
              className: "rounded-md ring-1 ring-black ring-opacity-5 " + a,
              children: i,
            }),
          }),
        }),
      })
    );
  },
  M = ({ className: t = "", children: s, ...a }) =>
    e(m, {
      ...a,
      className:
        "block w-full px-4 py-2 text-left text-sm leading-5 text-slate-700 transition duration-150 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:outline-none " +
        t,
      children: s,
    });
u.Trigger = C;
u.Content = L;
u.Link = M;
const o = u;
function c({ active: t = !1, className: s = "", children: a, ...i }) {
  return e(m, {
    ...i,
    className: `flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${
      t
        ? "border-blue-400 bg-blue-50 text-blue-700 focus:border-blue-700 focus:bg-blue-100 focus:text-blue-800"
        : "border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 focus:border-slate-300 focus:bg-slate-50 focus:text-slate-800"
    } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${s}`,
    children: a,
  });
}
var v = h("alert-circle", "IconAlertCircle", [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
    ["path", { d: "M12 8v4", key: "svg-1" }],
    ["path", { d: "M12 16h.01", key: "svg-2" }],
  ]),
  D = h("circle-check", "IconCircleCheck", [
    ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
    ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }],
  ]),
  I = h("exclamation-circle", "IconExclamationCircle", [
    ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
    ["path", { d: "M12 9v4", key: "svg-1" }],
    ["path", { d: "M12 16v.01", key: "svg-2" }],
  ]),
  T = h("shopping-cart", "IconShoppingCart", [
    ["path", { d: "M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
    ["path", { d: "M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }],
    ["path", { d: "M17 17h-11v-14h-2", key: "svg-2" }],
    ["path", { d: "M6 5l14 1l-1 7h-13", key: "svg-3" }],
  ]);
function F() {
  const { auth: t } = b().props,
    [s, a] = l.useState(!1);
  return r("nav", {
    className: "border-b border-slate-100 bg-white",
    children: [
      e("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: r("div", {
          className: "flex h-16 justify-between",
          children: [
            r("div", {
              className: "flex",
              children: [
                e("div", {
                  className: "flex shrink-0 items-center",
                  children: e(m, {
                    href: "/",
                    children: e(y, {
                      className: "block h-9 w-auto fill-current text-slate-800",
                    }),
                  }),
                }),
                e("div", {
                  className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",
                  children: e(f, {
                    href: route("products.index"),
                    active: route().current("products.*"),
                    children: "Produk",
                  }),
                }),
              ],
            }),
            t.user
              ? r("div", {
                  className: "hidden sm:ml-6 sm:flex sm:items-center",
                  children: [
                    r(m, {
                      className: "flex items-center gap-x-2 text-slate-500",
                      href: route("carts.index"),
                      children: [
                        e(T, { className: "h-5 w-5 stroke-[1.5]" }),
                        e("strong", {
                          className: "text-sm font-semibold",
                          children: t.user.cartCount || 0,
                        }),
                      ],
                    }),
                    e("div", {
                      className: "relative ml-3",
                      children: r(o, {
                        children: [
                          e(o.Trigger, {
                            children: e("span", {
                              className: "inline-flex rounded-md",
                              children: r("button", {
                                type: "button",
                                className:
                                  "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-slate-500 transition duration-150 ease-in-out hover:text-slate-700 focus:outline-none",
                                children: [
                                  t.user.name,
                                  e("svg", {
                                    className: "-mr-0.5 ml-2 h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: e("path", {
                                      fillRule: "evenodd",
                                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          r(o.Content, {
                            children: [
                              e(o.Link, {
                                href: route("dashboard"),
                                children: "Dashboard",
                              }),
                              e(o.Link, {
                                href: route("profile.edit"),
                                children: "Profile",
                              }),
                              t.user.is_admin &&
                                r(d, {
                                  children: [
                                    e(o.Link, {
                                      href: route("transactions.index"),
                                      children: "Pesanan Pelanggan",
                                    }),
                                    e(o.Link, {
                                      href: route("products.list"),
                                      children: "Daftar Produk",
                                    }),
                                  ],
                                }),
                              e(o.Link, {
                                href: route("shipping-addresses.index"),
                                children: "Alamat Pengiriman",
                              }),
                              e(o.Link, {
                                href: route("logout"),
                                method: "post",
                                as: "button",
                                children: "Log Out",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : r("div", {
                  className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",
                  children: [
                    e(f, {
                      href: route("login"),
                      active: route().current("login"),
                      children: "Login",
                    }),
                    e(f, {
                      href: route("register"),
                      active: route().current("register"),
                      children: "Register",
                    }),
                  ],
                }),
            e("div", {
              className: "-mr-2 flex items-center sm:hidden",
              children: e("button", {
                onClick: () => a((i) => !i),
                className:
                  "inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition duration-150 ease-in-out hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 focus:outline-none",
                children: r("svg", {
                  className: "h-6 w-6",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    e("path", {
                      className: s ? "hidden" : "inline-flex",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
                    e("path", {
                      className: s ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      r("div", {
        className: (s ? "block" : "hidden") + " sm:hidden",
        children: [
          e(c, {
            href: route("home"),
            active: route().current("home"),
            children: "Home",
          }),
          t.user
            ? r(d, {
                children: [
                  e("div", {
                    className: "space-y-1 pb-3 pt-2",
                    children: e(c, {
                      href: route("dashboard"),
                      active: route().current("dashboard"),
                      children: "Dashboard",
                    }),
                  }),
                  r("div", {
                    className: "border-t border-slate-200 pb-1 pt-4",
                    children: [
                      r("div", {
                        className: "px-4",
                        children: [
                          e("div", {
                            className: "text-base font-medium text-slate-800",
                            children: t.user.name,
                          }),
                          e("div", {
                            className: "text-sm font-medium text-slate-500",
                            children: t.user.email,
                          }),
                        ],
                      }),
                      r("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          e(c, {
                            href: route("dashboard"),
                            children: "Dashboard",
                          }),
                          e(c, {
                            href: route("products.create"),
                            children: "Tambah Produk",
                          }),
                          e(c, {
                            href: route("profile.edit"),
                            children: "Profil",
                          }),
                          e(c, {
                            method: "post",
                            href: route("logout"),
                            as: "button",
                            children: "Log Out",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : e(d, {
                children: r("div", {
                  className: "space-y-1 pb-3 pt-2",
                  children: [
                    e(c, {
                      href: route("login"),
                      active: route().current("login"),
                      children: "Login",
                    }),
                    e(c, {
                      href: route("register"),
                      active: route().current("register"),
                      children: "Register",
                    }),
                  ],
                }),
              }),
        ],
      }),
    ],
  });
}
function O() {
  const [t, s] = l.useState(!1),
    [a, i] = l.useState(null),
    { flash_message: n } = b().props;
  return (
    l.useEffect(() => {
      s(!0), a && clearTimeout(a), i(setTimeout(() => s(!1), 4e3));
    }, [n]),
    e("div", {
      "aria-live": "assertive",
      className:
        "pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6",
      children: e("div", {
        className: "flex w-full flex-col items-center space-y-4 sm:items-end",
        children: e(N, {
          show: !!(n != null && n.type) && t,
          as: l.Fragment,
          enter: "transform ease-out duration-300 transition",
          enterFrom:
            "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: e("div", {
            className:
              "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-300",
            children: e("div", {
              className: "p-4",
              children: r("div", {
                className: "flex items-start",
                children: [
                  r("div", {
                    className: "flex-shrink-0",
                    children: [
                      n.type === "success" &&
                        e(D, {
                          className: "stroke-[1.25] text-emerald-500 lg:mt-0.5",
                        }),
                      n.type === "error" &&
                        e(v, {
                          className: "stroke-[1.25] text-rose-500 lg:mt-0.5",
                        }),
                      n.type === "info" &&
                        e(I, {
                          className: "stroke-[1.25] text-sky-500 lg:mt-0.5",
                        }),
                      n.type === "warning" &&
                        e(v, {
                          className: "stroke-[1.25] text-orange-500 lg:mt-0.5",
                        }),
                    ],
                  }),
                  r("div", {
                    className: "ml-3 w-0 flex-1 pt-0.5",
                    children: [
                      e("p", {
                        className: "text-sm font-medium text-black",
                        children: n.title,
                      }),
                      e("p", {
                        className: "mt-1 text-sm text-gray-500",
                        children: n.message,
                      }),
                    ],
                  }),
                  e("div", {
                    className: "ml-4 flex flex-shrink-0",
                    children: r("button", {
                      type: "button",
                      className:
                        "inline-flex rounded-md bg-white p-1 text-gray-500 ring-1 ring-gray-300 hover:bg-gray-100 hover:text-black focus:outline-none",
                      onClick: () => {
                        s(!1);
                      },
                      children: [
                        e("span", { className: "sr-only", children: "Close" }),
                        e(w, { className: "h-4 w-4", "aria-hidden": "true" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    })
  );
}
function R({ header: t, children: s }) {
  return r("div", {
    className: "min-h-screen bg-slate-100",
    children: [
      e(O, {}),
      e(F, {}),
      t &&
        e("header", {
          className: "bg-white shadow",
          children: e("div", {
            className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
            children: t,
          }),
        }),
      e("main", { children: s }),
    ],
  });
}
export { R as A };
