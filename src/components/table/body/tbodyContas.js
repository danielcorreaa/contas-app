import { GiConfirmed } from "react-icons/gi";
import Botao from "../../botao"
import Input from "../../input"
import { FaCheck } from "react-icons/fa"

const TBODYContas = ({dado, valueInput, pagar}) => { 
    return <>
    <tbody>
        <tr>
            <td> {dado.name}</td>  
            { dado.active && <td> {dado.active && <FaCheck />}   </td>}            
        </tr>   
    </tbody>   
    </>
}

export default TBODYContas