import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio9() {
    const [gramas, setGramas] = useState(0);
    const [resultado, setResultado] = useState("");

    function calculaTotalSorvete() {
        let valor = 0;
        if (gramas >= 1000) {
            valor = gramas * 3 / 100
            setResultado(`O total a pagar é R$ ${valor.toFixed(2)}`);
        } else if (gramas > 0 && gramas < 1000) {
            valor = gramas * 3.5 / 100
            setResultado(`O total a pagar é R$ ${valor.toFixed(2)}`);

        } else {
            setResultado("Peso inválido.")
        }
    }

    return (
        <div className="exercicio9">
            <Cabecalho />
            <Enunciado faixa="9" titulo="Exercício 9 - Sorveteria" descricao="Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Total de gramas</label>
                        <input placeholder="0" type="number" onChange={e => setGramas(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={calculaTotalSorvete}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{resultado}</h3>
        </div>
    )
}