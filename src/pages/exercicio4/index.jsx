import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio4() {
    const [nome, setNome] = useState("");
    const [qtdPagina, setQtdPagina] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [total, setTotal] = useState("")


    function calculaHoras() {
        let horas = qtdPagina * segundos / 3600;
        setTotal(`Você lerá ${nome} em ${horas.toFixed(2)} horas.`)
    }





    return (
        <div className="exercicio4">
            <Cabecalho />
            <Enunciado faixa="4" titulo="Exercício 4 - Leitura de livro" descricao="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Nome do livro</label>
                        <input placeholder="Digite o nome" onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Total de páginas</label>
                        <input placeholder="0" type="number" onChange={e => setQtdPagina(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Tempo em segundos de leitura</label>
                        <input placeholder="0" type="number" onChange={e => setSegundos(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={calculaHoras}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{total}</h3>
        </div>
    )
}