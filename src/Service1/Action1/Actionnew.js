import {ADD_TO_CART,REMOVE_TO_CART} from '../Constant'
export const Addtocart=(data)=>{
    console.warn("action",data)
    return{
        type: ADD_TO_CART,
         data:data
    }
}
export const RemovetoCart=(data)=>{
    console.warn("action data")
    return{
        type: REMOVE_TO_CART,
       // data:data
    }
}