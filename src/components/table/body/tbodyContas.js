import { FaCheck } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Botao from "../../Botao"

const TBODYContas = ({dado, execute}) => { 
    return <>
    <tbody>
        <tr>
            <td> {dado.name}</td>  
            { dado.active && <td> {dado.active && <FaCheck />}   </td>}             
            <td><Botao execute={() => execute(dado.id)}> <MdDelete /></Botao></td>        
        </tr>   
    </tbody>   
    </>
}

export default TBODYContas