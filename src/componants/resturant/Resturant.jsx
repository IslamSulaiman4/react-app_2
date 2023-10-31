
import React from 'react'
import { Link } from 'react-router-dom'
import Pizza from '../recipes/Pizza.jsx'
import  Potato  from '../recipes/Potato.jsx';
import Steak from '../recipes/Steak.jsx';

export default function Resturant() {
  return (
    <>
    <div className='container mt-3'>
      <div className='pizza ms-0 '>
        <h2 className='text-danger fs-2'>Pizza Recipes</h2>
         <Pizza/>
      </div>
      <div className='Steak ms-0 '>
        <h2 className='text-danger fs-2'>Steak Recipes</h2>
          <Steak/>
      </div>
      <div className='potato ms-0 '>
        <h2 className='text-danger fs-2'>Potato Recipes</h2>
         <Potato/>
      </div>

    </div>
</>
  )
}
