import { useFetch } from "./usefetch"

const ConsultaContas = (url) => { 
    const dados = useFetch(url)
    return dados
}

export default ConsultaContas