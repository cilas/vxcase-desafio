<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Product;
use App\OrderProduct;
use App\Http\Resources\Order as OrderResource;
use App\Http\Resources\OrderProduct as OrderProductResource;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrderResource::collection(Order::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $products = array();
        $max_delivery_estimate = 0;
        $total = 0;

        foreach ($request->input('products') as $product_id) {
            $product_db = Product::find($product_id);

            $products[] = new OrderProduct([
                'product_id'                    => $product_id,
                'name'                          => $product_db->name,
                'price'                         => $product_db->price,
                'delivery_estimate'             => $product_db->delivery_estimate,
                'quantity'                      => $product_db->quantity ? : 1,
                'img_url'                       => $product_db->img_url
            ]);

            // total do pedido, soma dos produtos
            $total += ($product_db->price * ($product_db->quantity ? : 1));
            //busca a maior previsão de entrega
            $max_delivery_estimate = $product_db->delivery_estimate > $max_delivery_estimate ? $product_db->delivery_estimate : $max_delivery_estimate;
        }

        $order = Order::create([
            'delivery_estimate' => $max_delivery_estimate,
            'total'             => $total
        ]);

        $order->products()->saveMany($products);

        return new OrderResource(Order::findOrfail($order->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new OrderResource(Order::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
