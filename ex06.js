"use strict";
// 1. numerando o pedido 
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Recebido"] = 1] = "Recebido";
    StatusPedido[StatusPedido["EmPreparo"] = 2] = "EmPreparo";
    StatusPedido[StatusPedido["SaiuParaEntrega"] = 3] = "SaiuParaEntrega";
    StatusPedido[StatusPedido["Entregue"] = 4] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 5] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
// 2. modo de pagamento e valor 
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["PIX"] = "PIX";
    FormaPagamento["CARTAO"] = "CARTAO";
    FormaPagamento["DINHEIRO"] = "DINHEIRO";
})(FormaPagamento || (FormaPagamento = {}));
// 3. logs-status do pedido
function mensagem(status) {
    switch (status) {
        case StatusPedido.Recebido:
            return 'Recebemos seu pedido!';
        case StatusPedido.EmPreparo:
            return 'Seu pedido está sendo preparado ';
        case StatusPedido.SaiuParaEntrega:
            return 'O entregador está a caminho ';
        case StatusPedido.Entregue:
            return 'Pedido entregue. Bom apetite!';
        case StatusPedido.Cancelado:
            return 'Seu pedido foi cancelado.';
    }
}
// 4. resultado final entregue ou cancelado
function avancar(status) {
    switch (status) {
        case StatusPedido.Recebido:
            return StatusPedido.EmPreparo;
        case StatusPedido.EmPreparo:
            return StatusPedido.SaiuParaEntrega;
        case StatusPedido.SaiuParaEntrega:
            return StatusPedido.Entregue;
        default:
            return status;
    }
}
// 5. número para o nome
function mostrar(status) {
    console.log(`[${status} - ${StatusPedido[status]}] ${mensagem(status)}`);
}
// 6. Simulação início ao fim
let statusAtual = StatusPedido.Recebido;
mostrar(statusAtual);
while (statusAtual !== StatusPedido.Entregue) {
    statusAtual = avancar(statusAtual);
    mostrar(statusAtual);
}
let pagamento = FormaPagamento.PIX;
console.log(`Pagamento: ${pagamento}`);
// 7. Erro provocado
// let pagamento2: FormaPagamento = 'PIX';
// Erro: Type '"PIX"' is not assignable to type 'FormaPagamento'.
// Mesmo que FormaPagamento.PIX valha 'PIX', um enum de string não aceita
// uma string solta: o TypeScript exige que o valor venha do próprio enum
// (FormaPagamento.PIX). Assim, só valores "oficiais" entram na variável,
// e um texto digitado errado, como 'Pix' ou 'PIKS', nunca passa.
