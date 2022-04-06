import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addProduct } from './ProductSider';

const Product = () => {
    const product= useSelector(data => data.product.value);
    const dispatch = useDispatch();
  return (
    <div>Product
        {product?.map(item => item.name)}
<button onClick={() => dispatch(addProduct({id:3, name: "Product C"}))}>Add</button>

    </div>
    
  )
}

export default Product