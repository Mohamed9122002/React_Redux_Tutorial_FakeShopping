
import {useDispatch, useSelector} from 'react-redux'
import { ProductComponent } from './ProductComponent'
import axios from "axios";
import { setProducts } from '../redux/actions/productsActions';
import { useEffect } from 'react';
export const ProductListing = () => {
    const products= useSelector((state)=>state.allProducts.products)
    console.log(products)
    const dispatch = useDispatch()
    const fetchProducts =async ()=>{
        const response =await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("Err: ", err);
        })
        dispatch(setProducts(response.data))
    }
useEffect(()=>{
    fetchProducts()
},[])

return (
    <div className='ui grid container'>
        <ProductComponent/>
        </div>
)
}
