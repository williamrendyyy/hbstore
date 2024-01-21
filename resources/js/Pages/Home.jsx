import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import Container from "@/Components/Container";

export default function Home({ products }) {
  return (
    <>
      <Head title="Welcome to Online Store" />
      <Container>
        <div
          className="h-screen bg-cover bg-right pb-14"
          style={{ backgroundImage: "url('bg.svg')" }}
        >
          <div className="container mx-auto flex flex-col flex-wrap items-center px-6 pt-24 md:flex-row md:pt-48">
            <div className="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5">
              <h1 className="slide-in-bottom-h1 my-4 text-center text-3xl font-bold leading-tight text-black  md:text-left md:text-5xl">
                Gerastore
              </h1>
              <p className="slide-in-bottom-subtitle mb-8 text-center text-base leading-normal md:text-left md:text-2xl">
                Parfum Murah Pontianak
              </p>
            </div>

            <div className="w-full overflow-y-hidden py-6 xl:w-3/5">
              <img
                className="slide-in-bottom mx-auto w-5/6 rounded-[44px] lg:mr-0"
                src="/img/parfumwp.jpg"
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
        Start Shopping
      </h2>
    }
    children={page}
  />
);
