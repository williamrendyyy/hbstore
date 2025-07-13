import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import { useState } from "react";
import Details from "@/Pages/Transactions/Partials/Details";
import TransactionBlock from "@/Pages/Transactions/Partials/TransactionBlock";
import Pagination from "@/Components/Pagination";

export default function Show() {
  const { data: transactions, meta, links } = usePage().props.transactions;
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);

  return (
    <>
      <Head title="Pesanan Pelanggan" />

      <Container>
        {/* Modal detail produk */}
        {details !== null && (
          <Details open={open} setOpen={setOpen} details={details} />
        )}

        <div className="py-8 lg:py-16">
          {transactions.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {transactions.map((transaction) => (
                  <TransactionBlock
                    key={transaction.id}
                    transaction={transaction}
                    setOpen={setOpen}
                    setDetails={setDetails}
                  />
                ))}
              </div>

              {meta.has_pages && (
                <div className="mt-8">
                  <Pagination links={links} />
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg bg-white p-6 text-center shadow">
              Tidak ada transaksi ditemukan.
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

Show.layout = (page) => (
  <AppLayout
    header={
      <h1 className="text-2xl font-semibold text-slate-900">
        Pesanan Pelanggan
      </h1>
    }
    children={page}
  />
);
