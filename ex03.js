// paciente 1
let paciente = {
    cpf: '123.456.789-00',
    nome: 'Ana Souza',
    idade: 34,
    plano: true,
    alergias: ['dipirona', 'lactose'],
    contatoEmergencia: { nome: 'João Souza', telefone: '(92) 99999-0000' },
};
// paciente 2 
let paciente2 = {
    cpf: '987.654.321-00',
    nome: 'Carlos Lima',
    idade: 61,
    plano: false,
};
// resumo
function resumo(p) {
    if (p.alergias) {
        return `${p.nome}, ${p.idade} anos. Alergias: ${p.alergias.join(', ')}`;
    }
    return `${p.nome}, ${p.idade} anos. Sem alergias registradas`;
}
console.log(resumo(paciente));
console.log(resumo(paciente2));
// erros provocados
// paciente.cpf = '000.000.000-00';
// Erro: Cannot assign to 'cpf' because it is a read-only property.
// paciente.peso = 70;
// Erro: Property 'peso' does not exist on type '{ readonly cpf: string; nome: string; idade: number; plano: boolean; alergias?: string[] | undefined; contatoEmergencia?: { nome: string; telefone: string; } | undefined; }'.
// reflexao
let dados = paciente;
// console.log(dados.nome);
// Erro: Property 'nome' does not exist on type 'object'.
// o tipo object so diz que e um objeto, mas nao diz quais propriedades ele tem.
// entao mesmo o paciente tendo nome, o typescript nao sabe disso e nao deixa acessar
let x = 10;
export {};
// let y: object = 10;
// Erro: Type 'number' is not assignable to type 'object'.
// o {} aceita qualquer valor que nao seja null ou undefined, entao numero passa.
// ja o object so aceita o que nao e primitivo (objeto, array, funcao), e 10 e primitivo
