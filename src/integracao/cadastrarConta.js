import axios from "axios"

const CadastrarConta = (conta) =>{
    var url = process.env.REACT_APP_LINK_API
    axios.post( url+  "/account", [ conta ])
             .then((resp) =>{                             
                if(resp.data.code === 200){ 
                    console.log(resp.data)
                }                               
             })
             .catch((error) => {
                console.log(error)
             } ) 

}

export default CadastrarConta