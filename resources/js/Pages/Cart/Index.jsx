import AppLayout from "@/Layouts/AppLayout";
import Container from "@/Components/Container";
import { Head } from "@inertiajs/react";
import OrderSummary from "@/Pages/Cart/Partials/OrderSummary";
import CartBlock from "@/Pages/Cart/Partials/CartBlock";
import CartEmpty from "@/Pages/Cart/Partials/CartEmpty";

export default function Index({ carts }) {
  return (
    <>
      <Head title="Keranjang Belanja" />
      <Container>
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            Keranjang Belanja
          </h2>

          {carts.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h3 id="cart-heading" className="sr-only">
                  Produk dalam keranjang
                </h3>

                <ul className="divide-y divide-slate-200 overflow-hidden rounded-lg border shadow-sm">
                  {carts.map((cart, idx) => (
                    <CartBlock key={idx} cart={cart} />
                  ))}
                </ul>
              </section>

              <aside className="lg:col-span-5">
                <OrderSummary />
              </aside>
            </div>
          ) : (
            <CartEmpty />
          )}
        </div>
      </Container>
    </>
  );
}

Index.layout = (page) => (
  <AppLayout
    header={
      <h1 className="text-xl font-semibold leading-tight text-slate-800">
        Keranjang Belanja
      </h1>
    }
    children={page}
  />
);
