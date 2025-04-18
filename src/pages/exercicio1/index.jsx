import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio1() {
    const [valorPedido, setValorPedido] = useState(0);
    const [valorCupom, setValorCupom] = useState(0);
    const [valorFinal, setValorFinal] = useState('');

    function calcular() {
        let total = valorPedido - valorCupom;
        setValorFinal(`Resultado: O total é R$ ${total.toFixed(2)}`)
    }

    return (
        <div className="exercicio1">
            <Cabecalho />
            <Enunciado faixa="1" titulo="Exercício 1 - Cupom de desconto" descricao="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Informe o valor do pedido</label>
                        <input placeholder="0" type="number" onChange={e => setValorPedido(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Informe o valor do desconto</label>
                        <input placeholder="0" type="number" onChange={e => setValorCupom(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={calcular}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{valorFinal}</h3>
        </div>
    )
}