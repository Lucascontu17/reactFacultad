import { useForm } from "react-hook-form";
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'


function Sign_up(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)
            if(responseUser.user.uid){
                const document = await firebase.firestore().collection("usuarios")
                .add({
                    name:data.name,
                    lastname:data.lastname,
                    userId:responseUser.user.uid
                })
                console.log(document)
            }
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("name", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.name && <span>Este campo es requerido</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar apellido" {...register("lastname")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" {...register("email", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.email && <span>Este campo es requerido</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true,minLength:4,maxLength:10 })} />
                    <Form.Text className="text-muted">
                    {errors.password?.type==="required" && <span>Este campo es requerido</span>}
                    {errors.password?.type==="minLength" && <span>La contraseña debe tener al menos 4 caracteres</span>}
                    {errors.password?.type==="maxLength" && <span>La contraseña no debe contener mas de 10 caracteres</span>}
                    </Form.Text>
                </Form.Group>
               
                <Button type="submit" variant="primary">Crear cuenta</Button>
            </Form>
        </div>
    )
}

export default Sign_up




/* Codigo con Falla en API, revisar mas tarde
import React,{Component} from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../Config/firebase'
import { useState } from "react";
import AlertCustom from "../Components/AlertCustom";
import { registroMensaje } from "../Utils/Mensajes";
import {useNavigate} from 'react-router-dom';

// Prototipo Final
function Sign_up(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alerta,setAlert] = useState({variant:'',text:''})
    const navigate = useNavigate()
    const onSubmit = async data => {
        try {
            const responseData = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            if (responseData.user.uid) {
                // eslint-disable-next-line no-unused-vars
                const document = await firebase.firestore().collection("usuarios").add({
                    name:data.name,
                    lastname:data.lastname,
                    userId:responseData.user.uid
                })
                setAlert({variant:'success',text:'Registrado Satisfactoriamente'})
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }
        } catch (e) {
            setAlert({variant:'danger',text:registroMensaje[e.code]||'Ha ocurrido un error'})
        }
    }


    return(
        <div>
            <AlertCustom {...alerta}/>
            <Form onSubmit={handleSubmit(onSubmit)} style={{textAlign:"center"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Nombre" {...register("name",{ required: true })} />
                    <Form.Text className="text-muted">
                        {errors.name && <span>El Campo Es Obligatorio</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Apellido" {...register("lastname",{ required: true })} />
                    <Form.Text className="text-muted">
                        {errors.lastname && <span>El Campo Es Obligatorio</span>}
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Email" {...register("email",{ required: true })} />
                    <Form.Text className="text-muted">
                        {errors.email && <span>El Campo Es Obligatorio</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese Contraseña" {...register("password",{ required: true,minLength:6 })} />
                    <Form.Text className="text-muted">
                        {errors.password?.type==="required" && <span>El Campo Es Obligatorio</span>}
                        {errors.password?.type==="minLength" && <span>Debe Colocar 6 Caracteres</span>}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Registrarse</Button>
            </Form>    
        </div>
    )
}

export default Sign_up

/* Prototipo 1
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
*/