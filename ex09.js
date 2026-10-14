// Respostas simuladas da API
const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';
// 1. Versão com any para gerar erro
function lerComAny(json) {
    const dados = JSON.parse(json);
    console.log(dados.temperatura.toFixed(1)); // o TypeScript não reclama de nada
}
// erro na resposta quebrada: TypeError: dados.temperatura.toFixed is not a function
// Erro só na execução: TypeError: dados.temperatura.toFixed is not a function
// Com any, o TypeScript desliga a verificação de tipos. Ele compila sem erro,
// mas temperatura chegou como a string "quente", que não tem toFixed,
// e o programa quebra só quando roda.
// 3. Função que nunca retorna: sempre lança um erro
function falhar(mensagem) {
    throw new Error(mensagem);
}
// 2. Versão com unknown
function lerClima(json) {
    let dados;
    try {
        dados = JSON.parse(json);
    }
    catch {
        falhar('JSON malformado'); // JSON.parse lança SyntaxError se o texto não for JSON
    }
    // Com unknown, com o typeScript obriga a verificar antes de usar
    if (typeof dados !== 'object' || dados === null) {
        falhar('resposta não é um objeto');
    }
    if (!('cidade' in dados) || typeof dados.cidade !== 'string') {
        falhar('campo "cidade" inválido');
    }
    if (!('temperatura' in dados) || typeof dados.temperatura !== 'number') {
        falhar('campo "temperatura" inválido');
    }
    // Aqui o typeScript já sabe que cidade é string e temperatura é number
    return { cidade: dados.cidade, temperatura: dados.temperatura };
}
// 4. Chamada protegida com try/catch
function testar(json) {
    try {
        const clima = lerClima(json);
        console.log(`${clima.cidade}: ${clima.temperatura.toFixed(1)}°C`);
    }
    catch (erro) {
        if (erro instanceof Error) {
            console.log(`Erro: ${erro.message}`);
        }
        else {
            console.log('Erro desconhecido');
        }
    }
}
// 5. Testando as três respostas
testar(respostaOk);
testar(respostaQuebrada);
testar(respostaInvalida);
export {};
