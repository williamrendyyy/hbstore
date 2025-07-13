import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Shipping from "@/Pages/Transactions/Partials/Shipping";
import BillingAddress from "@/Pages/Transactions/Partials/BillingAddress";
import { useState } from "react";
import Container from "@/Components/Container";
import ProductDetail from "@/Pages/Transactions/Partials/ProductDetail";
import Status from "@/Pages/Transactions/Partials/Status";

export default function Show({ transaction }) {
  const [paid, setPaid] = useState(
    transaction.transaction_status === "settlement"
  );

  Echo.private(`transactions.${transaction.customer_id}`).listen(
    "InvoicePaid",
    (event) => {
      if (
        event.transaction.transaction_status === "settlement" &&
        transaction.order_id === event.transaction.order_id
      ) {
        setPaid(true);
      }
    }
  );

  return (
    <>
      <Head title={transaction.order_id} />
      <Container>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            {/* Billing Address */}
            <BillingAddress transaction={transaction} paid={paid} />

            {/* Product Detail & Shipping */}
            <div className="border-t px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
              <div className="lg:col-span-7">
                <ProductDetail transaction={transaction} />
              </div>
              <div className="mt-8 lg:col-span-5 lg:mt-0">
                <Shipping transaction={transaction} />
              </div>
            </div>

            {/* Status */}
            <Status transaction={transaction} />
          </div>
        </div>
      </Container>
    </>
  );
}

Show.layout = (page) => (
  <AppLayout
    header={
      <div className="pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Detail Pesanan
        </h1>
        <div className="mt-2 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <dl className="flex flex-wrap items-center text-slate-500">
            <dt>Order number&nbsp;</dt>
            <dd className="font-medium text-slate-900">
              {page.props.transaction.order_id}
            </dd>
            <dt>
              <span className="sr-only">Date</span>
              <span className="mx-2 text-slate-400" aria-hidden="true">
                &middot;
              </span>
            </dt>
            <dd className="font-medium text-slate-900">
              <time dateTime={page.props.transaction.transaction_time}>
                {page.props.transaction.transaction_time}
              </time>
            </dd>
          </dl>

          <a
            href={route("invoices.download", [page.props.transaction])}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Lihat Invoice <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    }
    children={page}
  />
);
