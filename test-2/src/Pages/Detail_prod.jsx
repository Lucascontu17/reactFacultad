import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices";
import { getDescription } from "../Services/productosServices";
// import React, { Component }  from 'react';
function Detalle() {
   const {id} =  useParams()
   const [producto,setProducto] = useState({});
   const [isLoading,setLoading] = useState(true)
   const [description,setDescription] = useState("")
   
   useEffect(
      ()=>{
         const listado = async()=>{
            try {   
               const responseData = await getByIdProductos(id)
               const desc = await getDescription(id);
               setProducto(responseData.data)
               setDescription(desc.data.plain_text)
               setLoading(false)
            } catch (e) {
               console.log(e)
            }
         }        
         listado()
   },
   [id]);

   function tagUpperFirstLetter(element) {
      let arr = element.replaceAll("_"," ").split(" ")
      for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      element= arr.join(" ");
      return element
   }

   if(isLoading){
      return(
         <h2>
            ...Loading
         </h2>
      )
   }
   else{
      return(
         <div className="app configBox">
            <h1>{producto.title}</h1>
            <div className="product">
               <div className="item">
                  <div>
                     <img className="itemImg" src={producto.thumbnail} alt={producto.title} />
                  </div>
                  <div className="infoItem">
                     <p className="prices">Cantidad disponible {producto.available_quantity}</p>
                     <p className="prices">${producto.price}</p>
                     <p className="sku">#{producto.category_id}</p>
                     <button className="textSize" id="buy">Comprar</button>
                  </div>
                  <div className="infoItem">
                     <ul className="tags">
                        {producto.tags.map((element)=><li>{tagUpperFirstLetter(element)}</li>)}
                     </ul>
                  </div>
               </div>
               <div className="description textSize">
                     <p>{description}</p>
               </div>
            </div>
         </div>
      )
   }
   
}

export default Detalle