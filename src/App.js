import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Rodape from './components/Rodape';
import Rotas from './components/Router/Routes.js';
import { useContext } from 'react';
import { ContasContext } from './context/carrinhoProvider.js';




function App() {
  const { doLogin } = useContext(ContasContext)

  return (
    <div className="App">
      <BrowserRouter>
        {doLogin && <Header />}
        {doLogin && <Menu />}
        <div className='conteudo'>
          <Rotas />
        </div>
      </BrowserRouter>
      {doLogin && <Rodape />}
    </div>
  );
}

export default App;
