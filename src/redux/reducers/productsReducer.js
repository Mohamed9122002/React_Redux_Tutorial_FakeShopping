import { ActionType } from "../constants/action-types";

const initialState = {
    products: [],
};
export const productReducer=(state=initialState,{type,payload})=>{
    console.log(type)
    switch (type) {
        case ActionType.Set_Product:
            return {...state,products:payload}
            
            default:
                return state
    }

}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionType.Select_Product:
            return { ...state, ...payload };
        case ActionType.Remove_Select_Product:
            return {};
        default:
            return state;
    }
};