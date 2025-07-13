export default function Gopay({ transaction }) {
  return (
    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
      {/* QR Code */}
      <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-lg border p-1 sm:mx-0">
        <img
          className="h-full w-full object-contain"
          src={transaction.payment_method?.qrcode}
          alt="QR Code"
        />
      </div>

      {/* Panduan Pembayaran */}
      <div className="prose max-w-full text-sm">
        <ol>
          <li>
            Open your <strong className="text-green-600">Gojek</strong> app and
            tap the <strong>Pay</strong> button on the home screen.
          </li>
          <li>Tap the Scan QR button.</li>
          <li>Scan the QR code above.</li>
          <li>
            Enter the amount to pay and tap <strong>Pay</strong>.
          </li>
          <li>
            Enter your <strong className="text-green-600">GoPay PIN</strong> to
            complete the payment.
          </li>
        </ol>
      </div>
    </div>
  );
}
