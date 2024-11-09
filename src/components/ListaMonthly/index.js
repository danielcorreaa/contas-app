import { useContext, useEffect, useState } from 'react'
import ConsultaMonthly from '../../integracao/consultaMonth'
import Monthly from '../Monthly'
import './lista.css'
import { ContasContext } from '../../context/carrinhoProvider'
import Loader from '../Loader'
import http from '../../integracao/http'
import Error from '../Error'

const ListaContas = () => {
    const { removeLoader, setRemoveLoader } = useContext(ContasContext)

    const [dados, setDados] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        setRemoveLoader(true)
        http.get("/monthly?page=0&size=12")
            .then(function (response) {
                setRemoveLoader(false)
                setDados(response.data.body);
            })
            .catch((error) => {
                setRemoveLoader(false)
                if (error.status == 403) {
                    setError(error.message)
                } else if(error.response){
                    setError(error.response.data.errors)
                } else {
                    setError(error)
                }
                console.log(error)
            })
    }, [])

    return <>

        {removeLoader && <Loader />}
        {!removeLoader &&
            <div>
                <h3>Lista de contas  </h3>
                <div className='lista-contas'>
                    {dados && dados.map(dado =>
                        <Monthly key={dado.id} props={dado} />
                    )}
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

export default ListaContas