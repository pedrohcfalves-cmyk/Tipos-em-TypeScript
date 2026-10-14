export {};
// 1. Código do cliente: número (sistema novo) ou texto (sistema antigo)
let codigo: number | string = 42;

function formatarCodigo(c: number | string): string {
  if (typeof c === 'number') {
    // aqui dentro o TypeScript sabe que c é number
    return `CLI-${String(c).padStart(4, '0')}`;
  }
  // aqui c só pode ser string (ex.: 'CLI-0042' ou 'cli-42')
  const digitos = c.replace(/\D/g, ''); // tira tudo que não é dígito
  return `CLI-${digitos.padStart(4, '0')}`;
}

// 2. Tipo literal: só esses quatro tamanhos são aceitos
type Tamanho = 'P' | 'M' | 'G' | 'GG';
let camiseta: Tamanho = 'M';
// camiseta = 'XG';
// Erro: Type '"XG"' is not assignable to type 'Tamanho'.
// 'XG' não está na lista de valores permitidos do tipo Tamanho.

// 3. Frete por região
function calcularFrete(regiao: 'norte' | 'nordeste' | 'centro-oeste' | 'sudeste' | 'sul'): number {
  switch (regiao) {
    case 'norte':
      return 25;
    case 'nordeste':
      return 20;
    case 'centro-oeste':
      return 18;
    case 'sudeste':
      return 12;
    case 'sul':
      return 15;
  }
}

// 4. Complemento pode ser texto ou null
let rua: string = 'Rua das Flores, 100';
let complemento: string | null = null;
let textoComplemento: string = complemento === null ? '(sem complemento)' : complemento;

// 5. Telefone pode chegar como texto ou como número
function limparTelefone(tel: string | number): string {
  if (typeof tel === 'number') {
    return String(tel); // número já não tem parênteses nem traço
  }
  return tel.replace(/\D/g, ''); // remove tudo que não é dígito
}

// 6. Inferência de literais
const r = 'sul';
// Com const, o valor nunca muda, então o TypeScript infere o tipo literal 'sul'
// (e não string). Como 'sul' é uma das regiões permitidas, calcularFrete(r) funciona.

let r2 = 'sul';
// calcularFrete(r2);
// Erro: Argument of type 'string' is not assignable to parameter of type
// '"norte" | "nordeste" | "centro-oeste" | "sudeste" | "sul"'.
// Com let, a variável pode mudar depois (r2 = 'qualquer coisa'), então o
// TypeScript "alarga" o tipo para string, e string não cabe na lista de regiões.

let r3 = 'sul' as const;
// Correção: 'as const' manda o TypeScript manter o tipo literal 'sul' mesmo com let.
// Agora calcularFrete(r3) é aceito.

// Saída
console.log(`Cliente: ${formatarCodigo(codigo)} | Camiseta: ${camiseta}`);
console.log(`Entrega: ${rua} - ${textoComplemento}`);
console.log(`Frete para o ${r}: R$ ${calcularFrete(r).toFixed(2)}`);
console.log(`Telefone: ${limparTelefone('(69) 99999-0000')}`);

// Testes extras (descomente para conferir):
// console.log(formatarCodigo('CLI-0042'));      // CLI-0042
// console.log(limparTelefone(69999990000));     // 69999990000
// console.log(calcularFrete(r3));               // 15
