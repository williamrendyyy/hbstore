import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { useState } from "react";
import { IconShoppingCart } from "@tabler/icons-react";

export default function Navbar() {
  const { auth } = usePage().props;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  return (
    <nav className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <ApplicationLogo className="block h-9 w-auto fill-current text-slate-800" />
              </Link>
            </div>

            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink
                href={route("products.index")}
                active={route().current("products.*")}
              >
                Produk
              </NavLink>
            </div>
          </div>

          {auth.user ? (
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link
                className="flex items-center gap-x-2 text-slate-500"
                href={route("carts.index")}
              >
                <IconShoppingCart className="h-5 w-5 stroke-[1.5]" />
                <strong className="text-sm font-semibold">
                  {auth.user.cartCount || 0}
                </strong>
              </Link>
              <div className="relative ml-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-slate-500 transition duration-150 ease-in-out hover:text-slate-700 focus:outline-none"
                      >
                        {auth.user.name}

                        <svg
                          className="-mr-0.5 ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route("profile.edit")}>
                      Profil
                    </Dropdown.Link>
                    {auth.user.is_admin && (
                      <>
                        <Dropdown.Link href={route("products.list")}>
                          Daftar Produk
                        </Dropdown.Link>
                        <Dropdown.Link href={route("transactions.index")}>
                          Pesanan Pelanggan
                        </Dropdown.Link>
                      </>
                    )}
                    <Dropdown.Link href={route("dashboard")}>
                      Pesanan Saya
                    </Dropdown.Link>
                    <Dropdown.Link href={route("shipping-addresses.index")}>
                      Alamat Pengiriman
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route("logout")}
                      method="post"
                      as="button"
                    >
                      Keluar
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>
          ) : (
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink href={route("login")} active={route().current("login")}>
                Login
              </NavLink>
              <NavLink
                href={route("register")}
                active={route().current("register")}
              >
                Register
              </NavLink>
            </div>
          )}

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() =>
                setShowingNavigationDropdown((previousState) => !previousState)
              }
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 transition duration-150 ease-in-out hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={
                    !showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={
                    showingNavigationDropdown ? "inline-flex" : "hidden"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
        }
      >
        {auth.user ? (
          <>
            <div className="space-y-1 pb-3 pt-2">
              <ResponsiveNavLink
                href={route("products.index")}
                active={route().current("products.*")}
              >
                Produk
              </ResponsiveNavLink>
            </div>

            <div className="border-t border-slate-200 pb-1 pt-4">
              <div className="px-4">
                <div className="text-base font-medium text-slate-800">
                  {auth.user.name}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {auth.user.email}
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <ResponsiveNavLink href={route("profile.edit")}>
                  Profil
                </ResponsiveNavLink>
                {auth.user.is_admin && (
                  <>
                    <ResponsiveNavLink href={route("products.list")}>
                      Daftar Produk
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route("transactions.index")}>
                      Pesanan Pelanggan
                    </ResponsiveNavLink>
                  </>
                )}

                <ResponsiveNavLink href={route("dashboard")}>
                  Pesanan Saya
                </ResponsiveNavLink>
                <ResponsiveNavLink href={route("shipping-addresses.index")}>
                  Alamat Pengiriman
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  method="post"
                  href={route("logout")}
                  as="button"
                >
                  Keluar
                </ResponsiveNavLink>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-1 pb-3 pt-2">
              <ResponsiveNavLink
                href={route("products.index")}
                active={route().current("products.*")}
              >
                Produk
              </ResponsiveNavLink>
              <ResponsiveNavLink
                href={route("login")}
                active={route().current("login")}
              >
                Login
              </ResponsiveNavLink>
              <ResponsiveNavLink
                href={route("register")}
                active={route().current("register")}
              >
                Register
              </ResponsiveNavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
