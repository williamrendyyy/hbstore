import { j as jsxs, a as jsx } from "../ssr.mjs";
import { useState } from "react";
import { A as AppLayout } from "./AppLayout-ea1496ac.mjs";
import PaymentMethod from "./PaymentMethod-09ee4827.mjs";
import Courier from "./Courier-7750b627.mjs";
import ShippingInformation from "./ShippingInformation-6ad4f34f.mjs";
import ContactInformation from "./ContactInformation-968def18.mjs";
import { Head, router } from "@inertiajs/react";
import OrderSummary from "./OrderSummary-07b2c558.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./ApplicationLogo-48cce105.mjs";
import "@headlessui/react";
import "@tabler/icons-react";
import "clsx";
const paymentMethods = [
  {
    id: "bni",
    type: "bank_transfer",
    title: "BNI",
    description: "BNI Virtual Account",
    method: "bank"
  },
  {
    id: "mandiri",
    type: "echannel",
    title: "Mandiri",
    description: "Mandiri dengan Biller",
    method: "bank"
  },
  {
    id: "gopay",
    type: "gopay",
    title: "Gopay",
    description: "Gopay dengan QR Code",
    method: "e-wallet"
  }
];
function Index() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0]
  );
  const [selectedCourier, setSelectedCourier] = useState({});
  const [selectedService, setSelectedService] = useState({});
  const [services, setServices] = useState([]);
  function confirmOrder(e) {
    e.preventDefault();
    router.post(route("checkout.store"), {
      payment_method: selectedPaymentMethod,
      courier: selectedCourier,
      service: selectedService
    });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Checkout" }),
    /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:max-w-none", children: [
      /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Checkout" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: confirmOrder,
          className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(ContactInformation, {}),
              /* @__PURE__ */ jsx(ShippingInformation, {}),
              /* @__PURE__ */ jsx(
                Courier,
                {
                  ...{
                    selectedService,
                    setSelectedService,
                    selectedCourier,
                    setSelectedCourier,
                    services,
                    setServices
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                PaymentMethod,
                {
                  ...{
                    selectedPaymentMethod,
                    setSelectedPaymentMethod,
                    paymentMethods
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx(OrderSummary, { shipping: selectedService == null ? void 0 : selectedService.cost })
          ]
        }
      )
    ] }) })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(
  AppLayout,
  {
    header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-slate-800", children: "Checkout" }),
    children: page
  }
);
export {
  Index as default
};
