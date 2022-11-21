import React,{useEffect} from "react"
import { Link } from "react-router-dom"

function Producto({
  id,
  title,
  category,
  price,
  domain_id,
  currency_id,
  thumbnail,
  thumbnail_id,
  seller_address
}){
  // console.log("props",props)
  // const {title,category,price} = props

  useEffect(
    ()=>{
      console.log("Se modifico title",title)
    },
    [title]
  )
  

  return (
      <div>
        <h2>{title}</h2>
        <p>{category}</p>
        <p> Precio: {currency_id} {price}</p>
        <p>Dominio: {domain_id}</p>
        <img src={thumbnail} alt={thumbnail_id} />
        <p> Se encuentra por la zona de: {seller_address.state.name}</p>
        <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
      </div>
  )
}

export default Producto

//  <p> Se encuentra por la zona de: {seller_address.state.name}</p> De esta manera navego dentro de un objeto dentro de una API