import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio7() {
    const [cor1, setCor1] = useState("");
    const [cor2, setCor2] = useState("");
    const [resultado, setResultado] = useState("");

    function compararCores() {
        const c1 = cor1.toLowerCase();
        const c2 = cor2.toLowerCase();
    
        const coresPrimarias = ["vermelho", "azul", "amarelo"];
        const primaria = coresPrimarias.includes(c1) && coresPrimarias.includes(c2);
    
        setResultado(`As cores são primárias? ${primaria}`);
    }

    return (
        <div className="exercicio7">
            <Cabecalho />
            <Enunciado faixa="7" titulo="Exercício 7 - Cores primárias" descricao="Implementar um programa em javascript para verificar se duas cores são primárias." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Cor 1</label>
                        <input placeholder="Digite a cor" onChange={e => setCor1(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Cor 2</label>
                        <input placeholder="Digite a cor" onChange={e => setCor2(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={compararCores}>Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{resultado}</h3>
        </div>
    )
}