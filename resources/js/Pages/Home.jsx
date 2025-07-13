import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Container from "@/Components/Container";

export default function Home({ products }) {
  return (
    <>
      <Head title="Holly Beast Store" />
      <Container>
        <div
          className="min-h-screen bg-cover bg-right bg-no-repeat pb-14"
          style={{ backgroundImage: "url('/bg.svg')" }}
        >
          <div className="mx-auto flex flex-col-reverse items-center px-6 pt-16 md:flex-row md:pt-24 lg:max-w-7xl">
            {/* LEFT TEXT */}
            <div className="w-full text-center md:w-1/2 md:text-left">
              <h1 className="mb-6 text-balance text-4xl font-extrabold text-slate-800 sm:text-5xl lg:text-6xl">
                Holly Beast Store
              </h1>
              <p className="mb-5 text-lg text-slate-600 md:text-xl">
                Click it, love it, buy it!
              </p>
              <a
                href={route("products.index")}
                active={route().current("products.*")}
                className="inline-block rounded-lg bg-sky-600 px-6 py-2 text-white transition hover:bg-blue-500"
              >
                Belanja Sekarang
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="mb-10 w-full md:mb-0 md:w-1/2">
              <img
                src="/img/sepatu.jpg"
                alt="Produk utama"
                className="mx-auto w-5/6 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

Home.layout = (page) => (
  <AppLayout
    header={
      <h2 className="text-xl font-semibold leading-tight text-slate-800">
        Hi everyone
      </h2>
    }
    children={page}
  />
);
