import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "../content";
import DefaultSidebar from "../menu";
import ListaContas from "../lista";
import ListaContasAtivas from "../listaContasAtivas";
import CadastroConta from "../cadastroConta";
import Login from "../login";




const Rotas = () => {
   return <>
         <BrowserRouter>           
            <div className="content">
               <div className="side-left">
                  <DefaultSidebar/>
               </div>
               <Routes>  
                  <Route path="/" element={<Content/>}/>   
                  <Route path="/listaContasAtivas" element={<ListaContasAtivas/>}/> 
                  <Route path="/lista" element={<ListaContas/>}/> 
                  <Route path="/cadastroConta" element={<CadastroConta/>}/>  
               </Routes> 
            </div>
         </BrowserRouter>    
       </>


     

      
   
}

export default Rotas;