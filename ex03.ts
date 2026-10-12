// paciente 1
let paciente: {
  readonly cpf: string;
  nome: string;
  idade: number;
  plano: boolean;
  alergias?: string[];
  contatoEmergencia?: { nome: string; telefone: string };
} = {
  cpf: '123.456.789-00',
  nome: 'Ana Souza',
  idade: 34,
  plano: true,
  alergias: ['dipirona', 'lactose'],
  contatoEmergencia: { nome: 'João Souza', telefone: '(92) 99999-0000' },
};
// paciente 2 
let paciente2: {
  readonly cpf: string;
  nome: string;
  idade: number;
  plano: boolean;
  alergias?: string[];
  contatoEmergencia?: { nome: string; telefone: string };
} = {
  cpf: '987.654.321-00',
  nome: 'Carlos Lima',
  idade: 61,
  plano: false,
};
// resumo
function resumo(p: { nome: string; idade: number; alergias?: string[] }): string {
  if (p.alergias) {
    return `${p.nome}, ${p.idade} anos. Alergias: ${p.alergias.join(', ')}`;
  }
  return `${p.nome}, ${p.idade} anos. Sem alergias registradas`;
}

console.log(resumo(paciente));
console.log(resumo(paciente2));

let dados: object = paciente;
let x: {} = 10;
