import React,{Component} from 'react';

class Sign_up extends Component {
    render(){
        return(
            <>  
             <h2>Ingrese los siguientes datos a continuacion para crear su cuenta</h2>
                <form>
                    <div>
                    <label>Ingrese su nombre completo: </label>
                    <input type={'text'}></input>
                    </div>
                    
                    <div>
                    <label>Ingrese un correo electrónico: </label>
                    <input type={'email'}></input>
                    </div>

                    <div>
                    <label>Ingrese una contraseña: </label>
                    <input type={'password'}></input>
                    </div>

                    <div>
                    <label>Ingrese una contraseña nuevamente: </label>
                    <input type={'password'}></input>
                    </div>
                
                </form>
            </>
        )
    }
}
export default Sign_up