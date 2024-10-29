import './login.css'
import Botao from "../botao"
import Input from "../input"

const Login = ({doLogin, login, senha}) => {

   
    return <>
        <div className="cardLogin">
            <h2>Sign In</h2>
            <form onSubmit={doLogin} > 
                <div class="container">
                    <Input type='text' placeholder='User Name' obrigatorio='true'  digitado={login} />
                    <Input type='password' placeholder='Password' obrigatorio='true'  digitado={senha}/>
                    <Botao>Login</Botao>
                </div>
            </form>
        </div>
    </>
}

export default Login