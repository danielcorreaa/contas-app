import { useState } from "react";
import Input from "../Input";
import Botao from "../Botao";
import axios from "axios";
import Error from "../Error";
import { useNavigate } from "react-router-dom";

const CadastrarUsuario = () => {
    const [email, setEmail] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirma, setPasswordConfirma] = useState();
    const [error, setError] = useState();

    const [errorSenha, setErrorSenha] = useState();
    const navigate = useNavigate()

    const valueInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const valueInputUsuario = (event) => {
        setLogin(event.target.value)
    }
    const valueInputSenha = (event) => {
        setPassword(event.target.value)
    }
    const valueInputConfimarSenha = (event) => {
        setPasswordConfirma(event.target.value)
        if (event.target.value !== password) {
            console.log(passwordConfirma)
            setErrorSenha('Senhas não são correspondentes')
        } else if (event.target.value === password) {
            console.log("euals" + passwordConfirma)
            setErrorSenha(null)
        }
    }

    const cadastrar = (event) => {
        event.preventDefault()
        var url = process.env.REACT_APP_LINK_API
        const object = { 'email': email, 'login': login, 'senha': password }
        axios.post(url + "/login/user/create", object)
            .then(function (resp) {
                console.log(resp.data.body);
                setEmail(null)
                setLogin(null)
                setPassword(null)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                setError(error.response.body.errors)
            })

    }
    const execute = () => {
        navigate("/")
    }
    return <>
        <div className='casdastroConta'>
            <h3>Criar Conta </h3>

            <form onSubmit={cadastrar} >
                <Input type="text" valor={email} digitado={event => valueInputEmail(event)}
                    obrigatorio={true} label="Valor" placeholder="Digite o seu E-mail" />
                <Input type="text" valor={login} digitado={event => valueInputUsuario(event)}
                    obrigatorio={true} label="Valor" placeholder="Digite Login" />
                <Input type="password" valor={password} digitado={event => valueInputSenha(event)}
                    obrigatorio={true} label="Valor" placeholder="Digite a senha" />

                <Input type="password" valor={passwordConfirma} digitado={event => valueInputConfimarSenha(event)}
                    obrigatorio={true} label="Valor" placeholder="Confirmar senha" />
                {errorSenha && <Error msg={errorSenha} />}
               
                <div className="botoesAgrupados">
                    <Botao execute={execute}>Voltar</Botao>
                    <Botao >Cadastrar</Botao>
                </div>
            </form>

            {error && <Error msg={error} />}
        </div>
    </>
}

export default CadastrarUsuario