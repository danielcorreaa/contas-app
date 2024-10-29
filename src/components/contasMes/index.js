import { FaCheck, FaCircleNotch } from 'react-icons/fa'
import './monthly.css'

const Monthly = ({props}) => {
    console.log(props)
    const isValid = (prop) =>{
        if(prop == undefined){
            return true
        }
        if(prop == false){
            return true
        }
    }
    return <>
        <div className='card'>
            <h3>{props.id.replace('--',' ')}</h3>
            <table>
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
    </>
}

export default Monthly