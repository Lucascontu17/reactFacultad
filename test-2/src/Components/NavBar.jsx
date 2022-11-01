import { Link } from "react-router-dom"
import React, { Component }  from 'react';

function NavBar(){
    return(
        <ul>
          <li><Link to="/home">Inicio</Link></li> // linkeo a home
          <li><Link to="/registrarse">Create una cuenta</Link></li> //linkeo a Sign in
          <li><Link to="/Log_in">Iniciar sesion</Link></li> // linkeo a Log in
        </ul>
    )
}

export default NavBar