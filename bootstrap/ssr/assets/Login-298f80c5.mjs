import { j as jsxs, a as jsx } from "../ssr.mjs";
import { useEffect } from "react";
import { C as Checkbox } from "./Checkbox-1d152efe.mjs";
import { G as Guest } from "./GuestLayout-329d36ce.mjs";
import { I as InputError } from "./InputError-3b072368.mjs";
import { I as InputLabel } from "./InputLabel-30cd5794.mjs";
import { P as PrimaryButton } from "./PrimaryButton-6ee7db62.mjs";
import { T as TextInput } from "./TextInput-a71275db.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 block", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-slate-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-end", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "rounded-md text-sm text-slate-600 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", disabled: processing, children: "Log in" })
      ] })
    ] })
  ] });
}
export {
  Login as default
};
