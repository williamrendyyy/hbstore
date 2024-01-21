import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { useForm, Head } from "@inertiajs/react";
import { I as InputLabel } from "./InputLabel-30cd5794.mjs";
import { I as InputError } from "./InputError-3b072368.mjs";
import { P as PrimaryButton } from "./PrimaryButton-6ee7db62.mjs";
import { Transition } from "@headlessui/react";
import { C as Container } from "./Container-1c7dc083.mjs";
import { S as Select } from "./Select-8b62cab8.mjs";
import { useState } from "react";
import { C as Checkbox } from "./Checkbox-1d152efe.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "@tabler/icons-react";
function Form({ location, shipping_address, page_setting }) {
  const { data, setData, processing, recentlySuccessful, post, errors } = useForm({
    address: shipping_address.address,
    province: shipping_address.province_id,
    city: shipping_address.city_id,
    subdistrict: shipping_address.subdistrict_id,
    is_default: shipping_address.is_default,
    _method: page_setting.method
  });
  const [cities, setCities] = useState(location.cities ?? []);
  const [subdistricts, setSubdistricts] = useState(
    location.subdistricts ?? []
  );
  const submit = (e) => {
    e.preventDefault();
    post(page_setting.url);
  };
  const onProvinceChange = async (e) => {
    setData("province", e.target.value);
    const response = await axios.get(
      route("location.city", e.target.value)
    );
    setCities(response.data);
  };
  const onCityChange = async (e) => {
    setData("city", e.target.value);
    const response = await axios.get(
      route("location.subdistrict", e.target.value)
    );
    setSubdistricts(response.data);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Shipping Address" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: " py-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-xl rounded-lg bg-white p-6 shadow", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "address", value: "Address" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "address",
            className: "mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
            value: data.address,
            onChange: (e) => setData("address", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            className: "mt-2",
            message: errors.address
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "province",
            value: "Province"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            id: "province",
            placeholder: "Select Province",
            options: location.provinces,
            value: data.province,
            onChange: onProvinceChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            className: "mt-2",
            message: errors.province
          }
        )
      ] }),
      cities.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "city", value: "City" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            placeholder: "Select city",
            options: cities,
            value: data.city,
            onChange: onCityChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            className: "mt-2",
            message: errors.city
          }
        )
      ] }),
      subdistricts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "subdistrict",
            value: "Subdistrict"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            placeholder: "Select subdistrict",
            options: subdistricts,
            value: data.subdistrict,
            onChange: (e) => setData(
              "subdistrict",
              e.target.value
            ),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            className: "mt-2",
            message: errors.subdistrict
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "is_default",
          className: "flex items-center gap-x-2",
          children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "is_default",
                name: "is_default",
                value: data.is_default,
                checked: data.is_default,
                onChange: (e) => setData(
                  "is_default",
                  e.target.checked
                )
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Default Address" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enterFrom: "opacity-0",
            leaveTo: "opacity-0",
            className: "transition ease-in-out",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: "Saved." })
          }
        )
      ] })
    ] }) }) }) })
  ] });
}
Form.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Shipping Address" }),
    children: page
  }
);
export {
  Form as default
};
