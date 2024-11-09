import './ComboBox.css'
const ComboBox = ({values, select, monthAtual}) =>{
   // console.log(monthAtual)
    return <>
        <div className="custom-select">
            <select onChange={select}  defaultValue={monthAtual}>
                {values.map( month =>                    
                    <option  value={month}>{month}</option> 
                    )    
                }        
            </select>
        </div>
    </>
}

export default ComboBox