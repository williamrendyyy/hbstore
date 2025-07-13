import {
  IconHomeCheck,
  IconPackages,
  IconRotateClockwise2,
  IconTruckDelivery,
} from "@tabler/icons-react";
import clsx from "clsx";

export default function Status({ transaction }) {
  const step = transaction.step ?? 0;

  const statusIcons = [
    {
      label: "Pending",
      icon: <IconRotateClockwise2 className="stroke-[1.25]" />,
      key: "pending",
    },
    {
      label: "Processing",
      icon: <IconPackages className="stroke-[1.25]" />,
      key: "processing",
    },
    {
      label: "Shipped",
      icon: <IconTruckDelivery className="stroke-[1.25]" />,
      key: "shipping",
    },
    {
      label: "Delivered",
      icon: <IconHomeCheck className="stroke-[1.25]" />,
      key: "delivered",
    },
  ];

  const activeStatuses = ["pending", "processing", "shipping", "delivered"];
  const currentIndex = activeStatuses.indexOf(transaction.order_status);

  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
      <h4 className="sr-only">Status</h4>

      <div className="mt-6">
        {/* Progress Bar */}
        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-2 bg-blue-600 transition-all duration-500"
            style={{
              width: `${((step * 2 + 1) / 8) * 100}%`,
            }}
          />
        </div>

        {/* Status Labels */}
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-slate-600 sm:grid">
          {statusIcons.map((status, index) => (
            <div
              key={status.key}
              className={clsx(
                index <= currentIndex ? "text-blue-600" : "",
                index === 0
                  ? "flex items-center gap-x-1.5"
                  : index === statusIcons.length - 1
                  ? "flex items-center justify-end gap-x-1.5"
                  : "flex items-center justify-center gap-x-1.5"
              )}
            >
              {status.icon}
              {status.label}
            </div>
          ))}
        </div>

        {/* Optional: Mobile fallback */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-center text-xs text-slate-500 sm:hidden">
          <div>{transaction.order_status}</div>
          <div>Status Pengiriman {step}/3</div>
        </div>
      </div>
    </div>
  );
}
