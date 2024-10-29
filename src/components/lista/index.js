import ConsultaMonthly from '../../integracao/consultaMonth'
import Monthly from '../contasMes'
import './lista.css'

const ListaContas = () => {
    const dados = ConsultaMonthly("/monthly?page=0&size=12")
   
    return <>
        <div className="side-right">
            <div className='content-panel'>
                <div className='panel'>
                    <div className='lista-contas'>
                        <h3>Lista de contas  </h3>
                        {dados.map( dado => 
                            <Monthly key={dado.id} props={dado}/>
                        )}                       
                    </div>                        
                </div>
            </div>
        </div >
    </>

}

export default ListaContas