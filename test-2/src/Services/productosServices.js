// estos son los endpoints de ML que usa el código
import instance from "../Config/axios"

export function getAll(cant) {
    // console.log(`Cantidad de productos totales=${cant}`) // de esta manera peudo loguear el valor de una variable.
    // console.log(instance.get(`sites/MLA/search?q=ipod&limit=${cant}`))
    // console.log(instance.get(`sites`))
    return instance.get(`sites/MLA/search?q=ipod&limit=${cant}`)
}
export function getByIdProductos(id){
    return instance.get(`items/${id}`)

}
/*
export function createProductos(){
    
}
*/
export function getDescription(id) {
    return instance.get(`items/${id}/description`)
}