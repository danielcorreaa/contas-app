import {useEffect, useState } from "react";

export const useFetch = (url) => {  
    const [dados, setDados] = useState([]) 
    useEffect(() => { 
      console.log(url)
      fetch(process.env.REACT_APP_LINK_API.concat(url), 
         {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' } 
         }
      )
      .then((response) => response.json())
      .then((data) => {   
         setDados(data.body);
             
      })
      .catch((err) => {           
         console.log('AQui'+err.message);
      });
    }, [url])
      
    return dados
}
