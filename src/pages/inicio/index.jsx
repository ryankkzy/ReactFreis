import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Card from '../../components/card';

export default function Inicio() {

  return (

    <div className="pagina-inicio">
      <Cabecalho />
      <div className='inicio'>
        <div className='titulo'>
          <h2>Escolha um treino...</h2>
        </div>
        <div className='exercicios'>
          <Card card="1" titulo="Cupom de desconto" subtitulo="Exercicio 1" caminho="1" />
          <Card card="2" titulo="Converter Kg/gramas" subtitulo="Exercicio 2" caminho="2" />
          <Card card="3" titulo="Valor total por quantidade" subtitulo="Exercicio 3" caminho="3" />
          <Card card="4" titulo="Leitura de livro" subtitulo="Exercicio 4" caminho="4" />
          <Card card="5" titulo="Média de notas" subtitulo="Exercicio 5" caminho="5" />
          <Card card="6" titulo="Salário líquido" subtitulo="Exercicio 6" caminho="6" />
          <Card card="7" titulo="Cores primárias" subtitulo="Exercicio 7" caminho="7" />
          <Card card="8" titulo="Temperatura" subtitulo="Exercicio 8" caminho="8" />
          <Card card="9" titulo="Sorveteria" subtitulo="Exercicio 9" caminho="9" />
          <Card card="10" titulo="Cálculo de IMC com histórico" subtitulo="Exercicio 10" caminho="10" />
          <Card card="11" titulo="Tabuada" subtitulo="Exercicio 11" caminho="11" />
         {/*<Card card="12" titulo="Comparador de pessoas" subtitulo="Exercicio 12" caminho="12" />*/}
        </div>
      </div>
    </div>
  );
}
