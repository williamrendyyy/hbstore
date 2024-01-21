import { a as jsx } from "../ssr.mjs";
function Container({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8", children });
}
export {
  Container as C
};
