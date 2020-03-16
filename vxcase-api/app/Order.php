<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['delivery_estimate', 'total'];

    public function products()
    {
        return $this->hasMany('App\OrderProduct');
    }
}
