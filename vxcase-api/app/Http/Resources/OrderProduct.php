<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderProduct extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                    => $this->product_id,
            'name'                  => $this->name,
            'price'                 => $this->price,
            'delivery_estimate'     => $this->delivery_estimate,
            'quantity'              => $this->quantity,
            'img_url'               => $this->img_url,
            'created_at'            => $this->created_at,
            'updated_at'            => $this->updated_at,
        ];
    }
}
