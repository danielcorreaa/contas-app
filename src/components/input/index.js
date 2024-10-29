import './Input.css'

const Input = ({value, digitado, obrigatorio, placeholder, type}) => {

    return (
        <div className="campo-texto">            
            <input type={type} value={value} onChange={digitado} 
                required={obrigatorio}  placeholder={placeholder}/>
        </div>
    )
}

export default Input