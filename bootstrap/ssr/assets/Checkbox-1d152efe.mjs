import { a as jsx } from "../ssr.mjs";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-slate-300 text-blue-600 shadow-sm focus:ring-blue-500 " + className
    }
  );
}
export {
  Checkbox as C
};
