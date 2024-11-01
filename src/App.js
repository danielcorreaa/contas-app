import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Rodape from './components/rodape';
import Rotas from './components/router/Routes';

function App() {
  const [ makeLogin, setMakeLogin] = useState(false);
  const [ login, setLogin] = useState();
  const [ password, setPassword] = useState();
  const valueInputLogin = (event) => {
    setLogin(event.target.value)
  }

  const valueInputSenha = (event) => {
    setPassword(event.target.value)
  }

  const doLogin = (event) => {
    event.preventDefault()
    if(login === 'admin' && password === '1234') {
      setMakeLogin(true)
    } 
    console.log(makeLogin)
  }

  const execute = () => {
    setMakeLogin(false)
  }
  return (
    <div className="App">
     
     { !makeLogin && <Login doLogin={doLogin} login={event => valueInputLogin(event)} senha={event => valueInputSenha(event)} /> }  
     { makeLogin && <Header execute={execute}/> }
     { makeLogin && <Rotas/> }
     { makeLogin && <Rodape/> }      
     
    </div>
  );
}

export default App;
