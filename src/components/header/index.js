import { CiLogout } from 'react-icons/ci';
import Botao from '../Botao';
import './header.css'
import { SiPicpay } from "react-icons/si";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContasContext } from '../../context/carrinhoProvider';
import User from '../../integracao/decodejwt';


const Header = () => {

   
    const { doLogin, setDoLogin } = useContext(ContasContext)
    const navigate = useNavigate()

    const execute = () => {
        setDoLogin(false)
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return <>
        <header className='header'>
            <SiPicpay className="logo" size={35} />
            {doLogin &&
                <div className='btnSair'>
                    <h4>Usuário logado: {User()}</h4>
                    <Botao execute={execute}><CiLogout /> </Botao>
                </div>
            }
        </header>
    </>
}


export default Header