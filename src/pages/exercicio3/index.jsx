import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio3() {
    const [qtdPequeno, setQtdPequeno] = useState(0);
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [total, setTotal] = useState("");

    function calcularTotal(){
        let valorP = qtdPequeno * 13.5;
        let valorM = qtdMedio * 15;
        let valorG = qtdGrande * 17.5;

        let total = valorP + valorM + valorG;
        setTotal(`Resultado: O total é R$ ${total.toFixed(2)}`)
    }



    return (
        <div className="exercicio3">
            <Cabecalho />
            <Enunciado faixa="3" titulo="Exercício 3 - Valor por quantidade" descricao="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente." />
            <div className="conteiner">
                <div className="campos">
                    <div className="inputs">
                        <div className="informacao">
                            <label>Quantidade pequeno</label>
                            <input placeholder="0" type="number" onChange={e => setQtdPequeno(e.target.value)}/>
                        </div>
                        <div className="informacao">
                            <label>Quantidade médio</label>
                            <input placeholder="0" type="number" onChange={e => setQtdMedio(e.target.value)}/>
                        </div>
                        <div className="informacao">
                            <label>Quantidade grande</label>
                            <input placeholder="0" type="number" onChange={e => setQtdGrande(e.target.value)}/>
                        </div>
                    </div>
                    <div className="executar">
                        <button onClick={calcularTotal}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{total}</h3>
        </div>
    )
}