import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio11() {
    const [numero, setNumero] = useState(0);
    const [tabuadas, setTabuadas] = useState([]);


    function exibirTabuada() {

        let tabuada = [];

        for (let contador = 0; contador <= 10; contador++) {

            let valorConta = numero * contador
            let exibir = `${numero} X ${contador} = ${valorConta}`
            tabuada.push(exibir)
        }

        setTabuadas(tabuada)
    }

    return (
        <div className="exercicio11">
            <Cabecalho />
            <Enunciado faixa="11" titulo="Exercício 11 - Tabuada" descricao="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Tabuada do:</label>
                        <input placeholder="0" type="number" onChange={e => setNumero(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={exibirTabuada}>Executar</button>
                    </div>
                </div>
            </div>
            <div className="resultado">
                {tabuadas.map(item =>
                    <h4>{item}</h4>
                )}
            </div>
        </div>
    )
}