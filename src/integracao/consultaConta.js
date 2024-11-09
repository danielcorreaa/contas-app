import { useEffect, useState } from "react"
import http from "./http"

const ConsultaContas = (url) => { 
    const [dados, setDados] = useState([]) 
    useEffect(() => { 
        http.get(url)           
                .then(function (response) {                
                    setDados(response.data.body);                           
                })
                .catch((error) => {
                    console.log(error)
                } )   
    }, [url])
    return dados
}

export default ConsultaContas