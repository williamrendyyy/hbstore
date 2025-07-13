import { IconCheck, IconChevronDown, IconLoader2 } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { usePage } from "@inertiajs/react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import axios from "axios";

export default function Courier({
  services,
  setServices,
  selectedService,
  setSelectedService,
  selectedCourier,
  setSelectedCourier,
}) {
  const { shipping_address, total_weight, couriers } = usePage().props;
  const [loading, setLoading] = useState(false);

  async function chooseCourier(courier) {
    setSelectedCourier(courier);
    setLoading(true);

    const destination =
      shipping_address?.subdistrict_id || shipping_address?.city_id;
    const destination_type = shipping_address?.subdistrict_id
      ? "subdistrict"
      : "city";

    if (!destination) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(route("check-postage"), {
        courier: courier.id,
        destination,
        destination_type,
        weight: total_weight,
      });

      setServices(data);
      setSelectedService(data[0]);
    } catch (error) {
      console.error("Gagal mengambil layanan pengiriman", error);
    } finally {
      setLoading(false);
    }
  }

  function chooseService(service) {
    setSelectedService(service);
  }

  return (
    <div className="mt-10 border-t border-slate-200 pt-10">
      <h2 className="text-lg font-medium text-slate-900">Pilih Kurir</h2>

      <div className="mt-4 space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
        {/* Courier Dropdown */}
        <div className="relative">
          <Listbox value={selectedCourier} onChange={chooseCourier}>
            {({ open }) => (
              <>
                <div className="flex w-full divide-x divide-slate-200 overflow-hidden rounded-md border">
                  <div className="inline-flex flex-1 items-center gap-x-1.5 bg-white px-3 py-2 text-slate-900">
                    <p className="text-sm font-semibold">
                      {selectedCourier?.name || "Pilih kurir"}
                    </p>
                  </div>
                  <Listbox.Button className="bg-white px-2 py-2.5 hover:bg-slate-100 focus:outline-none">
                    <IconChevronDown className="h-5 w-5 text-slate-900" />
                  </Listbox.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    {couriers.map((courier) => (
                      <Listbox.Option
                        key={courier.id}
                        value={courier}
                        className={({ active }) =>
                          clsx(
                            active
                              ? "bg-blue-600 text-white"
                              : "text-slate-900",
                            "cursor-default select-none p-4 text-sm"
                          )
                        }
                      >
                        {({ selected, active }) => (
                          <div className="flex flex-col">
                            <div className="flex justify-between">
                              <p
                                className={clsx(
                                  "uppercase",
                                  selected ? "font-semibold" : "font-normal"
                                )}
                              >
                                {courier.code}
                              </p>
                              {selected && (
                                <IconCheck
                                  className={`h-5 w-5 ${
                                    active ? "text-white" : "text-blue-600"
                                  }`}
                                />
                              )}
                            </div>
                            <p
                              className={clsx(
                                "mt-2",
                                active ? "text-blue-200" : "text-slate-500"
                              )}
                            >
                              {courier.name}
                            </p>
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </>
            )}
          </Listbox>
        </div>

        {/* Loader */}
        <div className="flex items-center justify-center">
          {loading && (
            <IconLoader2 className="h-6 w-6 animate-spin text-slate-400" />
          )}
        </div>

        {/* Service Dropdown */}
        {!loading && services.length > 0 && (
          <div className="relative sm:col-span-2">
            <Listbox value={selectedService} onChange={chooseService}>
              {({ open }) => (
                <>
                  <div className="flex w-full divide-x divide-slate-200 overflow-hidden rounded-md border">
                    <div className="inline-flex flex-1 items-center gap-x-1.5 bg-white px-3 py-2 text-slate-900">
                      <p className="text-sm font-semibold">
                        {selectedService?.name || "Pilih layanan"}
                      </p>
                    </div>
                    <Listbox.Button className="bg-white px-2 py-2.5 hover:bg-slate-100 focus:outline-none">
                      <IconChevronDown className="h-5 w-5 text-slate-900" />
                    </Listbox.Button>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      {services.map((service, i) => (
                        <Listbox.Option
                          key={service.id || i}
                          value={service}
                          className={({ active }) =>
                            clsx(
                              active
                                ? "bg-blue-600 text-white"
                                : "text-slate-900",
                              "cursor-default select-none p-4 text-sm"
                            )
                          }
                        >
                          {({ selected, active }) => (
                            <div className="flex flex-col">
                              <div className="flex justify-between">
                                <p
                                  className={
                                    selected ? "font-semibold" : "font-normal"
                                  }
                                >
                                  Kurir {service.name}
                                </p>
                                {selected && (
                                  <IconCheck
                                    className={`h-5 w-5 ${
                                      active ? "text-white" : "text-blue-600"
                                    }`}
                                  />
                                )}
                              </div>
                              <div
                                className={clsx(
                                  "mt-2",
                                  active ? "text-blue-200" : "text-slate-500"
                                )}
                              >
                                {service.etd && `Perkiraan ${service.etd} hari`}
                                <div>Rp {service.cost}</div>
                              </div>
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </>
              )}
            </Listbox>
          </div>
        )}
      </div>
    </div>
  );
}
