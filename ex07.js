"use strict";
// 1.1 Três notificadores
const porEmail = (destinatario, mensagem) => {
    console.log(`[E-MAIL] para ${destinatario}: ${mensagem}`);
};
// 2.0 notificador por SMS ACIMA DE 160
const porSms = (destinatario, mensagem) => {
    if (mensagem.length > 160) {
        console.log('SMS ignorado: mensagem longa');
        return; // return vazio: sai da função sem enviar
    }
    console.log(`[SMS] para ${destinatario}: ${mensagem}`);
};
const porApp = (destinatario, mensagem) => {
    console.log(`[APP] para ${destinatario}: ${mensagem}`);
};
// 3.0 ENCAMINHAR MENSAGEM PARA TODOS
function notificarTodos(destinatarios, mensagem, enviar) {
    destinatarios.forEach(destinatario => enviar(destinatario, mensagem));
}
// Testes
let aviso = 'Reunião de pais sexta às 19h';
let avisoLongo = 'Prezados responsáveis, informamos que a reunião de pais e mestres será realizada ' +
    'na sexta-feira às 19h no auditório da escola. Contamos com a presença de todos. ' +
    'Tragam documento com foto.';
notificarTodos(['ana@escola.com'], aviso, porEmail);
notificarTodos(['joao.resp'], aviso, porApp);
notificarTodos(['(69) 99999-0000'], avisoLongo, porSms);
// 5. Erro provocado (descomente para ver)
// function teste(): void { return 10; }
// Erro: Type 'number' is not assignable to type 'void'.
// Quando a própria função declara ': void', ela promete não devolver nada,
// então o TypeScript não deixa retornar um valor.
// 6. Reflexão
const contar = (d, m) => m.length;
// aceito, sem erro
// Aqui é diferente do item 5: o tipo Notificador diz que quem CHAMA a função
// não vai usar o retorno. Então, se a função devolver um número, ele é
// simplesmente ignorado e não causa nenhum problema.
// Isso permite usar funções que retornam algo onde só se espera uma ação,
// como em lista.forEach(x => outraLista.push(x)): o push devolve um número,
// mas o forEach espera um callback void e apenas ignora esse valor.
