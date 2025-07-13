import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Details({ open, setOpen, details }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-2xl bg-white px-4 pb-5 pt-6 text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6">
                <Dialog.Title className="mb-4 text-lg font-semibold text-slate-800">
                  Detail Produk
                </Dialog.Title>

                <div className="flex flex-col gap-3">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        className="h-14 w-14 rounded-md object-cover"
                        src={detail.image}
                        alt={detail.name}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">
                          {detail.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          Rp {detail.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
