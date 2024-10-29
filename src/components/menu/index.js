import { Link } from 'react-router-dom'
import './menu.css'

const DefaultSidebar = () =>{
    return <>
        <div className="sidenav">
            <ol>                
                <li><Link className='text-link' to="/">Home</Link></li>
                <li><Link className='text-link' to="/listaContasAtivas">Cadatro de contas</Link></li>
                <li><Link className='text-link' to="/lista">Lista de Contas Anteriores</Link></li>
            </ol>           
        </div>
       </>
    
}

export default DefaultSidebar