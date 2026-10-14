export {};
// produtos 
let nomeProduto1: string = 'Pão francês';
let precoUnitario1: number = 0.75;
let quantidade1: number = 12;

let nomeProduto2: string = 'Bolo de cenoura';
let precoUnitario2: number = 18.5;
let quantidade2: number = 2;

let aberta = true; // Tipo inferido: boolean

// calculadora
let subtotal1: number = precoUnitario1 * quantidade1;
let subtotal2: number = precoUnitario2 * quantidade2;
let total: number = subtotal1 + subtotal2;

let paesVendidosNoAno: number = 1_250_000;
let codigoCategoria: number = 0x1A;

// Saída
console.log(`${nomeProduto1}: ${quantidade1} x R$ ${precoUnitario1.toFixed(2)} = R$ ${subtotal1.toFixed(2)}`);
console.log(`${nomeProduto2}: ${quantidade2} x R$ ${precoUnitario2.toFixed(2)} = R$ ${subtotal2.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Padaria aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidosNoAno}`);
console.log(`Categoria: ${codigoCategoria}`);

// Erro provocado (descomente para ver o erro):
// quantidade1 = 'doze';
// Erro: Type 'string' is not assignable to type 'number'.
