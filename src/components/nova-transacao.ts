import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import Conta from "../types/Contas.js";
import SaldoComponent from "./saldo.js";
import ExtratoComponent from "./extrato.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

if (elementoFormulario instanceof HTMLFormElement) {

    elementoFormulario.addEventListener('submit', function(event){

        try {

            event.preventDefault();

            if (!elementoFormulario.checkValidity()){
                alert('Preencha todos os dados da transação!');
                return;
            }

            const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
            const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
            const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

            let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao; //altera aqui o ENUM
            let valor: number =  inputValor.valueAsNumber;
            let data: Date = new Date(inputData.value + " 00:00:00"); //necessário para corrigir bug de data do js

            const novaTransacao:Transacao = {
                tipoTransacao: tipoTransacao,
                valor: valor,
                data: data,
            };

            Conta.registrarTransacao(novaTransacao);
            SaldoComponent.atualizar();
            ExtratoComponent.atualizar();
            elementoFormulario.reset();

        } catch(erro) {

            alert(erro.message);

        }
    });

}