import { Link } from 'react-router-dom'
import './menu.css'
import { FaBars } from 'react-icons/fa'
import Botao from '../Botao'
import { useState } from 'react'

const Menu = () => {

    const [show, setShow] = useState(false);
    const execute = () => {
        if(show === false){
            setShow(true)
        } else {
            setShow(false)
        }
    }   
    return <>
    <div className="topnav">
        <Link className='text-link' to="/filtroMonthly">Home</Link>
        <Link className='text-link' to="/listaContasAtivas">Cadatro de contas</Link>
        <Link className='text-link' to="/lista">Lista de Contas Anteriores</Link> 
    </div>

    <div className="responsive">
        <div className='icon'>
            <Botao execute={execute} >
                 <FaBars />
            </Botao>
        </div>
       {show &&
            <div className='links'>
                <Link className='text-link' to="/filtroMonthly">Home</Link>
                <Link className='text-link' to="/listaContasAtivas">Cadatro de contas</Link>
                <Link className='text-link' to="/lista">Lista de Contas Anteriores</Link>  
            </div>
        }
    </div>
   </>
}

export default Menu