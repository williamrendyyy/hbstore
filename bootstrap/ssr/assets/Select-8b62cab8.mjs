import { j as jsxs, a as jsx } from "../ssr.mjs";
function Select({ placeholder, options, ...props }) {
  return /* @__PURE__ */ jsxs(
    "select",
    {
      className: "w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
      ...props,
      children: [
        /* @__PURE__ */ jsx("option", { value: "", children: placeholder ? placeholder : "Select an option" }),
        options.map((option, index) => /* @__PURE__ */ jsx("option", { value: option.id, children: option.name }, index))
      ]
    }
  );
}
export {
  Select as S
};
