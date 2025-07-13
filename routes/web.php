<?php


use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
Route::get('/', HomeController::class)->name('home');

use App\Http\Controllers\LocationController;
Route::get('cities/{province}', [LocationController::class, 'city'])->name('location.city');
Route::get('sub-district/{city}', [LocationController::class, 'subdistrict'])->name('location.subdistrict');

use App\Http\Controllers\TransactionController;
Route::put('transactions/{transaction}/update', [TransactionController::class, 'update'])->name('transactions.update');
Route::get('transactions/list', [TransactionController::class, 'index'])->name('transactions.index');
Route::get('transactions/{transaction}', [TransactionController::class, 'show'])->name('transactions.show');

use App\Http\Controllers\CheckoutController;
Route::middleware('auth')->group(function () {
    Route::get('checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::post('checkout', [CheckoutController::class, 'create'])->name('checkout.create');
    Route::post('checkout/process', [CheckoutController::class, 'store'])->name('checkout.store');
});

use App\Http\Controllers\CheckPostageController;
Route::post('check-postage', CheckPostageController::class)->name('check-postage');

use App\Http\Controllers\InvoiceController;
Route::get('invoices/{transaction}', [InvoiceController::class, 'download'])->name('invoices.download');

use App\Http\Controllers\CartController;
Route::resource('carts', CartController::class)
    ->except(['edit', 'create', 'show'])
    ->middleware('auth');

use App\Http\Controllers\CategoryController;
Route::resource('categories', CategoryController::class)
    ->scoped(['category' => 'slug']);

use App\Http\Controllers\ProductController;
Route::get('products/list', [ProductController::class, 'list'])->name('products.list');
Route::resource('products', ProductController::class)
    ->scoped(['product' => 'slug']);

use App\Http\Controllers\ShippingAddressController;
Route::resource('shipping-addresses', ShippingAddressController::class)
    ->except('show')
    ->middleware('auth');

use App\Http\Controllers\DashboardController;
Route::get('dashboard', DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

use App\Http\Controllers\ProfileController;
Route::middleware('auth')->group(function () {
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

use App\Http\Controllers\NotificationHandlerController;
Route::post('api/notification/handling', [NotificationHandlerController::class, 'handling']);

require __DIR__ . '/auth.php';
