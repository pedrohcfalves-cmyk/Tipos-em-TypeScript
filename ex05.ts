export {};
// 1. Tupla nomeada: cada leitura é [cidade, temperatura]
type Leitura = [cidade: string, temperatura: number];

let leituras: Leitura[] = [
  ['Porto Velho', 34],
  ['Curitiba', 12],
  ['Manaus', 31],
  ['Porto Alegre', 9],
  ['Natal', 29],
];

// 2.0 max e min
function extremos(temps: number[]): [number, number] {
  return [Math.min(...temps), Math.max(...temps)];
}

// 2.1 Média
function media(temps: number[]): number {
  return temps.reduce((soma, t) => soma + t, 0) / temps.length;
}

let temperaturas: number[] = leituras.map(([, temp]) => temp);
const [minima, maxima] = extremos(temperaturas); // desestruturação do resultado

// 3. desestruturação
for (const [cidade, temp] of leituras) {
  console.log(`${cidade}: ${temp}°C`);
}

console.log(
  `Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${media(temperaturas).toFixed(1)}°C`
);

// 4.0 Tupla com elemento opcional
type Contato = [nome: string, telefone: string, email?: string];

let contato1: Contato = ['Fernanda Rocha', '(69) 99999-1111', 'fernanda@noticias.com'];
let contato2: Contato = ['Ricardo Alves', '(92) 98888-2222'];

// 4.1 rest
let historico: [string, ...number[]] = ['Manaus', 31, 33, 30, 32, 29, 31, 34];

const [cidadeHistorico, ...tempsSemana] = historico;
let mediaSemana: number = media(tempsSemana);
// Para ver o resultado, descomente:
// console.log(`Média semanal de ${cidadeHistorico}: ${mediaSemana.toFixed(1)}°C`); // 31.4°C

// 4.2 Tupla somente leitura
const capitalOficial: readonly [string, string] = ['RO', 'Porto Velho'];
// capitalOficial[1] = 'Ji-Paraná';
// Erro: Cannot assign to '1' because it is a read-only property.
// Uma tupla readonly não permite alterar nenhuma posição depois de criada.
