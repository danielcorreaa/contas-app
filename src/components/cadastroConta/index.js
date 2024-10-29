import { useState } from "react"
import Botao from "../botao"
import Input from "../input"
import "./cadastroConta.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CadastroConta = () => {

    const [conta, setConta] = useState([]) 

    const navigate = useNavigate()

    const valueInput = (event) => {
        setConta(event.target.value)     
    }

    const cadastrar = (event) => {
        event.preventDefault()     
        axios.post("http://localhost:8082/account", [ conta ])
             .then((resp) =>{                             
                if(resp.data.code === 200){ 
                    console.log(resp.data)
                }                               
             })
             .catch((error) => {
                console.log(error)
             } ) 
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
