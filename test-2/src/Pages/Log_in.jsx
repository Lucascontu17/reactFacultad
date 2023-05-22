import { useState } from "react"
import { useForm } from "react-hook-form";
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'



function Log_in(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try{
           const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
           console.log("responseUser",responseUser.user.uid)
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" {...register("email", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.email && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true,minLength:4,maxLength:10 })} />
                    <Form.Text className="text-muted">
                    {errors.password?.type==="required" && <span>Este campo es requerido</span>}
                    {errors.password?.type==="minLength" && <span>Debe colocar al menos 4 caracteres</span>}
                    {errors.password?.type==="maxLength" && <span>No puede superar 10 caracteres</span>}
                    </Form.Text>
                </Form.Group>
               
                <Button type="submit" variant="primary">Iniciar sesion</Button>
            </Form>
        </div>
    )
}

export default Log_in





/* Coddigo con falla en API, revisar post evaluacion
import React,{Component} from 'react';
import { useForm } from "react-hook-form";
import AlertCustom from "../Components/AlertCustom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../Config/firebase';
import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { loginMensaje } from "../Utils/Mensajes";
import { AuthContext } from "../Context/AuthContext"


function Log_in(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alert,setAlert] = useState({variant:'',text:''})
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const onSubmit = async data => {
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            if(responseUser.user.uid){
                const userDocument= await firebase.firestore().collection("usuarios").where("userId","==",responseUser.user.uid).get()
                const user = userDocument.docs[0].data()
                setAlert({variant:'success',text:`Bienvenido ${user?.name}`})
                context.handlerLogin(user)
                setTimeout(()=>{
                    navigate("/")
                },2000)

            }

        } catch (e) {
            console.log(e)
            setAlert({variant:'danger',text:loginMensaje[e.code]||'Ha ocurrido un error'})

        }
    }


    return(
        <div>
            <AlertCustom {...alert}/>
            <Form onSubmit={handleSubmit(onSubmit)} style={{textAlign:"center"}}>
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
                        {errors.password?.type==="minLength" && <span>Debe Colocar al menos 6 Caracteres</span>}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Ingresar</Button>
            </Form>    
        </div>
    )
}

export default Log_in

/* Prototipo 1
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
*/