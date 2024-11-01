import { useState } from 'react';
import './conta.css'
import axios from 'axios';
import TBODYContasAPAgar from '../table/body/tbodyContasAPagar';



const Conta = ({dados}) => {
    var url = process.env.REACT_APP_LINK_API
    const [valor, setValor] = useState()
    const [response, setResponse] = useState()

    const pagar = (id) => {
       const object = {
            'idMonthly': dados.id, 
            'idAccount': id,
            'valor': valor, 
            'check': true
       } 
         
       axios.put(url+"/monthly", object)
             .then(function(resp) {
                console.log(resp.data.body);
                setResponse(resp.data.body);                              
             })
             .catch((error) => {
                console.log(error)
             } )               
    }

    const monthly = () => {
        if(response === undefined){
            return dados
        } else {
            return response
        }
    }


    const valueInput = (event, Key) => {
        console.log(event.target.value)
        setValor(event.target.value)
    } 
    return  <>         
         <div className='conta'> 
            <h3>Contas do Mês de </h3>
            <table>
                <thead>
                    <tr>
                        <th> Nome da conta</th>                                     
                        <th> Valor a pagar </th>
                        <th> Pagamento Realizado</th>
                        <th> valor Pago</th>
                        <th> Pago</th>
                    </tr>
                </thead>
                {monthly().account && monthly().account.map( dado => 
                      <TBODYContasAPAgar key={dado.id} dado={ dado} valueInput={valueInput} pagar={pagar}/>                                  
                )} 
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>                   
                        <td>R$ {monthly().total}</td>
                        <td></td>
                    </tr>
                </tfoot>                
             </table>
         </div>    
     </>
}

export default Conta