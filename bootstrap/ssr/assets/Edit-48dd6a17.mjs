import { j as jsxs, a as jsx } from "../ssr.mjs";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import DeleteUserForm from "./DeleteUserForm-9095a36b.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm-25f51217.mjs";
import UpdateProfileInformation from "./UpdateProfileInformationForm-8a69625a.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "react";
import "@headlessui/react";
import "@tabler/icons-react";
import "./InputError-3b072368.mjs";
import "./InputLabel-30cd5794.mjs";
import "./TextInput-a71275db.mjs";
import "./PrimaryButton-6ee7db62.mjs";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    AppLayout,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
