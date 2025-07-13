import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import {
  IconHomeCheck,
  IconPackages,
  IconRotateClockwise2,
  IconTruckDelivery,
} from "@tabler/icons-react";
import clsx from "clsx";
import Pagination from "@/Components/Pagination";

export default function Dashboard() {
  const { data: transactions, meta, links } = usePage().props.transactions;

  return (
    <>
      <Head title="Dashboard" />
      <div className="py-10">
        <Container>
          {transactions.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="space-y-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded border px-2 py-1 text-xs font-medium text-slate-700 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-[1.25]">
                        {transaction.order_status === "pending" && (
                          <IconRotateClockwise2 />
                        )}
                        {transaction.order_status === "processing" && (
                          <IconPackages />
                        )}
                        {transaction.order_status === "shipping" && (
                          <IconTruckDelivery />
                        )}
                        {transaction.order_status === "delivered" && (
                          <IconHomeCheck />
                        )}
                        {transaction.order_status === "pending"
                          ? "Menunggu Konfirmasi"
                          : transaction.order_status}
                      </span>
                      <span
                        className={clsx(
                          "text-sm font-semibold",
                          transaction.transaction_status === "settlement" &&
                            "text-green-500",
                          transaction.transaction_status === "pending" &&
                            "text-yellow-500",
                          transaction.transaction_status === "cancel" &&
                            "text-red-500",
                          transaction.transaction_status === "expiry" &&
                            "text-red-500"
                        )}
                      >
                        {transaction.transaction_status}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-slate-800">
                      Order #{transaction.order_id}
                    </h4>

                    <div className="text-sm text-slate-500">
                      {transaction.shipping.courier.id} -{" "}
                      {transaction.shipping.service.id} | Estimasi{" "}
                      {transaction.shipping.service.etd} hari
                    </div>

                    <div className="text-sm">
                      Total{" "}
                      <strong className="font-semibold text-slate-900">
                        Rp {transaction.gross_amount}
                      </strong>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <a
                        href={route("transactions.show", [transaction])}
                        className="rounded-md border bg-slate-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-slate-100"
                      >
                        Lihat Detail
                      </a>
                      <a
                        href={route("invoices.download", [transaction])}
                        className="rounded-md border bg-slate-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-slate-100"
                      >
                        Download Invoice
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {meta.has_pages && (
                <div className="mt-8">
                  <Pagination meta={meta} links={links} />
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg bg-white p-6 text-center text-slate-500 shadow-sm">
              Anda tidak memiliki transaksi.
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

Dashboard.layout = (page) => (
  <AppLayout
    header={
      <h2 className="text-xl font-semibold leading-tight text-slate-800">
        Pesanan
      </h2>
    }
    children={page}
  />
);
