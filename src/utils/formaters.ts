import { FormatoData } from "../types/FormatoData.js";

export function formatarMoeda(valor:number) : string {
    return valor.toLocaleString('pt-br', {currency: 'BRL', style: 'currency'});
}

export function formatarData(valor:Date, formato:FormatoData = FormatoData.PADRAO) : string {

    if (formato == FormatoData.EXTENSO) {
        return valor.toLocaleString('pt-br',{
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    } else if (formato == FormatoData.DIA_MES) {
        return valor.toLocaleString('pt-br',{
            day: '2-digit',
            month: '2-digit',
        });
    } else {
        return valor.toLocaleString('pt-br');
    }
}