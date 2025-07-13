import Gopay from "@/Pages/Transactions/Partials/Gopay";
import BankTransfer from "@/Pages/Transactions/Partials/BankTransfer";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export default function BillingAddress({ transaction, paid }) {
  return (
    <div className="border-b border-gray-200 bg-white px-4 pt-4 sm:px-6 lg:px-8">
      {paid ? (
        <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-4 py-3 text-emerald-700">
          <IconCircleCheckFilled className="h-5 w-5 text-emerald-500" />
          <span className="text-sm font-medium">
            Pembayaran telah diterima.
          </span>
        </div>
      ) : (
        <div className="space-y-4 pb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Total:{" "}
            <span className="text-blue-600">Rp {transaction.gross_amount}</span>
          </h2>

          {/* Payment Instructions */}
          {transaction.payment_method?.method !== "e-wallet" && (
            <BankTransfer transaction={transaction} />
          )}

          {transaction.payment_method?.id === "gopay" && (
            <Gopay transaction={transaction} />
          )}
        </div>
      )}
    </div>
  );
}
