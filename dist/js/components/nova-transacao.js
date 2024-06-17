import Conta from "../types/Contas.js";
import SaldoComponent from "./saldo.js";
import ExtratoComponent from "./extrato.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
if (elementoFormulario instanceof HTMLFormElement) {
    elementoFormulario.addEventListener('submit', function (event) {
        try {
            event.preventDefault();
            if (!elementoFormulario.checkValidity()) {
                alert('Preencha todos os dados da transação!');
                return;
            }
            const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
            const inputValor = elementoFormulario.querySelector('#valor');
            const inputData = elementoFormulario.querySelector('#data');
            let tipoTransacao = inputTipoTransacao.value; //altera aqui o ENUM
            let valor = inputValor.valueAsNumber;
            let data = new Date(inputData.value + " 00:00:00"); //necessário para corrigir bug de data do js
            const novaTransacao = {
                tipoTransacao: tipoTransacao,
                valor: valor,
                data: data,
            };
            Conta.registrarTransacao(novaTransacao);
            SaldoComponent.atualizar();
            ExtratoComponent.atualizar();
            elementoFormulario.reset();
        }
        catch (erro) {
            alert(erro.message);
        }
    });
}
