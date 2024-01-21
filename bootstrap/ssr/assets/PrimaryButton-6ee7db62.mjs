import { a as jsx } from "../ssr.mjs";
function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-slate-900 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
export {
  PrimaryButton as P
};
