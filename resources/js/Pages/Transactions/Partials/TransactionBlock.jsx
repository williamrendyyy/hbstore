import { IconHomeCheck } from "@tabler/icons-react";
import { router } from "@inertiajs/react";
import clsx from "clsx";

export default function TransactionBlock({ transaction, setOpen, setDetails }) {
  const statusOptions = [
    { id: 1, name: "Pending", color: "text-gray-500" },
    { id: 2, name: "Processing", color: "text-yellow-500" },
    { id: 3, name: "Shipping", color: "text-blue-500" },
    { id: 4, name: "Delivered", color: "text-emerald-600" },
  ];

  function setStatus(status, transaction) {
    router.put(
      route("transactions.update", [transaction]),
      { order_status: status },
      { preserveScroll: true, preserveState: true }
    );
  }

  const currentStatus = statusOptions.find(
    (s) => s.id === transaction.order_status
  );

  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg sm:p-6">
      {/* Info */}
      <div className="space-y-5 text-sm text-slate-700">
        {/* Nama + Status */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-slate-500">Nama Pelanggan:</p>
            <p className="text-base font-semibold">
              {transaction.customer.name}
            </p>
          </div>
          {transaction.order_status === 4 && (
            <div className="flex items-center gap-1 text-sm font-medium text-emerald-600">
              <IconHomeCheck size={20} className="stroke-[1.5]" />
              Terkirim
            </div>
          )}
        </div>

        {/* Order ID */}
        <div>
          <p className="text-slate-500">Order ID:</p>
          <p className="text-xs text-slate-700">{transaction.order_id}</p>
        </div>

        {/* Alamat */}
        <div>
          <p className="text-slate-500">Alamat:</p>
          <div className="mt-1 text-xs leading-snug text-slate-600">
            <p>{transaction.shipping_information?.address.detail}</p>
            <p>
              {transaction.shipping_information?.address.city},{" "}
              {transaction.shipping_information?.address.province}{" "}
              {transaction.shipping_information?.address.subdistrict}
            </p>
          </div>
        </div>

        {/* Total */}
        <div>
          <p className="text-slate-500">Total:</p>
          <p className="text-base font-semibold text-slate-800">
            Rp {transaction.gross_amount}
          </p>
        </div>

        {/* Waktu */}
        <div>
          <p className="text-slate-500">Waktu Transaksi:</p>
          <p className="text-xs text-slate-600">
            {transaction.transaction_time}
          </p>
        </div>

        {/* Status Pembayaran */}
        <div>
          <p className="text-slate-500">Status Pembayaran:</p>
          <p className="text-xs font-medium capitalize text-slate-600">
            {transaction.transaction_status}
          </p>
        </div>

        {/* Select Status */}
        <div>
          <label className="mb-1 block text-slate-500">
            Status Pengiriman:
          </label>
          <select
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setStatus(e.target.value, transaction)}
            value={transaction.order_status}
          >
            {statusOptions.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Button Detail */}
      <div className="mt-6">
        <button
          onClick={() => {
            setDetails(transaction.details);
            setOpen(true);
          }}
          className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-gray-100 hover:shadow"
        >
          Lihat Detail Transaksi
        </button>
      </div>
    </div>
  );
}

// import { IconHomeCheck } from "@tabler/icons-react";
// import { router } from "@inertiajs/react";

// export default function TransactionBlock({ transaction, setOpen, setDetails }) {
//   function setStatus(status, transaction) {
//     router.put(
//       route("transactions.update", [transaction]),
//       {
//         order_status: status,
//       },
//       {
//         preserveScroll: true,
//         preserveState: true,
//       }
//     );
//   }
//   return (
//     <div className="flex h-[35rem] flex-col overflow-hidden rounded-lg bg-white p-4 text-sm shadow">
//       <div className="flex-1">
//         <div className="mb-5 flex justify-between">
//           <div>
//             <span className="text-gray-500">Nama Pelanggan:</span>
//             <div>{transaction.customer.name}</div>
//           </div>
//           {transaction.order_status === 4 && (
//             <IconHomeCheck className="stroke-[1.25] text-emerald-500" />
//           )}
//         </div>
//         <div className="mb-5">
//           <span>Alamat:</span>

//           <div className="text-xs text-gray-500">
//             <div>
//               {transaction.shipping_information?.address.province} /{" "}
//               {transaction.shipping_information?.address.city} /{" "}
//               {transaction.shipping_information?.address.subdistrict}
//             </div>
//             <div>{transaction.shipping_information?.address.detail}</div>
//           </div>
//         </div>
//         <div className="mb-5">
//           <span>Order ID:</span>
//           <div className="text-xs text-gray-500">{transaction.order_id}</div>
//         </div>
//         <div className="mb-5">
//           <span>Total:</span>
//           <div className="text-xs text-gray-500">
//             Rp {transaction.gross_amount}
//           </div>
//         </div>
//         <div className="mb-5">
//           <span>Waktu Transaksi:</span>
//           <div className="text-xs text-gray-500">
//             {transaction.transaction_time}
//           </div>
//         </div>
//         <div className="mb-5">
//           <span>Status Pembayaran:</span>
//           <div className="text-xs text-gray-500">
//             {transaction.transaction_status}
//           </div>
//         </div>
//         <div className="mb-5">
//           <span className="mb-1 block">Status Pengiriman:</span>
//           <select
//             className="rounded border-gray-300 py-1 text-sm shadow-sm focus:outline-none"
//             onChange={(e) => setStatus(e.target.value, transaction)}
//             value={transaction.order_status}
//           >
//             {[
//               { id: 1, name: "Pending" },
//               { id: 2, name: "Processing" },
//               { id: 3, name: "Shipping" },
//               { id: 4, name: "Delivered" },
//             ].map((status) => (
//               <option value={status.id}>{status.name}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div>
//         <button
//           className="rounded border bg-gray-50 px-2 py-1 text-sm font-medium"
//           onClick={() => {
//             setDetails(transaction.details);
//             setOpen(true);
//           }}
//         >
//           Show detail
//         </button>
//       </div>
//     </div>
//   );
// }
