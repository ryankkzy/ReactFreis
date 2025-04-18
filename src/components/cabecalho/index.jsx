import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {

    return (
        <div className='cabecalho'>
            <header className='comp-cabecalho'>
                <div className='logoTitulo'>
                    <img src="/assets/image/image 1.png" alt="" />
                    <h2>React FreiS</h2>
                </div>
                <div className='links'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/pages/sobre'>Sobre</Link>
                </div>
            </header>
        </div>
    )
}