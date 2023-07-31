import { createContext, useState } from 'react'

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ chieldren }) => {

    const tiposPagamento = [{
        nome: "Boleto",
        juros: 1,
        id: 1
    }, {
        nome: "Cartao de crédito",
        juros: 1.3,
        id: 2
    }, {
        nome: "Pix",
        juros: 1,
        id: 3
    }, {
        nome: "Crediário",
        juros: 1.5,
        id: 4
    }];

    const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);

    return (
        <PagamentoContext.Provider value={{
            tiposPagamento,
            formaPagamento,
            setFormaPagamento
        }}>
            {chieldren}
        </PagamentoContext.Provider>
    )
}

