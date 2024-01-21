<?php

namespace App\Models;

use App\Traits\HasStocks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class Variation extends Model
{
    use HasStocks;

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function getPicture($size = 400): string
    {
        return $this->picture !== null ?
            Storage::url($this->picture) :
            'https://placehold.co/' . $size . '/000000/FFFFFF/?font=source-sans-pro&text=' . $this->attribute_1 . ' ' . $this->attribute_2;
    }
}
