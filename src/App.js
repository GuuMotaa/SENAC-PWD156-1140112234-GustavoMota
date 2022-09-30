import { Routes, Route } from "react-router-dom"
import Home from './Paginas/Home';
import Cadastro from './Paginas/Cadastro';
import ContaCorrente from './Paginas/Conta Corrente'
import Simulacao from './Paginas/Simulação'
import Sobrenos from './Paginas/Sobre nós'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="cadastro" element={ <Cadastro/> } />
        <Route path="simulacao" element={ <Simulacao/> } />
        <Route path="sobre" element={ <Sobrenos/> } />
        <Route path="contacorrente" element={<ContaCorrente/>} />
      </Routes>
    </div>
  );
}

export default App;
