import { useState } from 'react';
import './conta.css'
import TBODYContasAPAgar from '../table/body/tbodyContasAPagar';
import http from '../../integracao/http';



const MonthlyControl = ({dados}) => {
    const [valor, setValor] = useState()

    const [response, setResponse] = useState()
    const [ setError] = useState()

    const pagar = (id) => {
       const object = {
            'idMonthly': dados.id, 
            'idAccount': id,
            'valor': valor, 
            'check': true
       }      
       http.put("/monthly", object)
             .then(function(resp) {
                setResponse(resp.data.body); 
             })
             .catch((error) => {
                setError(error)
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

         <div className='conta-mobile'>             
            <table>
                <thead>
                    <tr>
                        <th> Conta</th>                                     
                        <th> a pagar </th>
                        <th> Pag. Realizado</th>
                        <th> Pago</th>
                        <th></th>
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

export default MonthlyControl