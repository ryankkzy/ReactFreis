import "./index.scss";
import { Link } from "react-router-dom";

export default function Enunciado({titulo, faixa, descricao}) {
    return (
        <div className="enunciado">
            <div className="informacao">
                <Link to='/'><img src="/assets/image/voltar.png" alt="" /></Link>
                <h2>{titulo}</h2>
            </div>
            <div className={`faixa faixa-${faixa}`} />
            <div className="caixa-problema">
                <p>{descricao}</p>
            </div>
        </div>
    )
}