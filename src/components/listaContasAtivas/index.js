import './listaContasAtivas.css'
import { useNavigate } from "react-router-dom";
import ConsultaContas from "../../integracao/consultaConta"
import Botao from "../Botao";
import TBODYContas from "../table/body/tbodyContas";
import { MdCreate } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { ContasContext } from '../../context/carrinhoProvider';
import Loader from '../Loader';
import http from '../../integracao/http';
import Error from '../Error';


const ListaContasAtivas = () => {
    const { removeLoader, setRemoveLoader } = useContext(ContasContext)
    const [dados, setDados] = useState([])
    const [error, setError] = useState()
    
    useEffect(() => {
        setRemoveLoader(true)
        http.get("/account/true")
            .then(function (response) {
                setDados(response.data.body);
                setRemoveLoader(false)
                setError('')
            })
            .catch((error) => {
                //console.log(error)
                setRemoveLoader(false)
                setError(error.message)
            })
    }, [])

    const account = ConsultaContas("");

    const navigate = useNavigate()

    const cadastro = () => {
        navigate("/cadastroConta")
    }

    const deletar = (id) => {
        setRemoveLoader(true)
        http.put("/account/inactive/" + id, {})
            .then(function (resp) {
                console.log(resp.data.body);
            })
            .catch((error) => {
                console.log(error)
            })
        setRemoveLoader(false)
    }

    return <>
        {removeLoader && <Loader />}
        {!removeLoader &&
            <div>
                <div className='conta'>
                    <h3>Contas Cadastradas </h3>
                    <div className="btn">
                        <Botao execute={cadastro} ><MdCreate /></Botao>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th> Nome da conta</th>
                                <th> Status </th>
                                <th></th>
                            </tr>
                        </thead>
                        {dados && dados.map(dado =>
                            <TBODYContas key={dado.id} dado={dado} execute={deletar} />
                        )}
                    </table>
                </div>

                <div className='conta-mobile'>
                    <h3>Contas Cadastradas </h3>
                    <div className="btn">
                        <Botao execute={cadastro} ><MdCreate /></Botao>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th> Nome da conta</th>
                                <th> Status </th>
                                <th></th>
                            </tr>
                        </thead>
                        {dados && dados.map(dado =>
                            <TBODYContas key={dado.id} dado={dado} execute={deletar} />
                        )}
                    </table>
                </div>
            </div>
        }

        {!removeLoader && error &&
            <div>
                <Error msg={error} />
            </div>
        }
    </>
}

export default ListaContasAtivas
