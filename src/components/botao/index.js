import './Botao.css'

const Botao = ({children, execute}) => {  
    const podeClicar = execute !== undefined
    
    return (
            (podeClicar) ? 
            (<button className='botao' onClick={() => execute()} >
                {children}
                </button>)
                :
            (<button className='botao'  >
            {children}
            </button>)
             
    )
}

export default Botao