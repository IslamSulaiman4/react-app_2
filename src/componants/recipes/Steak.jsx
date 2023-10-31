import React, { useEffect, useState } from 'react'

export default function Steak() {
  let [steak,setSteak]=useState([]);

  const getSteak= async()=>{
    let response= await fetch('https://forkify-api.herokuapp.com/api/search?q=steak');
    let items=await response.json();
    setSteak(items.recipes);
  }

  useEffect(()=>{
    getSteak();
  })
  return (
    <div className='container'>
        <div className='row'>
        {
          steak.map( (ele)=>{
            return <div className="col-md-4 pt-3"  key={ele.recipe_id}>
            <h2 className='fs-3'>{ele.title}</h2>
            <img src={ele.image_url} className='w-100' alt='steak recipe image' />
          </div>
          }
          )

        }
   
    </div>
    </div>
  )
}
