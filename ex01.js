// produtos 
let nomeProduto1 = 'Pão francês';
let precoUnitario1 = 0.75;
let quantidade1 = 12;
let nomeProduto2 = 'Bolo de cenoura';
let precoUnitario2 = 18.5;
let quantidade2 = 2;
let aberta = true; // Tipo inferido: boolean
// calculadora
let subtotal1 = precoUnitario1 * quantidade1;
let subtotal2 = precoUnitario2 * quantidade2;
let total = subtotal1 + subtotal2;
let paesVendidosNoAno = 1250000;
let codigoCategoria = 0x1A;
// Saída
console.log(`${nomeProduto1}: ${quantidade1} x R$ ${precoUnitario1.toFixed(2)} = R$ ${subtotal1.toFixed(2)}`);
console.log(`${nomeProduto2}: ${quantidade2} x R$ ${precoUnitario2.toFixed(2)} = R$ ${subtotal2.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Padaria aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidosNoAno}`);
console.log(`Categoria: ${codigoCategoria}`);
export {};
// Erro provocado (descomente para ver o erro):
// quantidade1 = 'doze';
// Erro: Type 'string' is not assignable to type 'number'.
