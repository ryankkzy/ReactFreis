import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import Enunciado from "../../components/enunciado";
import { useState } from "react";

export default function Exercicio6() {
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0)
    const [total, setTotal] = useState("");

    function calculaSalario() {
        let salarioLiquido = Number(salario) + (bonus / 100 * salario) - desconto;
        setTotal(`Seu salário líquido é de R$ ${salarioLiquido.toFixed(2)}`)
    }

    return (
        <div className="exercicio6">
            <Cabecalho />
            <Enunciado faixa="6" titulo="Exercício 6 - Salário líquido" descricao="Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais." />
            <div className="conteiner">
                <div className="campos">
                    <div className="informacao">
                        <label>Salário base</label>
                        <input placeholder="0" type="number" onChange={e => setSalario(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Bônus mensal em porcentagem</label>
                        <input placeholder="0" type="number" onChange={e => setBonus(e.target.value)} />
                    </div>
                    <div className="informacao">
                        <label>Total de descontos</label>
                        <input placeholder="0" type="number" onChange={e => setDesconto(e.target.value)} />
                    </div>
                    <div className="executar">
                        <button onClick={calculaSalario} >Executar</button>
                    </div>
                </div>
            </div>
            <h3 className="resultado">{total}</h3>
        </div>
    )
}