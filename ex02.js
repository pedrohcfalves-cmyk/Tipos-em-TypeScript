"use strict";
// 1. Nome digitado pelo caixa
let nomeDigitado = '  maria   da  silva  ';
// 2. Função que formata o nome
function formatarNome(nome) {
    const excecoes = ['da', 'de', 'do'];
    const palavras = nome
        .trim()
        .split(' ')
        .filter(p => p !== '');
    const formatadas = palavras.map(p => {
        const minuscula = p.toLowerCase();
        if (excecoes.includes(minuscula)) {
            return minuscula;
        }
        return minuscula[0].toUpperCase() + minuscula.slice(1);
    });
    return formatadas.join(' ');
}
// 3. Conversão de texto para número
let precoLido = '12.40';
let quantidadeLida = '3un';
let preco = Number(precoLido);
let quantidade = parseInt(quantidadeLida, 10);
// 4. Desconto de fidelidade
let clienteFidelidade = true;
let subtotal = preco * quantidade;
let desconto = clienteFidelidade ? subtotal * 0.05 : 0;
let total = subtotal - desconto;
// 5. Cupom
let numeroCupom = 42;
let cupom = `CUPOM Nº ${String(numeroCupom).padStart(6, '0')}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;
console.log(cupom);
