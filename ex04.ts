export {};
// Lista de compras do mês
let itens: { nome: string; preco: number; quantidade: number }[] = [
  { nome: 'Arroz 5kg', preco: 28.9, quantidade: 1 },
  { nome: 'Feijão 1kg', preco: 8.49, quantidade: 2 },
  { nome: 'Leite 1L', preco: 4.99, quantidade: 6 },
  { nome: 'Café 500g', preco: 17.9, quantidade: 1 },
  { nome: 'Sabão em pó', preco: 12.5, quantidade: 1 },
];

// Só com map, filter e reduce (sem for)
let nomes: string[] = itens.map(item => item.nome);

let caros: { nome: string; preco: number; quantidade: number }[] =
  itens.filter(item => item.preco > 10);

let total: number = itens.reduce(
  (soma, item) => soma + item.preco * item.quantidade,
  0
);

// Array somente leitura
let categorias: readonly string[] = ['Mercearia', 'Laticínios', 'Limpeza'];
// categorias.push('Bebidas');
// Erro: Property 'push' does not exist on type 'readonly string[]'.
// Um array readonly não tem métodos que alteram a lista (push, pop, splice...).

// 4. Matriz da despensa: cada array interno é uma prateleira
let despensa: number[][] = [
  [2, 0, 1],
  [4, 4],
  [1],
];

let itensNaDespensa: number = despensa.reduce(
  (soma, prateleira) => soma + prateleira.reduce((s, qtd) => s + qtd, 0),
  0
);

// Desestruturação e spread
const [primeiro, segundo] = itens;
// primeiro = Arroz 5kg, segundo = Feijão 1kg

const novaLista = [...itens, { nome: 'Açúcar 1kg', preco: 5.49, quantidade: 1 }];
// novaLista tem 6 itens; a lista original 'itens' continua com 5.

// Saída
console.log(`Itens: ${nomes.join(', ')}`);
console.log(`Acima de R$ 10: ${caros.map(item => item.nome).join(', ')}`);
console.log(`Total da compra: R$ ${total.toFixed(2)}`);
console.log(`Itens na despensa: ${itensNaDespensa}`);

// Para conferir a parte 5, descomente:
// console.log(primeiro.nome, '|', segundo.nome);
// console.log(itens.length, novaLista.length); // 5 6
