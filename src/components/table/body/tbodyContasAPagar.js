import { GiConfirmed } from "react-icons/gi";
import Botao from "../../botao"
import Input from "../../input"
import { FaCheck } from "react-icons/fa"

const TBODYContasAPAgar = ({dado, valueInput, pagar}) => { 
    return <>
    <tbody>
        <tr>
           <td> {dado.name}</td>    
           <td>                                 
                <Input type="number" valor={dado.valor} digitado={event => valueInput(event, 'name')}
                    obrigatorio={true} label="Valor" placeholder="Digite o valor"/>
            </td>
            {dado.id &&  <td>
                    <Botao execute={() => pagar(dado.id)}><GiConfirmed />
                    </Botao >
                </td>   }
            { dado.valor && <td>R$ {dado.valor} </td> }
            { dado.check && <td> {dado.check && <FaCheck />}   </td>}
        </tr>   
    </tbody>   
    </>
}

export default TBODYContasAPAgar