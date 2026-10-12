// 1. Nome digitado pelo caixa
let nomeDigitado: string = '  maria   da  silva  ';

// 2. Função que formata o nome
function formatarNome(nome: string): string {
  const excecoes: string[] = ['da', 'de', 'do'];

  const palavras: string[] = nome
    .trim()
    .split(' ')
    .filter(p => p !== '');

  const formatadas: string[] = palavras.map(p => {
    const minuscula = p.toLowerCase();
    if (excecoes.includes(minuscula)) {
      return minuscula;
    }
    return minuscula[0].toUpperCase() + minuscula.slice(1);
  });

  return formatadas.join(' ');
}

// 3. Conversão de texto para número
let precoLido: string = '12.40';
let quantidadeLida: string = '3un';
let preco: number = Number(precoLido);
let quantidade: number = parseInt(quantidadeLida, 10);

// 4. Desconto de fidelidade
let clienteFidelidade: boolean = true;
let subtotal: number = preco * quantidade;
let desconto: number = clienteFidelidade ? subtotal * 0.05 : 0;
let total: number = subtotal - desconto;

// 5. Cupom
let numeroCupom: number = 42;

let cupom: string = `CUPOM Nº ${String(numeroCupom).padStart(6, '0')}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;

console.log(cupom);
