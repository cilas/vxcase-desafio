<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $fillable = ['order_id', 'product_id', 'name', 'price', 'delivery_estimate', 'quantity', 'img_url'];

    public function order()
    {
        return $this->belongsTo('App\Order');
    }
}
