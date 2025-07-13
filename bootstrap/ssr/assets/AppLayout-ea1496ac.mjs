import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { Link, usePage } from "@inertiajs/react";
import { A as ApplicationLogo } from "./ApplicationLogo-48cce105.mjs";
import {
  createContext,
  useState,
  useContext,
  Fragment as Fragment$1,
  useEffect,
} from "react";
import { Transition } from "@headlessui/react";
import {
  IconShoppingCart,
  IconCircleCheck,
  IconAlertCircle,
  IconExclamationCircle,
  IconX,
} from "@tabler/icons-react";
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(Link, {
    ...props,
    className:
      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
      (active
        ? "border-blue-400 text-slate-900 focus:border-blue-700 "
        : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 focus:border-slate-300 focus:text-slate-700 ") +
      className,
    children,
  });
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, {
    value: { open, setOpen, toggleOpen },
    children: /* @__PURE__ */ jsx("div", { className: "relative", children }),
  });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
      open &&
        /* @__PURE__ */ jsx("div", {
          className: "fixed inset-0 z-40",
          onClick: () => setOpen(false),
        }),
    ],
  });
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  children,
}) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Transition, {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx("div", {
        className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
        onClick: () => setOpen(false),
        children: /* @__PURE__ */ jsx("div", {
          className:
            `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses,
          children,
        }),
      }),
    }),
  });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(Link, {
    ...props,
    className:
      "block w-full px-4 py-2 text-left text-sm leading-5 text-slate-700 transition duration-150 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:outline-none " +
      className,
    children,
  });
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const Dropdown$1 = Dropdown;
function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Link, {
    ...props,
    className: `flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${
      active
        ? "border-blue-400 bg-blue-50 text-blue-700 focus:border-blue-700 focus:bg-blue-100 focus:text-blue-800"
        : "border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 focus:border-slate-300 focus:bg-slate-50 focus:text-slate-800"
    } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`,
    children,
  });
}
function Navbar() {
  const { auth } = usePage().props;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  return /* @__PURE__ */ jsxs("nav", {
    className: "border-b border-slate-100 bg-white",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex h-16 justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex",
              children: [
                /* @__PURE__ */ jsx("div", {
                  className: "flex shrink-0 items-center",
                  children: /* @__PURE__ */ jsx(Link, {
                    href: "/",
                    children: /* @__PURE__ */ jsx(ApplicationLogo, {
                      className: "block h-9 w-auto fill-current text-slate-800",
                    }),
                  }),
                }),
                /* @__PURE__ */ jsx("div", {
                  className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",
                  children: /* @__PURE__ */ jsx(NavLink, {
                    href: route("products.index"),
                    active: route().current("products.*"),
                    children: "Products",
                  }),
                }),
              ],
            }),
            auth.user
              ? /* @__PURE__ */ jsxs("div", {
                  className: "hidden sm:ml-6 sm:flex sm:items-center",
                  children: [
                    /* @__PURE__ */ jsxs(Link, {
                      className: "flex items-center gap-x-2 text-slate-500",
                      href: route("carts.index"),
                      children: [
                        /* @__PURE__ */ jsx(IconShoppingCart, {
                          className: "h-5 w-5 stroke-[1.5]",
                        }),
                        /* @__PURE__ */ jsx("strong", {
                          className: "text-sm font-semibold",
                          children: auth.user.cartCount || 0,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className: "relative ml-3",
                      children: /* @__PURE__ */ jsxs(Dropdown$1, {
                        children: [
                          /* @__PURE__ */ jsx(Dropdown$1.Trigger, {
                            children: /* @__PURE__ */ jsx("span", {
                              className: "inline-flex rounded-md",
                              children: /* @__PURE__ */ jsxs("button", {
                                type: "button",
                                className:
                                  "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-slate-500 transition duration-150 ease-in-out hover:text-slate-700 focus:outline-none",
                                children: [
                                  auth.user.name,
                                  /* @__PURE__ */ jsx("svg", {
                                    className: "-mr-0.5 ml-2 h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /* @__PURE__ */ jsx("path", {
                                      fillRule: "evenodd",
                                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          /* @__PURE__ */ jsxs(Dropdown$1.Content, {
                            children: [
                              /* @__PURE__ */ jsx(Dropdown$1.Link, {
                                href: route("dashboard"),
                                children: "Dashboard",
                              }),
                              /* @__PURE__ */ jsx(Dropdown$1.Link, {
                                href: route("profile.edit"),
                                children: "Profil",
                              }),
                              auth.user.is_admin &&
                                /* @__PURE__ */ jsxs(Fragment, {
                                  children: [
                                    /* @__PURE__ */ jsx(Dropdown$1.Link, {
                                      href: route("transactions.index"),
                                      children: "Pesanan Pelanggan",
                                    }),
                                    /* @__PURE__ */ jsx(Dropdown$1.Link, {
                                      href: route("products.list"),
                                      children: "Daftar Produk",
                                    }),
                                  ],
                                }),
                              /* @__PURE__ */ jsx(Dropdown$1.Link, {
                                href: route("shipping-addresses.index"),
                                children: "Alamat Pengiriman",
                              }),
                              /* @__PURE__ */ jsx(Dropdown$1.Link, {
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
              : /* @__PURE__ */ jsxs("div", {
                  className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",
                  children: [
                    /* @__PURE__ */ jsx(NavLink, {
                      href: route("login"),
                      active: route().current("login"),
                      children: "Login",
                    }),
                    /* @__PURE__ */ jsx(NavLink, {
                      href: route("register"),
                      active: route().current("register"),
                      children: "Register",
                    }),
                  ],
                }),
            /* @__PURE__ */ jsx("div", {
              className: "-mr-2 flex items-center sm:hidden",
              children: /* @__PURE__ */ jsx("button", {
                onClick: () =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  ),
                className:
                  "inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition duration-150 ease-in-out hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 focus:outline-none",
                children: /* @__PURE__ */ jsxs("svg", {
                  className: "h-6 w-6",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsx("path", {
                      className: !showingNavigationDropdown
                        ? "inline-flex"
                        : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
                    /* @__PURE__ */ jsx("path", {
                      className: showingNavigationDropdown
                        ? "inline-flex"
                        : "hidden",
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
      /* @__PURE__ */ jsxs("div", {
        className:
          (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
        children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, {
            href: route("home"),
            active: route().current("home"),
            children: "Home",
          }),
          auth.user
            ? /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  /* @__PURE__ */ jsx("div", {
                    className: "space-y-1 pb-3 pt-2",
                    children: /* @__PURE__ */ jsx(ResponsiveNavLink, {
                      href: route("dashboard"),
                      active: route().current("dashboard"),
                      children: "Dashboard",
                    }),
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "border-t border-slate-200 pb-1 pt-4",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "px-4",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className: "text-base font-medium text-slate-800",
                            children: auth.user.name,
                          }),
                          /* @__PURE__ */ jsx("div", {
                            className: "text-sm font-medium text-slate-500",
                            children: auth.user.email,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          /* @__PURE__ */ jsx(ResponsiveNavLink, {
                            href: route("dashboard"),
                            children: "Dashboard",
                          }),
                          /* @__PURE__ */ jsx(ResponsiveNavLink, {
                            href: route("products.create"),
                            children: "Tambah Produk",
                          }),
                          /* @__PURE__ */ jsx(ResponsiveNavLink, {
                            href: route("profile.edit"),
                            children: "Profile",
                          }),
                          /* @__PURE__ */ jsx(ResponsiveNavLink, {
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
            : /* @__PURE__ */ jsx(Fragment, {
                children: /* @__PURE__ */ jsxs("div", {
                  className: "space-y-1 pb-3 pt-2",
                  children: [
                    /* @__PURE__ */ jsx(ResponsiveNavLink, {
                      href: route("login"),
                      active: route().current("login"),
                      children: "Login",
                    }),
                    /* @__PURE__ */ jsx(ResponsiveNavLink, {
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
function FlashMessage() {
  const [visible, setVisible] = useState(false);
  const [timeExit, setTimeExit] = useState(null);
  const { flash_message } = usePage().props;
  useEffect(() => {
    setVisible(true);
    if (timeExit) {
      clearTimeout(timeExit);
    }
    setTimeExit(setTimeout(() => setVisible(false), 4e3));
  }, [flash_message]);
  return /* @__PURE__ */ jsx("div", {
    "aria-live": "assertive",
    className:
      "pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex w-full flex-col items-center space-y-4 sm:items-end",
      children: /* @__PURE__ */ jsx(Transition, {
        show:
          !!(flash_message == null ? void 0 : flash_message.type) && visible,
        as: Fragment$1,
        enter: "transform ease-out duration-300 transition",
        enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
        enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx("div", {
          className:
            "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-300",
          children: /* @__PURE__ */ jsx("div", {
            className: "p-4",
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex items-start",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "flex-shrink-0",
                  children: [
                    flash_message.type === "success" &&
                      /* @__PURE__ */ jsx(IconCircleCheck, {
                        className: "stroke-[1.25] text-emerald-500 lg:mt-0.5",
                      }),
                    flash_message.type === "error" &&
                      /* @__PURE__ */ jsx(IconAlertCircle, {
                        className: "stroke-[1.25] text-rose-500 lg:mt-0.5",
                      }),
                    flash_message.type === "info" &&
                      /* @__PURE__ */ jsx(IconExclamationCircle, {
                        className: "stroke-[1.25] text-sky-500 lg:mt-0.5",
                      }),
                    flash_message.type === "warning" &&
                      /* @__PURE__ */ jsx(IconAlertCircle, {
                        className: "stroke-[1.25] text-orange-500 lg:mt-0.5",
                      }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "ml-3 w-0 flex-1 pt-0.5",
                  children: [
                    /* @__PURE__ */ jsx("p", {
                      className: "text-sm font-medium text-black",
                      children: flash_message.title,
                    }),
                    /* @__PURE__ */ jsx("p", {
                      className: "mt-1 text-sm text-gray-500",
                      children: flash_message.message,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx("div", {
                  className: "ml-4 flex flex-shrink-0",
                  children: /* @__PURE__ */ jsxs("button", {
                    type: "button",
                    className:
                      "inline-flex rounded-md bg-white p-1 text-gray-500 ring-1 ring-gray-300 hover:bg-gray-100 hover:text-black focus:outline-none",
                    onClick: () => {
                      setVisible(false);
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                      /* @__PURE__ */ jsx(IconX, {
                        className: "h-4 w-4",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function AppLayout({ header, children }) {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-slate-100",
    children: [
      /* @__PURE__ */ jsx(FlashMessage, {}),
      /* @__PURE__ */ jsx(Navbar, {}),
      header &&
        /* @__PURE__ */ jsx("header", {
          className: "bg-white shadow",
          children: /* @__PURE__ */ jsx("div", {
            className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
            children: header,
          }),
        }),
      /* @__PURE__ */ jsx("main", { children }),
    ],
  });
}
export { AppLayout as A };
