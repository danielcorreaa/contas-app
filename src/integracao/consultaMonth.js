import { useFetch } from "./usefetch"

const ConsultaMonthly = (url) => { 
    const dados = useFetch(url)
    return dados
}

export default ConsultaMonthly