import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";


export default function Exercicio5() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [total, setTotal] = useState("");

    function calcularMedia() {
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
        let passou = media >= 6 ? "Sim" : "Não";
        setTotal(
            <>
                A média do aluno é {media.toFixed(1)} <br />
                O aluno passou? {passou}
            </>
        );
    }



    return (
        <div className="exercicio5">
            <Cabecalho />
            <Enunciado faixa="5" titulo="Exercício 5 - Média de notas" descricao="Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Nota 01</label>
                        <input placeholder="0" type="number" onChange={e => setNota1(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Nota 02</label>
                        <input placeholder="0" type="number" onChange={e => setNota2(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Nota 03</label>
                        <input placeholder="0" type="number" onChange={e => setNota3(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={calcularMedia}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{total}</h3>
        </div>
    )
}