import { createContext, useState } from "react";

export const ContasContext = createContext();

const ContasProvider = ({ children }) => {      
    const [removeLoader, setRemoveLoader] = useState(false)  
    const [doLogin, setDoLogin] = useState(false);
    
    return (
      <ContasContext.Provider value={{          
          removeLoader, setRemoveLoader, doLogin, setDoLogin   
        }} >
        {children}
      </ContasContext.Provider>
    );
};

export default ContasProvider