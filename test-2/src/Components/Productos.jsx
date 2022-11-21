import React, {useState,useEffect} from "react"
import { getAll } from "../Services/productosServices"
import Producto from "./Producto"

function Productos() {
    const [productos,setProductos] = useState([]);
    const [isLoading,setLoading] = useState(true)
    const [cantidad,setCantidad] = useState(4) // Dato pretendido por el profesor
    useEffect(
        ()=>{
            const listado = async()=>{
                try {   
                    const responseData = await getAll(cantidad)
                    console.log(responseData.data.results)
                    setProductos(responseData.data.results)
        
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }        
            listado()
        },
        [cantidad]);

    function handleChange(e){
        e.preventDefault();
        setCantidad(e.target.value);
    }

    if(isLoading){
        return(
            <div className='app configBox'>
                <h2>
                    Cargando, aguarde un momento...
                </h2>
            </div>
        )
    }
    else{
        return(
            <div className='app configBox'>
                <h1>Lista de Productos</h1>
                <div>
                    <select onChange={handleChange}>
                        <option value="4" defaultValue> Mostrar 4</option>
                        <option value="10">Mostrar 10</option>
                        <option value="40">Mostrar 40</option>
                        <option value="50">Mostrar 50</option>
                    </select>
                </div>
                
                <ul className="lists">
                    {productos.map(element=><Producto {...element}/>)}
                </ul>
            </div>
        )
    }
}

export default Productos

/*
function Productos(){
  // const [titulo,setTitulo] = useState("Listado de productos")
  const titulo = "Listado de productos"
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const responseData = await getAll()
          console.log(responseData.data)
          setProductos(responseData.data.results)
          setIsloading(false)
        }catch(e){
          console.log(e)
        }
       
      }
      result()
    },
    []
  )

  const filtrar = ()=>{
    setProductos([{
      id:3,
      title:"iPhone",
      price:2000,
      category:"Celulares" 
    }])
 }

 if(isLoading){
    return(
      <div>
        Cargando... Espere por favor
      </div>
    )
 }else{
    return (
      <div>
        <h1>{titulo}</h1>
        {productos.map(producto => <Producto id={producto.id} title={producto.title} price={producto.price} category={producto.category} />)}
        <button onClick={filtrar}>Filtrar</button>
      </div>
    )
 }   

}

export default Productos
Aca se creo una propuesta de muestea de productos pero no encuadraba con lo solicitado en el Trabajo practico
*/