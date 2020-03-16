<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->getProducts() as $product) {
            App\Product::create($product);
        }
    }

    public function getProducts()
    {
        return array(
            array(
                'name'                  => 'JAQUETA RX BOMB',
                'price'                 => 295,
                'delivery_estimate'     => 7,
                'img_url'               => 'https://www.rexpeita.com.br/image/cache/catalog/v2x2/v2x2__01_02-700x700.jpg'
            ),
            array(
                'name'                  => 'CAMISETA OUTLINE BOMB',
                'price'                 => 130,
                'delivery_estimate'     => 4,
                'img_url'               => 'https://www.rexpeita.com.br/image/cache/catalog/v2x2/modelo_07-700x700.jpg'
            ),
            array(
                'name'                  => 'CAMISETA URBAN PAINTING',
                'price'                 => 109,
                'delivery_estimate'     => 10,
                'img_url'               => 'https://www.rexpeita.com.br/image/cache/catalog/v2x2/urban-painting0-700x700.jpg'
            ),
            array(
                'name'                  => 'TÊNIS SUPERSTAR',
                'price'                 => 399.99,
                'delivery_estimate'     => 13,
                'img_url'               => 'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c57bcfef0dc74c1eae6bab2501172539_9366/Tenis_Superstar_Branco_FV2807_01_standard.jpg'
            ),
            array(
                'name'                  => 'KENNER + BK',
                'price'                 => 129.90,
                'delivery_estimate'     => 11,
                'img_url'               => 'https://kenner.vteximg.com.br/arquivos/influenciador_product_bk.png?v=637049476292700000'
            ),
        );
    }
}
