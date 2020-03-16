# DESAFIO VX CASE
Aplicação feita para o desafio da VX Case


### Escopo
* O cliente pediu uma aplicação para poder realizar as vendas de produtos da loja;
* Ele também quer poder visualizar as vendas que foram realizadas.

### Requisitos
* O Back deve ser uma API REST
* Modelar a tabela de vendas
* A venda tem que ter os produtos vendidos, data da compra
* Uma venda pode ter mais de um produto
* A única tela de cadastro que você precisa fazer é a de vendas, não precisa criar a tela de cadastro de produtos, somente a tabela no banco de dados. - Popule a tabela de produtos diretamente no banco;
* Um produto deve conter nome, preço e previsão de entrega (Dias). Todos obrigatórios (lembrando que você não vai criar a tela de cadastro, mas deve tratar isso no banco de dados);
* O banco de dados não pode permitir 2 produtos com mesma referência;
* O front fica a seu critério. Atualmente, trabalhamos com Angular mas, você pode usar javascript puro ou algum framework (React/Vue/Angular);
Considere sempre quantidade 1 para cada item adicionado na tela de venda;
* Os preços dos produtos sofrem atualização semanal, isso não pode interferir no valor das vendas registradas e de seus produtos. Modele o banco de dados de tal forma a tratar essa questão;




# API - construída em laravel (Instruções)

Para a execução da api, certifique-se de que possue:
* Composer instalado
* Banco de dados MYSQL
* Criar uma database ( recomendo criar com o nome vxcase )

Antes de tudo, será necessário executar o comando abaixo para poder instalar as dependências necessárias:
```sh
composer install
```

### Env

Copie o arquivo .env.example e renomei para .env
Dentro do arquivo, insira as configurações da conexão com a database.

Execute o comando abaixo para gerar o APP_KEY:
```sh
php artisan key:generate --show
```

O "--show" garante a saída da key gerada. Pro caso do comando não escrever diretamente no arquivo .env, você pode copiar a saída e inseri-lá manualmente no arquivo .env


### Migrations
Para a criação das tabelas, execute o comando:
```sh
php artisan migrate
```

Obs: A api foi construida utilizando o banco de dados MYSQL. Também será necessário criar a database ( recomendo criar com o nome vxcase).

Comando exemplo para criação da database. (Comando a ser executado no banco de dados)
```sh
CREATE DATABASE vxcase
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;
```



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



### Rotas

| Verbo  | Rota | Descrição | POST | QUERY PARAM |
| ------ | ------ | ------ | ------ | ------ |
| GET | /api/products | Retorna todos os produtos cadastrados | ||
| GET | /api/orders | Retorna todas as vendas realizadas |||
| GET | /api/orders/{order_id} | Retorna as informações da venda || order_id|
| POST | /api/orders | Cadastra um pedido de venda | Array com os ids dos produtos desejados|


# WEB
Aplicação web construída utilizando jquery e bootstrap. Consumindo a api feita para o desafio da VX Case para poder obter os produtos, as vendas e poder cadastrar uma nova venda.

Para iniciar a plaica, basta abrir primeiramente o arquivo index.html em algum navegador
Certifique-se de que o servidor da api está rodando. Caso altere a porta da api, alterar nos arquivos .js também.
