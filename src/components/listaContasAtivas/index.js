import { useNavigate } from "react-router-dom";
import ConsultaContas from "../../integracao/consultaConta"
import Botao from "../botao";
import TBODYContas from "../table/body/tbodyContas";


const ListaContasAtivas = () => {
    const account = ConsultaContas("/account/true");

    const navigate = useNavigate()
    
    const cadastro = () => {
        navigate("/cadastroConta")
    }
    
    return <>
        <div className="side-right">
            <div className='content-panel'>
                <div className='panel'>
                    <div className='casdastroConta'>
                        <h3>Contas Cadastradas </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th> Nome da conta</th>
                                    <th> Status </th>
                                    <th> Cancelar </th>
                                </tr>
                            </thead>
                            {account && account.map(dado =>
                                <TBODYContas key={dado.id} dado={dado} />
                            )}
                        </table>

                        <Botao execute={cadastro} >Cadastrar Conta</Botao>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ListaContasAtivas
