import { FaCheck, FaCircleNotch } from 'react-icons/fa'
import './monthly.css'

const Monthly = ({props}) => {
    const isValid = (prop) =>{
        if(prop === undefined){
            return true
        }
        if(prop === false){
            return true
        }
    }
    return <>
        <div className='contas'>
            <div className='conta'>          
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Contas do mes de {props.id.replace('--',' ')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.account.map( prop => 
                            <tr>                        
                                <td>{prop.name}</td>
                                {prop.check && <td>  <FaCheck /></td>}  
                                {isValid(prop.check) && <td>  <FaCircleNotch /></td>}                              
                            </tr>
                        )} 
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>                                      
                            <td>R$ {props.total}</td>
                            <td></td>
                        </tr>
                    </tfoot>  
                </table>
            </div>
            <div className='conta-mobile'>          
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contas do mes de {props.id.replace('--',' ')}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.account.map( prop => 
                        <tr>                        
                            <td>{prop.name}</td>
                             {prop.check && <td>  <FaCheck /></td>}  
                             {isValid(prop.check) && <td>  <FaCircleNotch /></td>}                              
                        </tr>
                    )} 
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>                                      
                        <td>R$ {props.total}</td>
                        <td></td>
                    </tr>
                </tfoot>  
            </table>
        </div>
        </div>
    </>
}

export default Monthly