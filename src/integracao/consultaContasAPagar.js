import { useContext, useEffect, useState } from "react";
import http from "./http";
import { ContasContext } from "../context/carrinhoProvider";

const ConsultaConta = (url, param) => {
    const {setRemoveLoader} = useContext(ContasContext) 
    const [dados, setDados] = useState([]) 
    const [error, setError] = useState() 
    useEffect(() => { 
        setRemoveLoader(true)
        http.get(url+param)           
                .then(function (response) {    
                    setRemoveLoader(false)            
                    setDados(response.data.body);                           
                })
                .catch((error) => {
                    setRemoveLoader(false)
                    console.log(error)
                    setError(error.response.data.errors)
                } )   
    }, [url,param])
   
    if(error){
        console.log()
        return error
    }
    return dados
}

export default ConsultaConta