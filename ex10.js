// Teste do never com a Van
// depois que terminei tudo, coloquei a Van na união pra ver o que acontecia:
// type Van = { readonly placa: Placa; tipo: 'van'; lugares: number };
// type Veiculo = Carro | Moto | Caminhao | Van;
// na hora deu erro lá no default do calcularTarifa:
// Erro: Type 'Van' is not assignable to type 'never'.
// o que eu entendi: o never é tipo um "alarme". se todos os casos foram tratados
// no switch, não sobra nada pra chegar no default, então v vira never e tá tudo ok.
// mas quando eu adicionei a Van e esqueci de colocar o case dela, a Van "sobrou"
// e caiu no default, e aí o TypeScript reclamou que Van não cabe em never.
// ou seja, ele me avisa na hora de compilar que eu esqueci de cobrar a van,
// em vez de eu só descobrir quando o sistema cobrasse errado. achei bem útil
// 3. Enum
var SituacaoTicket;
(function (SituacaoTicket) {
    SituacaoTicket["Aberto"] = "ABERTO";
    SituacaoTicket["Pago"] = "PAGO";
})(SituacaoTicket || (SituacaoTicket = {}));
// 5. Cálculo da tarifa
// fiz o cálculo como: primeira hora + (horas que sobraram * valor da hora adicional)
function calcularTarifa(v, horas) {
    const horasAdicionais = horas - 1;
    switch (v.tipo) {
        case 'carro':
            return 8 + horasAdicionais * 5;
        case 'moto':
            return 4 + horasAdicionais * 2;
        case 'caminhao':
            return 15 + horasAdicionais * 10;
        default: {
            // se chegar aqui é porque tem algum tipo de veículo que eu não tratei
            const _naoTratado = v;
            return _naoTratado;
        }
    }
}
// 6. Fechar o ticket
// separei o cálculo das horas numa função porque usei em dois lugares
function calcularHoras(periodo) {
    const [entrada, saida] = periodo;
    // todo mundo paga pelo menos 1 hora, por isso o Math.max
    return Math.max(1, saida - entrada);
}
function fecharTicket(t) {
    const horas = calcularHoras(t.periodo);
    let valor = calcularTarifa(t.veiculo, horas);
    // quem tem o selo do shopping paga metade
    if (t.selo) {
        valor = valor * 0.5;
    }
    // usei spread pra criar um ticket novo e não mexer no original
    return { ...t, valor: valor, situacao: SituacaoTicket.Pago };
}
// 7. Registrar
// essa função só mostra a mensagem, não devolve nada (void)
function registrar(msg) {
    console.log(msg);
}
// 8. Lendo os veículos da cancela (unknown)
// mesma ideia do exercício 09: essa função nunca retorna, só lança o erro
function falhar(mensagem) {
    throw new Error(mensagem);
}
function lerVeiculo(json) {
    let dados;
    try {
        dados = JSON.parse(json);
    }
    catch {
        falhar('JSON malformado');
    }
    // primeiro vejo se é um objeto mesmo (lembrando que typeof null também dá 'object')
    if (typeof dados !== 'object' || dados === null) {
        falhar('dados do veículo inválidos');
    }
    if (!('placa' in dados) || typeof dados.placa !== 'string') {
        falhar('campo "placa" inválido');
    }
    if (!('tipo' in dados) || typeof dados.tipo !== 'string') {
        falhar('campo "tipo" inválido');
    }
    // agora vejo cada tipo separado, porque cada um tem um campo diferente
    if (dados.tipo === 'carro') {
        if (!('portas' in dados) || (dados.portas !== 2 && dados.portas !== 4)) {
            falhar('carro precisa ter 2 ou 4 portas');
        }
        return { placa: dados.placa, tipo: 'carro', portas: dados.portas };
    }
    if (dados.tipo === 'moto') {
        if (!('cilindradas' in dados) || typeof dados.cilindradas !== 'number') {
            falhar('campo "cilindradas" inválido');
        }
        return { placa: dados.placa, tipo: 'moto', cilindradas: dados.cilindradas };
    }
    if (dados.tipo === 'caminhao') {
        if (!('eixos' in dados) || typeof dados.eixos !== 'number') {
            falhar('campo "eixos" inválido');
        }
        return { placa: dados.placa, tipo: 'caminhao', eixos: dados.eixos };
    }
    // se não for nenhum dos três, o tipo é desconhecido
    falhar(`tipo "${dados.tipo}" desconhecido`);
}
// 9. Dados de teste 
// simulei os veículos chegando da cancela em JSON
const entradaCancela = [
    ['{"placa":"ABC1D23","tipo":"carro","portas":4}', [8, 11], false],
    ['{"placa":"MOT0A12","tipo":"moto","cilindradas":160}', [9, 10], false],
    ['{"placa":"CAM9Z99","tipo":"caminhao","eixos":3}', [7, 12], false],
    ['{"placa":"XYZ4E56","tipo":"carro","portas":2}', [14, 16], true],
];
// transformo cada entrada da cancela num ticket aberto
const tickets = entradaCancela.map(([json, periodo, selo]) => ({
    veiculo: lerVeiculo(json),
    periodo: periodo,
    selo: selo,
    situacao: SituacaoTicket.Aberto,
}));
// 10. Relatório
// fecho todos os tickets (o array "tickets" continua com tudo ABERTO)
const ticketsFechados = tickets
    .map(fecharTicket)
    .filter(t => t.situacao === SituacaoTicket.Pago);
// mostro cada ticket fechado
ticketsFechados
    .map(t => {
    const horas = calcularHoras(t.periodo);
    const valor = t.valor ?? 0;
    const textoSelo = t.selo ? ' (selo -50%)' : '';
    return `[${t.situacao}] ${t.veiculo.placa} (${t.veiculo.tipo}) - ${horas}h - R$ ${valor.toFixed(2)}${textoSelo}`;
})
    .forEach(registrar);
// somo tudo que foi pago
const faturamento = ticketsFechados.reduce((soma, t) => soma + (t.valor ?? 0), 0);
registrar(`Faturamento: R$ ${faturamento.toFixed(2)}`);
// conto quantos veículos de cada tipo entraram
// começo com tudo zerado e vou somando 1 no tipo de cada ticket
const entradas = tickets.reduce((contagem, t) => ({ ...contagem, [t.veiculo.tipo]: contagem[t.veiculo.tipo] + 1 }), { carro: 0, moto: 0, caminhao: 0 });
registrar(`Entradas: carro=${entradas.carro}, moto=${entradas.moto}, caminhao=${entradas.caminhao}`);
// 11. Testando um veículo inválido 
// tentei passar uma bicicleta pra ver se a validação pegava
try {
    lerVeiculo('{"placa":"BIC0000","tipo":"bicicleta"}');
}
catch (erro) {
    if (erro instanceof Error) {
        registrar(`Erro ao ler veículo: ${erro.message}`);
    }
}
export {};
