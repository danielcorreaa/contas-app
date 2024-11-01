import { useState } from "react"
import Botao from "../botao"
import Input from "../input"
import "./cadastroConta.css"
import { useNavigate } from "react-router-dom"
import CadastrarConta from "../../integracao/cadastrarConta"

const CadastroConta = () => {

    const [conta, setConta] = useState([]) 

    const navigate = useNavigate()

    const valueInput = (event) => {
        setConta(event.target.value)     
    }

    const cadastrar = (event) => {
        event.preventDefault() 
        CadastrarConta(conta)   
       
        navigate("/listaContasAtivas")
    }
    return <>
        <div className="side-right">
            <div className='content-panel'>
                <div className='panel'>
                    <div className='casdastroConta'>
                        <h3>Cadastrar nova conta </h3>

                        <form onSubmit={cadastrar} > 
                           <Input type="text" valor={conta} digitado={event => valueInput(event)}
                                    obrigatorio={true} label="Valor" placeholder="Digite o valor"/>
                           <Botao>Cadastrar</Botao>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default CadastroConta
