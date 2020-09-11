//convert to float
const parseFloat4Calc = (numero) => isNaN(parseFloat(numero)) ? 0 : parseFloat(numero);

//cria o elemento da lista de produtos selecionados
const item_selecionado_element = (product_id, name, price) => $('.itens-selecionados').append(
    $('<li>', {
        class: 'list-group-item',
        text: `${name} - ${price}`,
        id: `list-group-item-${product_id}`
    })
);

//monta o layer do produto
const getProdutoLayer = (product) => $('<div>', {class: 'col-sm-6'})
    .append($('<img>', {
        class: 'img-fluid',
        src: product.img_url || './no-image.png',
        alt: product.name
    }))
    .append($('<p>')
        .append($('<input>',{
            type: 'checkbox',
            name: 'product',
            value: product.id,
            'data-prazo-entrega': product.delivery_estimate,
        }).on('click',addProdutoSelecionado))
        .append(` ${product.name}`)
    )
    .append($('<p>',{
        'data-price': product.price,
        text: product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }));
 
//exibe msg
function exibirMsgFinalizar(classe,texto) {
    $('#msg_finalizar').removeClass().addClass(classe).text(texto).slideDown('slow');

    setTimeout(() => {
        $('#msg_finalizar').slideUp('slow');
    }, 3000);
}

//calcula o total e o prazo de entrega
function calcularTotais() {
    let max_prazo_entrega = 0;
    let total_price = 0;

    $('input[type="checkbox"]:checked').each(function(indice, elemento) {
        max_prazo_entrega = Number($(elemento).data('prazo-entrega')) > max_prazo_entrega ? Number($(elemento).data('prazo-entrega')) : max_prazo_entrega;
        total_price += parseFloat4Calc($(elemento).parent().parent().find('[data-price]').data('price'));
    });

    total_price = total_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return {max_prazo_entrega, total_price};
}

//att os totais
function attTotais() {
    const totais = calcularTotais();

    $('#previsao_entrega').text(totais.max_prazo_entrega);
    $('#total_carrinho').text(totais.total_price);
}

//adiciona o produto selecionado
function addProdutoSelecionado() {
    const product_id = $(this).val();
    const content = $(this).parent().parent();

    if ($(this).prop('checked')) 
        item_selecionado_element(product_id, $(this).parent().text(), content.find('[data-price]').text());
    else 
        $(`#list-group-item-${product_id}`).remove();

    attTotais();
}

//busca os produtos na api
function getProdutos() {
    $.ajax({
        url: 'http://localhost//api/products',
        method: "GET",
        dataType: 'json',
        success: function(json) {
            loadProdutos(json.data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
}

//carrega os produtos
function loadProdutos(products) {
    for (const product of products) {
        $('.products').append(getProdutoLayer(product));
    }
}

// finaliza a compra enviando o pedido para a pai
function finalizarCompra(products) {
    $.ajax({
        url: 'http://localhost//api/orders',
        method: "POST",
        data: {products},
        dataType: 'json',
        success: function(json) {
            if (json.data) {
                exibirMsgFinalizar('alert alert-success', 'Compra realizada com sucesso!');

                location.replace('./orders/orders.html');
            } else {
                exibirMsgFinalizar('alert alert-danger', 'Falha ao tentar finalizar o compra.');
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
}

//fecha o carrinho e tenta finalizar a compra
function fecharCarrinho() {
    let products_ids = [];
    $('input[type="checkbox"]:checked').each(function(indice, elemento) {
        products_ids.push($(elemento).val());
    });

    if (products_ids.length <= 0) {
        exibirMsgFinalizar('alert alert-danger', 'Selecione ao menos 1 produto');
        return false;
    }

    finalizarCompra(products_ids);
}


getProdutos();
$('input[type="checkbox"]').on('click', addProdutoSelecionado);
$('#btn_finalizar').on('click', fecharCarrinho);