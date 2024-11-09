import axios from "axios"
import { useState } from "react"

const DeleteConta = (id) =>{
    console.log(id)
    const [response, setResponse] = useState()
    var url = process.env.REACT_APP_LINK_API
    axios.put(url+"/account/inactive/"+id, {})
             .then(function(resp) {
                console.log(resp.data.body);
                setResponse(resp.data.body);                              
             })
             .catch((error) => {
                console.log(error)
             } )    
    return response
}

export default DeleteConta