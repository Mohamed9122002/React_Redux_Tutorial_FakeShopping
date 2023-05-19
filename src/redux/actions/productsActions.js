import { ActionType } from "../constants/action-types"

export const setProducts=(products)=>{
return{
    type:ActionType.Set_Product,
    payload:products
}
}
export const selectProduct =(product)=>{
    return {
        type:ActionType.Select_Product,
        payload:product
    }
}
export const removeSelectProduct=()=>{
    return {
        type:ActionType.Remove_Select_Product
    }
}