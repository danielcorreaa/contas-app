import { useFetch } from "./usefetch"

const ConsultaConta = (url, param) => { 
    const dados = useFetch(url.concat(param))
    return dados
}

export default ConsultaConta