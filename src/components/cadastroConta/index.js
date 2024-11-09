import { useContext, useState } from "react"
import Botao from "../Botao"
import Input from "../Input"
import "./cadastroConta.css"
import { useNavigate } from "react-router-dom"
import { ContasContext } from "../../context/carrinhoProvider"
import http from "../../integracao/http"
import { jwtDecode } from "jwt-decode"
import Error from "../Error"
import { FaPlusSquare } from "react-icons/fa"

const getUser = () => {
    const token = sessionStorage.getItem('token')
    const decoded = jwtDecode(token);
    return decoded.sub
}

const CadastroConta = () => {
    const { removeLoader, setRemoveLoader } = useContext(ContasContext)
    const [conta, setConta] = useState()
    const [contas, setContas] = useState([])
    const [error, setError] = useState()
    const navigate = useNavigate()

    const valueInput = (event) => {
        setConta(event.target.value)
    }

    const addConta = () => {
        if (conta !== '') {
            contas.push(conta)
            setConta('')
            setError('')
        }
        console.log(contas)
    }
    const cadastrar = () => {
        setRemoveLoader(true)
        const objeto = {
            namesAccounts: contas,
            user: getUser()
        }
        http.post("/account", objeto)
            .then((resp) => {
                console.log(resp.data)
                setRemoveLoader(false)
                setError('')
                navigate("/listaContasAtivas")
            })
            .catch((error) => {
                setRemoveLoader(false)
                if (error.status === 403) {
                    setError(error.message)
                } else {
                    setError(error.response.data.errors)
                }
                console.log(error)
            })
    }
    const execute = () => {
        navigate("/listaContasAtivas")
    }
    return <>
        <div className='casdastroConta'>
            <h3>Cadastrar nova conta </h3>


            <div className="inputPlus">
                <Input valor={conta} digitado={event => valueInput(event)}
                    obrigatorio={true} label="Valor" placeholder="Digite o nome da conta" />
                <Botao execute={addConta}><FaPlusSquare size={25} /></Botao>
            </div>
            <div className="listaContas">
                <ol>
                    {contas.map(conta =>
                        <li> {conta} </li>
                    )}
                </ol>
            </div>
            <div className="botoesAgrupados">
                <Botao execute={execute}>Voltar</Botao>
                <Botao execute={cadastrar}>Cadastrar</Botao>
            </div>
            {!removeLoader && error &&
                <div>
                    <Error msg={error} />
                </div>
            }
        </div>

    </>
}

export default CadastroConta
