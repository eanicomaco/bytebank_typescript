import { formatarMoeda, formatarData } from "../utils/formaters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Contas.js";

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;

if (elementoDataAcesso) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(),FormatoData.EXTENSO);
}

renderizarSaldo();
function renderizarSaldo(): void {
    if (elementoSaldo) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;