import './login.css'
import Botao from "../Botao"
import Input from "../Input"
import { useContext, useState } from 'react'
import { ContasContext } from '../../context/carrinhoProvider'
import axios from 'axios'
import Error from '../Error'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const { doLogin, setDoLogin } = useContext(ContasContext)

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const valueInputLogin = (event) => {
        setLogin(event.target.value)
    }

    const valueInputSenha = (event) => {
        setPassword(event.target.value)
    }
    const enter = (event) => {
        event.preventDefault()
        var url = process.env.REACT_APP_LINK_API
        const object = { 'login': login, 'senha': password }
        axios.post(url + "/login", object)
            .then(function (resp) {
                sessionStorage.setItem('token', resp.data.body)
                setDoLogin(true)
                navigate('/filtroMonthly')
            })
            .catch((error) => {
                console.log(error)
                setError("Usuário ou senha incorretos!")
            })
    }
    return <>
        <div className='fundo-login'>
            <div className="cardLogin">
                <h2>Sign In</h2>
                <form onSubmit={enter} >
                    <div className="container">
                        <Input type='text' placeholder='User Name' obrigatorio="true" digitado={valueInputLogin} />
                        <Input type='password' placeholder='Password' obrigatorio="true" digitado={valueInputSenha} />
                        <Botao>Login</Botao>
                    </div>
                </form>
                {error && <Error msg={error} />}
                <Link className='cadastrar-usuario' to="/cadastrarUsuario">Cadastrar Usuário</Link>
            </div>
        </div>
    </>
}

export default Login