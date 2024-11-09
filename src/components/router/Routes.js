import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ListaContas from "../ListaMonthly";
import ListaContasAtivas from "../ListaContasAtivas";
import CadastroConta from "../CadastroConta";
import FiltroMonthly from "../FiltroMonthly";
import Login from "../Login";
import CadastrarUsuario 
from "../CadastroUsuario";
import { ContasContext } from "../../context/carrinhoProvider";

const Rotas = () => { 
   const {doLogin} = useContext(ContasContext)
 
   return <>         
         <Routes>  
            <Route path="/" element={<Login/>} />  
            <Route path="/cadastrarUsuario" element={<CadastrarUsuario/>}/>  
            { doLogin &&
               <>
               <Route path="/filtroMonthly" element={<FiltroMonthly/>} />
               <Route path="/listaContasAtivas" element={<ListaContasAtivas/>}/> 
               <Route path="/lista" element={<ListaContas/>}/> 
               <Route path="/cadastroConta" element={<CadastroConta/>}/> 
               </>
            }
         
         </Routes> 
       </>
}

export default Rotas;