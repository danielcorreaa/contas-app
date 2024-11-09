import './Input.css'

const Input = ({value, digitado, obrigatorio, placeholder}) => {

    return (
        <div className="campo-texto">            
            <input value={value} onChange={digitado} 
                required="true"  placeholder={placeholder}/>
        </div>
    )
}

export default Input