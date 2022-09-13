import {ADD_TO_CART,REMOVE_TO_CART} from '../Constant'
const initialState={
    cardData:[]
}
export default function Carditem(state=initialState,Actionnew)
{
 switch(Actionnew.type)
 {
    case ADD_TO_CART:
        console.warn("reducer",Actionnew)
    return {
        ...state,
        cardData: Actionnew.data
    } 
    break;
    case REMOVE_TO_CART:
        //state.pop();
    return {
        ...state,
    } 

    
    default :
    return state

 }
}