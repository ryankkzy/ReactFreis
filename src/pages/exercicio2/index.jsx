import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio2() {
    const [valorKg, setValorKg] = useState(0)
    const [valorFinal, setValorFinal] = useState("")

    function calcularValorKg() {
        let conversao = valorKg * 1000;
        setValorFinal(`Resultado: O total é ${conversao.toFixed(1)} gramas`)
    }

    return (
        <div className="exercicio2">
            <Cabecalho />
            <Enunciado faixa="2" titulo="Exercício 2 - Converter Kg/gramas" descricao="Implementar um programa em Javascript para converter kilos em gramas." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Valor em kilos</label>
                        <input placeholder="0" type="number" onChange={e => setValorKg(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={calcularValorKg}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{valorFinal}</h3>
        </div>
    )
}