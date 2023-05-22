import { Route, Routes } from "react-router-dom"
import React, { Component }  from 'react';
import Sign_up from '../Pages/Sign_up';
import Log_in from '../Pages/Log_in';
import Detalle from "../Pages/Detail_prod";
// import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
// import Contador from '../Pages/Contador';
 
function Public(){
    return(
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/registrarse' element={<Sign_up />} />
          <Route path='/Log_in' element={<Log_in />} />
          <Route path='/producto/:id' element={<Detalle />} /> 
        </Routes>
    )
}

export default Public
// <Route path='/producto/:id' element={<Detalle />} /> cuando tengo que leer un id de por ejemplo este caso un producto y enviarlo por el ruteo debo poner en el path /:id como se lee en esta linea
/*
          <Route path='/producto/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />} />

<Route path='/contador' element={<Contador />} />
*/
