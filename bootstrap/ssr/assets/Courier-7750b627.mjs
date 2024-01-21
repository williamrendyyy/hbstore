import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { IconChevronDown, IconCheck, IconLoader2 } from "@tabler/icons-react";
import { useState, Fragment as Fragment$1 } from "react";
import { usePage } from "@inertiajs/react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function Courier({
  services,
  setServices,
  selectedService,
  setSelectedService,
  selectedCourier,
  setSelectedCourier
}) {
  const { shipping_address, total_weight, couriers } = usePage().props;
  const [loading, setLoading] = useState(false);
  async function chooseCourier(e) {
    setSelectedCourier(e);
    setLoading(true);
    try {
      const { data } = await axios.post(route("check-postage"), {
        courier: e.id,
        destination: (shipping_address == null ? void 0 : shipping_address.subdistrict_id) ? shipping_address == null ? void 0 : shipping_address.subdistrict_id : shipping_address == null ? void 0 : shipping_address.city_id,
        destination_type: (shipping_address == null ? void 0 : shipping_address.subdistrict_id) ? "subdistrict" : "city",
        weight: total_weight
      });
      setServices(data);
      setLoading(false);
      setSelectedService(data[0]);
    } catch (e2) {
      setLoading(false);
    }
  }
  function chooseService(e) {
    setSelectedService(e);
  }
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-slate-200 pt-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-slate-900", children: "Pilih Kurir" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 items-center gap-2", children: [
      /* @__PURE__ */ jsx(Listbox, { value: selectedCourier, onChange: chooseCourier, children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Listbox.Label, { className: "sr-only", children: "Pilih layanan" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex w-full divide-x divide-slate-200 overflow-hidden rounded-md border", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex w-full items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-slate-900 shadow-sm", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: (selectedCourier == null ? void 0 : selectedCourier.name) || "Pilih layanan" }) }),
            /* @__PURE__ */ jsx(Listbox.Button, { className: "inline-flex items-center bg-white px-2 py-2.5 hover:bg-slate-100 focus:outline-none", children: /* @__PURE__ */ jsx(
              IconChevronDown,
              {
                className: "h-5 w-5 text-slate-900",
                "aria-hidden": "true"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            Transition,
            {
              show: open,
              as: Fragment$1,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsx(Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-slate-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: couriers.map((courier) => /* @__PURE__ */ jsx(
                Listbox.Option,
                {
                  className: ({ active }) => clsx(
                    active ? "bg-blue-600 text-white" : "text-slate-900",
                    "cursor-default select-none p-4 text-sm"
                  ),
                  value: courier,
                  children: ({ selected, active }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: clsx(
                            selected ? "font-semibold" : "font-normal",
                            "uppercase"
                          ),
                          children: courier.code
                        }
                      ),
                      selected ? /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: active ? "text-white" : "text-blue-600",
                          children: /* @__PURE__ */ jsx(
                            IconCheck,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            }
                          )
                        }
                      ) : null
                    ] }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: clsx(
                          active ? "text-blue-200" : "text-slate-500",
                          "mt-2"
                        ),
                        children: /* @__PURE__ */ jsx("div", { children: courier.name })
                      }
                    )
                  ] })
                },
                courier.id
              )) })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        IconLoader2,
        {
          className: `h-6 w-6 animate-spin text-slate-400 ${loading ? "block" : "hidden"}`
        }
      ),
      services.length && !loading > 0 ? /* @__PURE__ */ jsx(Listbox, { value: selectedService, onChange: chooseService, children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Listbox.Label, { className: "sr-only", children: "Pilih layanan" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex w-full divide-x divide-slate-200 overflow-hidden rounded-md border", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex w-full items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-slate-900 shadow-sm", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: (selectedService == null ? void 0 : selectedService.name) || "Pilih layanan" }) }),
            /* @__PURE__ */ jsx(Listbox.Button, { className: "inline-flex items-center bg-white px-2 py-2.5 hover:bg-slate-100 focus:outline-none", children: /* @__PURE__ */ jsx(
              IconChevronDown,
              {
                className: "h-5 w-5 text-slate-900",
                "aria-hidden": "true"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            Transition,
            {
              show: open,
              as: Fragment$1,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsx(Listbox.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-slate-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: services.map((service) => /* @__PURE__ */ jsx(
                Listbox.Option,
                {
                  className: ({ active }) => clsx(
                    active ? "bg-blue-600 text-white" : "text-slate-900",
                    "cursor-default select-none p-4 text-sm"
                  ),
                  value: service,
                  children: ({ selected, active }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: selected ? "font-semibold" : "font-normal",
                          children: [
                            "Kurir",
                            " ",
                            service.name
                          ]
                        }
                      ),
                      selected ? /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: active ? "text-white" : "text-blue-600",
                          children: /* @__PURE__ */ jsx(
                            IconCheck,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            }
                          )
                        }
                      ) : null
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: clsx(
                          active ? "text-blue-200" : "text-slate-500",
                          "mt-2"
                        ),
                        children: [
                          /* @__PURE__ */ jsx("div", { children: service.etd !== "" && `Perkiraan Waktu ${service.etd} hari` }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            "Rp",
                            " ",
                            service.cost
                          ] })
                        ]
                      }
                    )
                  ] })
                },
                service.id
              )) })
            }
          )
        ] })
      ] }) }) : null
    ] })
  ] });
}
export {
  Courier as default
};
