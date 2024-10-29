import Botao from '../botao';
import './header.css'
import { SiPicpay } from "react-icons/si";


const Header = ({execute}) => {
    return  <>         
         <header className='header'> 
             <SiPicpay className="logo" size={35}/>
             <div className='btnSair'>
                <Botao execute={execute}>Sair</Botao>  
             </div>           
         </header>    
     </>
}
 
 
export default Header