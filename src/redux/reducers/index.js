import {combineReducers} from 'redux'
import { productReducer, selectedProductsReducer } from './productsReducer'
const reducer =combineReducers({
    allProducts:productReducer,
    product:selectedProductsReducer
})
export default reducer