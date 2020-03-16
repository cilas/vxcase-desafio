# Api construída em laravel
Para a execução da api, certifique-se de que possue:
* Composer instalado
* Banco de dados MYSQL
* Criar uma database ( recomendo criar com o nome vxcase )

Antes de tudo, será necessário executar o comando abaixo para poder instalar as dependências necessárias:
```sh
composer install
```

### Migrations
Para a criação das tabelas, execute o comando:
```sh
php artisan migrate
```

Obs: A api foi construida utilizando o banco de dados MYSQL. Também será necessário criar a database ( recomendo criar com o nome vxcase).

### Seeders
A fins de testes, foi criado um arquivo de seeding para os produtos.
Para a criação dos produtos de teste, execute o comando:
```sh
php artisan db:seed
```

### Servidor Localhost
Para simular um servidor, execute o comando:
```sh
php artisan serve
```



## Rotas

| Verbo  | Rota | Descrição | POST | QUERY PARAM |
| ------ | ------ | ------ | ------ | ------ |
| GET | /api/products | Retorna todos os produtos cadastrados | ||
| GET | /api/orders | Retorna todas as vendas realizadas |||
| GET | /api/orders/{order_id} | Retorna as informações da venda || order_id|
| POST | /api/orders | Cadastra um pedido de venda | Array com os ids dos produtos desejados|

