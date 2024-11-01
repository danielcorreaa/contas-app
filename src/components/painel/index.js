import { useState } from 'react';
import ConsultaConta from '../../integracao/consultaContasAPagar';
import Botao from '../botao';
import Conta from '../conta'
import './painel.css'
import axios from 'axios';

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
    const [dados, setDados] = useState() 
    const contas = ConsultaConta("/monthly/", getId());
    console.log(contas)
    console.log('dados'+dados)

    const mustShow = () => {
        if(dados === undefined && contas === undefined){
            return true
        }
        if(dados === undefined && contas !== undefined){
            return false
        }
    }

    const execute = () =>{
        axios.post("http://localhost:8082/monthly", {})           
            .then(function (response) {
                console.log(response);
                setDados(response.data.body);                              
            })
            .catch((error) => {
                console.log(error)
            } )
    }

    return  <>   
    {(dados || contas) &&
        <div className='content-panel'>            
            <div className='panel'> 
                <Conta  dados={dados == null ? contas : dados}/>
            </div>  
         </div>  
    }    
    { mustShow() && <div className='content-panel'> 
        <h2>Nenhuma Lista de contas cadastrada para o mês de {getMonth()}</h2>
        
        <Botao execute={() => execute()}>Gerar lista de contas</Botao>
    </div>}
     </>
}

export default Panel
 