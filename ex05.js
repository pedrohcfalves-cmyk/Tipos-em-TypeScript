"use strict";
let leituras = [
    ['Porto Velho', 34],
    ['Curitiba', 12],
    ['Manaus', 31],
    ['Porto Alegre', 9],
    ['Natal', 29],
];
// 2.0 max e min
function extremos(temps) {
    return [Math.min(...temps), Math.max(...temps)];
}
// 2.1 Média
function media(temps) {
    return temps.reduce((soma, t) => soma + t, 0) / temps.length;
}
let temperaturas = leituras.map(([, temp]) => temp);
const [minima, maxima] = extremos(temperaturas); // desestruturação do resultado
// 3. desestruturação
for (const [cidade, temp] of leituras) {
    console.log(`${cidade}: ${temp}°C`);
}
console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${media(temperaturas).toFixed(1)}°C`);
let contato1 = ['Fernanda Rocha', '(69) 99999-1111', 'fernanda@noticias.com'];
let contato2 = ['Ricardo Alves', '(92) 98888-2222'];
// 4.1 rest
let historico = ['Manaus', 31, 33, 30, 32, 29, 31, 34];
const [cidadeHistorico, ...tempsSemana] = historico;
let mediaSemana = media(tempsSemana);
// Para ver o resultado, descomente:
// 4.2 Tupla somente leitura
const capitalOficial = ['RO', 'Porto Velho'];
// capitalOficial[1] = 'Ji-Paraná';
// Erro: Cannot assign to '1' because it is a read-only property.
// Uma tupla readonly não permite alterar nenhuma posição depois de criada.
