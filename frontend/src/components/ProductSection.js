import React, { useEffect, useState } from 'react'
import Productitem from './Productitem'

const ProductSection = () =>{

    const [products, setProducts] = useState([])

    let getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(response =>response.json())
        .then(data => setProducts(data))
    }
    useEffect(getProducts, [])

  return (
    <div className="container bg-white">
    <div className="row mt-5">
        {
            products.map(product => <Productitem key= {product.id} product={product}/>)
        }
    
    </div>
    </div>
    
  )
}

export default ProductSection