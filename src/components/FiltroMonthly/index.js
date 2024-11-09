import './filtroMonthly.css'
import { useContext, useEffect, useState } from "react";
import ComboBox from "../ComboBox";
import MonthlyControl from "../MonthlyControl";
import { ContasContext } from "../../context/carrinhoProvider";
import Loader from "../Loader";
import Error from "../Error";
import Botao from "../Botao";
import http from "../../integracao/http";
import { TbRefresh } from "react-icons/tb";



const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const getIdMonth = (month) => {
    const d = new Date();
    return month.toUpperCase() + '--' + d.getFullYear()
}

const getId = () => {
    const d = new Date();
    return monthNames[d.getMonth()].toUpperCase() + '--' + d.getFullYear()
}

const getMonth = () => {
    const d = new Date();
    return monthNames[d.getMonth()]
}

const FiltroMonthly = () => {

    const { removeLoader, setRemoveLoader } = useContext(ContasContext)

    const [dados, setDados] = useState()
    const [error, setError] = useState()
    const [month, setMonth] = useState()

    useEffect(() => {
        setRemoveLoader(true)
        http.get("/monthly/" + getId())
            .then(function (response) {
                setRemoveLoader(false)
                setDados(response.data.body);
            })
            .catch((error) => {
                setRemoveLoader(false)
                if (error.status == 403) {
                    setError(error.message)
                } else if (error.response) {
                    setError(error.response.data.errors)
                } else {
                    setError(error.message)
                }

                console.log(error)
            })
    }, [])


    const select = (event) => {
        setRemoveLoader(true)
        setMonth(event.target.value)
        http.get("/monthly/" + getIdMonth(event.target.value))
            .then(function (response) {
                setDados(response.data.body);
                setError(null)
                setRemoveLoader(false)
            })
            .catch((error) => {
                setRemoveLoader(false)
                setError(error.response.data.errors)
                console.log(error)
            })

    }

    const execute = () => {
        setRemoveLoader(true)
        console.log(getId())
        const id = month === undefined ? getId() : getIdMonth(month)
        console.log(id)
        http.post("/monthly/" + id, {})
            .then(function (response) {
                setDados(response.data.body);
                setRemoveLoader(false)
                setError(null)
            })
            .catch((error) => {
                if (error.response.data) {
                    setError(error.response.data.errors)
                }
                setRemoveLoader(false)
                console.log(error)
            })
    }

    return <>
        <ComboBox values={monthNames} select={select} monthAtual={getMonth()} />

        {removeLoader && <Loader />}
        {!removeLoader &&

            ((dados) && !error) &&
            <div className='content-panel'>
                <h3>Contas do Mês de {month} </h3>
                <div className='btnRefresh'>
                    <Botao  execute={() => execute()}><TbRefresh /></Botao>
                </div>
                <MonthlyControl dados={dados} />
            </div>


        }
        {!removeLoader && error &&
            <div>
                <Error msg={error} />
                <h2>Nenhuma Lista de contas cadastrada para o mês de {month}</h2>
                <Botao execute={() => execute()}>Gerar lista de contas</Botao>
            </div>
        }
    </>
}

export default FiltroMonthly