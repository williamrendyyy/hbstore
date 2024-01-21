import { a as jsx } from "../ssr.mjs";
import { forwardRef, useRef, useEffect } from "react";
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 " + className,
      ref: input
    }
  );
});
export {
  TextInput as T
};
