import {useContext, useEffect, useState } from "react";
import { ContasContext } from "../context/carrinhoProvider";

export const useFetch = (url) => {  
    const {setRemoveLoader} = useContext(ContasContext)  
    const [dados, setDados] = useState([]) 

    useEffect(() => { 
      setRemoveLoader(true)
      fetch(process.env.REACT_APP_LINK_API.concat(url), 
         {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' } 
         }
      )
      .then((response) => response.json())
      .then((data) => {   
         setDados(data.body);
         setRemoveLoader(false)             
      })
      .catch((err) => {           
         console.log('AQui'+err.message);
         setRemoveLoader(false)
      });
    }, [url,setRemoveLoader])
      
    return dados
}
