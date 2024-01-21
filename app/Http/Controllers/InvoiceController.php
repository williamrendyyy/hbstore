<?php

namespace App\Http\Controllers;

use App\Models\Transaction;

class InvoiceController extends Controller
{
    public function download(Transaction $transaction)
    {
        $pdf = app('dompdf.wrapper')->loadView('print.invoice', ['transaction' => $transaction]);
        $name = $transaction->order_id . '.' . 'pdf';

        return $pdf->download($name);
    }
}
