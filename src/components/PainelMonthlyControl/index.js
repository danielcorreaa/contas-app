import { useContext, useState } from 'react';
import ConsultaConta from '../../integracao/consultaContasAPagar';
import Botao from '../Botao';
import './painel.css'
import axios from 'axios';
import { ContasContext } from '../../context/carrinhoProvider';
import Loader from '../Loader';

import MonthlyControl from '../MonthlyControl';

const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
];

const getId = () =>{
    const d = new Date();
    return monthNames[d.getMonth()].toUpperCase() +'--'+ d.getFullYear()
}
const getMonth = () =>{
    const d = new Date();
    return monthNames[d.getMonth()]
}

const Panel = () => {      
    const {removeLoader} = useContext(ContasContext) 
    var url = process.env.REACT_APP_LINK_API
    const [dados, setDados] = useState() 

    const contas = ConsultaConta("/monthly/", getId());

    const mustShow = () => {
        if(dados === undefined && contas === undefined){
            return true
        }
        if(dados === undefined && contas !== undefined){
            return false
        }
    }

    const execute = () =>{
        axios.post(url+"/monthly", {})           
            .then(function (response) {
                console.log(response);
                setDados(response.data.body);                              
            })
            .catch((error) => {
                console.log(error)
            } )
    }

    return  <> 
    {removeLoader && <Loader/>}  
    {!removeLoader && 

        (dados || contas) &&
            <div className='content-panel'> 
                <h3>Contas do Mês de </h3>
                <MonthlyControl  dados={dados == null ? contas : dados}/>             
            </div>  
        }    
        { mustShow() && <div className='content-panel'> 
            <h2>Nenhuma Lista de contas cadastrada para o mês de {getMonth()}</h2>
            
            <Botao execute={() => execute()}>Gerar lista de contas</Botao>
        </div>
    
    }
    </>
}

export default Panel
 