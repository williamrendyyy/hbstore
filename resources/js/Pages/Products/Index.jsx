import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Container from "@/Components/Container";
import ProductBlock from "@/Pages/Products/Partials/ProductBlock";
import Pagination from "@/Components/Pagination";

export default function Index({ title }) {
  const { data: products, meta, links } = usePage().props.products;

  return (
    <>
      <Head title={title} />
      <Container>
        <div className="py-12 lg:py-20">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="transform overflow-hidden rounded-2xl bg-white transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <ProductBlock product={product} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {meta.has_pages && (
            <div className="mt-12 flex justify-center">
              <Pagination links={links} />
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

Index.layout = (page) => (
  <AppLayout
    header={
      <div className="text-center">
        <h2 className="text-xl font-semibold leading-tight text-slate-800">
          {page.props.title}
        </h2>
      </div>
    }
    children={page}
  />
);
