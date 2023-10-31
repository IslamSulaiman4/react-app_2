import React, { useEffect, useState } from 'react'


export default function Products() {

let [products,setProducts]=useState([]);

const getProducts = async()=>{
let response=await fetch('https://fakestoreapi.com/products');
let data= await response.json();
setProducts(data); 
}

useEffect( ()=>{
    getProducts();
},[])

  return (
    <div className="container">
            <div className='row mt-3 '>
    
        {
            products.map( (ele)=>{
                return <div className='col-md-4 p-3' key={ele.id}>
                    <h2>{ele.title}</h2>
                    <img src={ele.image} className='w-100' alt='products images'/>
                </div>
            })
        }

    </div>
    </div>

  )
}
