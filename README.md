# DESAFIO VX CASE
Aplicação feita para o desafio da VX Case


## Escopo
* O cliente pediu uma aplicação para poder realizar as vendas de produtos da loja;
* Ele também quer poder visualizar as vendas que foram realizadas.

## Requisitos
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
