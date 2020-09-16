const urlParams = new URLSearchParams(window.location.search);
const order_id = urlParams.get('order_id');

//busca na api os dados da venda
function getOrder() {
    $.ajax({
        url: `http://localhost//api/orders/${order_id}`,
        method: "GET",
        dataType: 'json',
        success: function(json) {          
            loadOrder(json.data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
}

//carrega os dados da venda
function loadOrder(order) {
    const data_compra = new Date(order.created_at);
    $('#venda-data-compra').text(data_compra.toLocaleString());
    $('#venda-estimativa').text(order.delivery_estimate);
    $('#venda-total').text(order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

    for (const product of order.products) {
        $('.venda-itens').append(getProductLayer(product));
    }
}

//monta o layer do produto
const getProductLayer = (product) => $('<div>', {class: 'col-sm-4'})
    .append($('<img>', {
        class: 'img-fluid img-thumbnail',
        src: product.img_url || '../no-image.png',
        alt: product.name
    }))
    .append($('<p>', {
        text: product.name,
    }))
    .append($('<p>',{        
        text: product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }));

    
$('.titulo').append(order_id);
$('.breadcrumb-item.active').append(order_id);
getOrder();