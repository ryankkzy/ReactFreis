import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio10() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [listaSituacao, setListaSituacao] = useState([]);


    function adicionarSituacao() {

        let IMC = peso / (altura * altura);
        let situacao = '';

        if (IMC >= 40) {
            situacao = `Situação: Obesidade grau III`;
        } else if (IMC >= 35 && IMC <= 39.9) {
            situacao = `Situação: Obesidade grau II`;
        } else if (IMC >= 30 && IMC <= 34.9) {
            situacao = `Situação: Obesidade grau I`;
        } else if (IMC >= 25 && IMC <= 29.9) {
            situacao = `Situação: Sobrepeso`;
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            situacao = `Situação: Peso normal`;
        } else if (IMC < 18.5) {
            situacao = `Situação: Abaixo do peso `;
        }

        let novaSituacao = {
            altura: 'Altura: ' + altura,
            peso: 'Peso: ' + peso,
            situacao: situacao
        }

        setListaSituacao([...listaSituacao, novaSituacao])
    }

    function apagarImc(pos) {
        listaSituacao.splice(pos, 1)
        setListaSituacao([...listaSituacao])
    }

    return (
        <div className="exercicio10">
            <Cabecalho />
            <Enunciado faixa="10" titulo="Exercício 10 - Cálculo de IMC com histórico" descricao="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação." />
            <div className="conteiner">
                <div className="campos">
                    <div className="inputs">
                        <div className="informacao">
                            <label>Altura</label>
                            <input placeholder="0" type="number" onChange={e => setAltura(e.target.value)} />
                        </div>
                        <div className="informacao">
                            <label>Peso</label>
                            <input placeholder="0" type="number" onChange={e => setPeso(e.target.value)} />
                        </div>
                    </div>
                    <div className="executar">
                        <button onClick={adicionarSituacao}>Executar</button>
                    </div>
                </div>
                <div className='situacao'>
                    {listaSituacao.map((item, pos) =>
                        <div className='alinhamento'>
                            <div className='informacoes'>
                                <h4>{item.altura}</h4> <h4>{item.peso}</h4> <h4>{item.situacao}</h4>
                            </div>
                            <div className='icone'>
                                <img src="../assets/image/lixo.png" alt="" onClick={() => apagarImc(pos)} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}