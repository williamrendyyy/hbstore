import { a as jsx } from "../ssr.mjs";
function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "label",
    {
      ...props,
      className: `mb-1 block text-sm font-medium text-slate-700 ` + className,
      children: value ? value : children
    }
  );
}
export {
  InputLabel as I
};
