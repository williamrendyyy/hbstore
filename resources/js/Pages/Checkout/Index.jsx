import { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import PaymentMethod from "@/Pages/Checkout/Partials/PaymentMethod";
import Courier from "@/Pages/Checkout/Partials/Courier";
import ShippingInformation from "@/Pages/Checkout/Partials/ShippingInformation";
import ContactInformation from "@/Pages/Checkout/Partials/ContactInformation";
import { Head, router } from "@inertiajs/react";
import OrderSummary from "@/Pages/Checkout/Partials/OrderSummary";

const paymentMethods = [
  {
    id: "bni",
    type: "bank_transfer",
    title: "BNI",
    description: "BNI Virtual Account",
    method: "BANK",
  },
  // {
  //   id: "mandiri",
  //   type: "echannel",
  //   title: "Mandiri",
  //   description: "Mandiri dengan Biller",
  //   method: "BANK",
  // },
  {
    id: "gopay",
    type: "gopay",
    title: "Gopay",
    description: "Gopay dengan QR Code",
    method: "E-Wallet",
  },
];

export default function Index() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0]
  );
  const [selectedCourier, setSelectedCourier] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);

  function confirmOrder(e) {
    e.preventDefault();

    // Validasi sebelum submit
    if (!selectedCourier || !selectedCourier.id) {
      alert("Silakan pilih kurir terlebih dahulu.");
      return;
    }

    if (!selectedService || !selectedService.cost) {
      alert("Silakan pilih layanan pengiriman.");
      return;
    }

    if (!selectedPaymentMethod || !selectedPaymentMethod.id) {
      alert("Silakan pilih metode pembayaran.");
      return;
    }

    // Submit data ke server
    router.post(route("checkout.store"), {
      payment_method: selectedPaymentMethod,
      courier: selectedCourier,
      service: selectedService,
    });
  }

  return (
    <div>
      <Head title="Checkout" />
      <main className="mx-auto max-w-7xl px-4 pb-5 pt-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form
            onSubmit={confirmOrder}
            className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8"
          >
            <div>
              <ContactInformation />
              <ShippingInformation />
              <Courier
                {...{
                  selectedService,
                  setSelectedService,
                  selectedCourier,
                  setSelectedCourier,
                  services,
                  setServices,
                }}
              />
              <PaymentMethod
                {...{
                  selectedPaymentMethod,
                  setSelectedPaymentMethod,
                  paymentMethods,
                }}
              />
            </div>

            <OrderSummary shipping={selectedService?.cost} />
          </form>
        </div>
      </main>
    </div>
  );
}

Index.layout = (page) => (
  <AppLayout
    header={
      <h2 className="text-center text-xl font-semibold leading-tight text-slate-800">
        Checkout
      </h2>
    }
    children={page}
  />
);
