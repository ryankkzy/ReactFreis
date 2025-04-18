import "./index.scss";
import { Link } from "react-router-dom";

export default function Card({ card, titulo, subtitulo, caminho }) {
  return (
    <div className={`card card-${card}`}>
      <Link to={`/pages/exercicio${caminho}`} className="link">
        <div className="retangulo" />
        <h3 className="titulo">{titulo}</h3>
        <h4 className="subtitulo">{subtitulo}</h4>
      </Link>
    </div>
  );
}