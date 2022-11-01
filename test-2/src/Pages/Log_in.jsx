import React,{Component} from 'react';

class Log_in extends Component {
    render(){   
        return(
            <>
            <h2> Ingrese sesion con los datos que ya ha proporcionado</h2>
                <form>
                    <div>
                        <label>Ingrese su correo electronico: </label>
                        <input type={'email'}></input>
                    </div>

                    <div>
                        <label>Contraseña: </label>
                        <input type={'password'}></input>
                    </div>

                </form>
            </>
        )
    }
}

export default Log_in