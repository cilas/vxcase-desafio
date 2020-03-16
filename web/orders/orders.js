//busca na api os dados das vendas
function getOrders() {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/orders',
        method: "GET",
        dataType: 'json',
        success: function(json) {          
            loadOrders(json.data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
}

//carrega os dados das vendas
function loadOrders(orders) {
    for (const order of orders) {
        $('#tbody_orders').append(getOrderLayer(order));
    }
}

//monta o layer da venda
const getOrderLayer = (order) => $('<tr>')
    .append($('<th>', {
        "scope": "row",
        text: order.id,
        class: "text-left"
    }))
    .append($('<td>', {
        text: (new Date(order.created_at)).toLocaleString(),
        class: "text-center"
    }))
    .append($('<td>', {
        text: order.delivery_estimate,
        class: "text-center"
    }))
    .append($('<td>', {
        text: order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        class: "text-center"
    }))
    .append($('<td>', {
        class: "text-right"
    })
        .append($('<a>', {
            href: `../order/order.html?order_id=${order.id}`,
            text: 'Visualizar'
        }))
    );

getOrders();