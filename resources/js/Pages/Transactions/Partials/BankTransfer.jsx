import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Guides from "@/Pages/Transactions/Partials/Guides";

export default function BankTransfer({ transaction }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const vaNumber =
    transaction.payment_method?.va_number ||
    transaction.payment_method?.bill_key;

  return (
    <div className="mt-6 rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm">
      {/* Judul VA */}
      <h3 className="text-sm font-medium text-slate-700">
        {transaction.payment_method?.title} Virtual Account
      </h3>

      {/* VA Field */}
      <div className="mt-2 flex items-center justify-between rounded-lg border px-4 py-2.5">
        <span className="font-mono text-base font-semibold text-slate-900">
          {vaNumber}
        </span>
        <CopyToClipboard text={vaNumber} onCopy={() => setCopied(true)}>
          <button
            type="button"
            className="transition hover:opacity-80 focus:outline-none"
            aria-label="Copy virtual account number"
          >
            {copied ? (
              <IconCheck className="h-5 w-5 text-blue-600" />
            ) : (
              <IconCopy className="h-5 w-5 text-slate-500" />
            )}
          </button>
        </CopyToClipboard>
      </div>

      {/* Billing Number (opsional) */}
      {transaction.payment_method?.biller_code && (
        <div className="mt-4 text-sm text-slate-600">
          Billing Number:{" "}
          <strong>{transaction.payment_method.biller_code}</strong>
        </div>
      )}

      {/* Panduan Pembayaran */}
      <div className="mt-6 border-t pt-4">
        <Guides bank={transaction.payment_method.id} />
      </div>
    </div>
  );
}
