import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import { useForm, Head, router } from "@inertiajs/react";
import { C as Container } from "./Container-1c7dc083.mjs";
import { I as InputLabel } from "./InputLabel-30cd5794.mjs";
import { useState } from "react";
import { T as TextInput } from "./TextInput-a71275db.mjs";
import { IconX, IconPhoto, IconSquareRoundedPlusFilled, IconTrash } from "@tabler/icons-react";
import { NumericFormat } from "react-number-format";
import { P as PrimaryButton } from "./PrimaryButton-6ee7db62.mjs";
import { I as InputError } from "./InputError-3b072368.mjs";
import { S as Select } from "./Select-8b62cab8.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "@headlessui/react";
function UploadImage({ setData, errors }) {
  const [imagePreview, setImagePreview] = useState(null);
  const onFileChange = (e) => {
    setData("picture", e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  return /* @__PURE__ */ jsx("div", { className: "max-w-xl", children: imagePreview ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setImagePreview(""),
          className: "absolute right-0 top-0 mr-4 mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900/50 px-2 py-1 text-xs uppercase text-white hover:bg-gray-900/70",
          children: /* @__PURE__ */ jsx(IconX, { className: "h-6 w-6 stroke-2" })
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mb-4 w-full rounded-lg",
          width: "1280",
          height: "720",
          src: imagePreview,
          alt: "Preview"
        }
      )
    ] }),
    (errors == null ? void 0 : errors.picture) && /* @__PURE__ */ jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsx(InputError, { message: errors.picture }) })
  ] }) : /* @__PURE__ */ jsxs("label", { htmlFor: "picture", className: "mb-6 block", children: [
    /* @__PURE__ */ jsx("div", { className: "hover:border-primary-500 flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 transition hover:bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx(IconPhoto, { className: "inline h-6 w-6 stroke-[1.5] text-gray-400" }),
      /* @__PURE__ */ jsx("div", { className: "my-2 text-sm text-gray-800", children: "Upload image" }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl text-gray-500", children: "720 x 720 (1:1)" })
    ] }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        onChange: onFileChange,
        name: "picture",
        id: "picture",
        className: "sr-only"
      }
    )
  ] }) });
}
function Form({ categories, product, page_settings }) {
  var _a;
  const { data, setData, errors, post, processing, reset } = useForm({
    category_id: product.category_id || 0,
    picture: "",
    name: product.name || 0,
    weight: product.weight || 0,
    slug: product.slug || 0,
    description: product.description || 0,
    price: product.price || 0,
    _method: page_settings.method
  });
  const [inputFields, setInputFields] = useState(
    product.variations && ((_a = product.variations) == null ? void 0 : _a.length) > 0 ? product.variations : [
      {
        attribute_1: "",
        attribute_2: "",
        price: "",
        stock: "",
        weight: data.weight
      }
    ]
  );
  function submit(e) {
    e.preventDefault();
    router.post(
      page_settings.url,
      {
        ...data,
        variations: inputFields
      },
      {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setInputFields([
            {
              attribute_1: "",
              attribute_2: "",
              price: "",
              stock: "",
              weight: 0
            }
          ]);
        }
      }
    );
  }
  function handleInputChange(index, event) {
    let data2 = [...inputFields];
    data2[index][event.target.name] = event.target.value;
    setInputFields(data2);
  }
  function onChange(event) {
    setData(event.target.name, event.target.value);
  }
  function handleAddFields() {
    let newfield = {
      attribute_1: "",
      attribute_2: "",
      price: 0,
      weight: 0,
      stock: 0
    };
    setInputFields([...inputFields, newfield]);
  }
  function handleRemoveFields(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Product" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "mt-16 rounded-xl bg-white p-4 shadow", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(UploadImage, { errors, setData }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 max-w-xl", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "w-full",
            onChange,
            name: "name",
            value: data.name
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 max-w-xl", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "weight", value: "Weight" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            placeholder: 200,
            className: "w-full",
            onChange,
            name: "weight",
            value: data.weight
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.weight })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 max-w-xs", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "price", value: "Price" }),
        /* @__PURE__ */ jsx(
          NumericFormat,
          {
            className: "w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
            name: "price",
            prefix: "Rp ",
            thousandSeparator: true,
            "aria-describedby": "price-currency",
            allowNegative: false,
            decimalScale: 2,
            value: data.price,
            onValueChange: (values, sourceInfo) => {
              setData("price", values.floatValue);
            }
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.price })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 max-w-xl", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "category_id",
            value: "Category"
          }
        ),
        /* @__PURE__ */ jsx(
          Select,
          {
            name: "category_id",
            id: "category_id",
            options: categories,
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6",
            value: data.category_id,
            onChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.category_id })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 max-w-xl", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "description",
            value: "Description"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            rows: 4,
            name: "description",
            id: "description",
            className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6",
            value: data.description,
            onChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "variation",
              value: "Variations"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "text-blue-500",
              type: "button",
              onClick: () => handleAddFields(),
              children: /* @__PURE__ */ jsx(IconSquareRoundedPlusFilled, {})
            }
          )
        ] }),
        inputFields.map((inputField, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mb-2 grid grid-cols-12 gap-2",
            children: [
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "col-span-2 h-9 w-full",
                  type: "text",
                  name: "attribute_1",
                  placeholder: "Attribute 1",
                  value: inputField.attribute_1,
                  onChange: (event) => handleInputChange(index, event)
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "col-span-2 h-9 w-full",
                  type: "text",
                  name: "attribute_2",
                  placeholder: "Attribute 2",
                  value: inputField.attribute_2,
                  onChange: (event) => handleInputChange(index, event)
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "col-span-2 h-9 w-full",
                  type: "number",
                  name: "price",
                  placeholder: "Price",
                  value: inputField.price,
                  onChange: (event) => handleInputChange(index, event)
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "col-span-2 h-9 w-full",
                  type: "number",
                  name: "stock",
                  placeholder: "Stock",
                  value: inputField.stock,
                  onChange: (event) => handleInputChange(index, event)
                }
              ),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  className: "col-span-2 h-9 w-full",
                  type: "number",
                  name: "weight",
                  placeholder: "Satuan Gram",
                  value: inputField.weight,
                  onChange: (event) => handleInputChange(index, event)
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "flex h-9 w-9 rounded bg-gray-900 text-sm font-medium text-white",
                  onClick: () => handleRemoveFields(index),
                  children: /* @__PURE__ */ jsx(IconTrash, { className: "m-auto h-4 w-4 stroke-1" })
                }
              ) })
            ]
          },
          index
        ))
      ] }) }),
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Submit" })
    ] }) }) })
  ] });
}
Form.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: page.props.page_settings.title }),
    children: page
  }
);
export {
  Form as default
};
