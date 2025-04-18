import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Exercicio1 from './pages/exercicio1';
import Exercicio2 from './pages/exercicio2';
import Exercicio3 from './pages/exercicio3';
import Exercicio4 from './pages/exercicio4';
import Exercicio5 from './pages/exercicio5';
import Exercicio6 from './pages/exercicio6';
import Exercicio7 from './pages/exercicio7';
import Exercicio8 from './pages/exercicio8';
import Exercicio9 from './pages/exercicio9';
import Exercicio10 from './pages/exercicio10';
import Exercicio11 from './pages/exercicio11';

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                 <Route path='/' element={<Inicio/>} />
                 <Route path='/pages/sobre' element={<Sobre/>} />
                 <Route path='/pages/exercicio1' element={<Exercicio1/>} />
                 <Route path='/pages/exercicio2' element={<Exercicio2/>} />
                 <Route path='/pages/exercicio3' element={<Exercicio3/>} />
                 <Route path='/pages/exercicio4' element={<Exercicio4/>} />
                 <Route path='/pages/exercicio5' element={<Exercicio5/>} />
                 <Route path='/pages/exercicio6' element={<Exercicio6/>} />
                 <Route path='/pages/exercicio7' element={<Exercicio7/>} />
                 <Route path='/pages/exercicio8' element={<Exercicio8/>} />
                 <Route path='/pages/exercicio9' element={<Exercicio9/>} />
                 <Route path='/pages/exercicio10' element={<Exercicio10/>} />
                 <Route path='/pages/exercicio11' element={<Exercicio11/>} />
            </Routes>
        </BrowserRouter>
    )
}