import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio8() {
    const [temperatura, setTemperatura] = useState(0);
    const [resultado, setResultado] = useState("");
    const [classeCor, setClasseCor] = useState("");


    function verificaTemperatura() {
        let situacao = "";
        let novaClasse = "";

        if (temperatura >= 41) {
            situacao = 'Hipertermia';
            novaClasse = 'vermelho';
        } else if (temperatura >= 39.6 && temperatura < 41) {
            situacao = 'Febre Alta';
            novaClasse = 'vermelho';
        } else if (temperatura >= 37.6 && temperatura < 39.6) {
            situacao = 'Febre';
            novaClasse = 'vermelho';
        } else if (temperatura >= 36 && temperatura < 37.6) {
            situacao = 'Normal';
            novaClasse = '';
        } else {
            situacao = 'Hipotermia';
            novaClasse = '';
        }

        setResultado(`A situação para sua temperatura é ${situacao}.`);
        setClasseCor(novaClasse); // Atualiza a cor da classe
    }


    return (
        <div className="exercicio8">
            <Cabecalho />
            <Enunciado faixa="8" titulo="Exercício 8 - Temperatura" descricao="Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação." />
            <div className="conteiner">
                <img src="/assets/image/image 3.png" alt="" width={400} />
                <div className="campos">
                    <div className="informacao">
                        <label>Temperatura</label>
                        <input placeholder="0" type="number" onChange={e => setTemperatura(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={verificaTemperatura}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className={`resultado ${classeCor}`}>{resultado}</h3>
        </div>
    )
}