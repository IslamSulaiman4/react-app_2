import React, { useEffect, useState } from 'react'


export default function Potato() {
    let [potato,setPotato]=useState([]);

    const getPotato= async()=>{
 let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=potato');
let data=await response.json();
setPotato(data.recipes);

    }

    useEffect(()=>{
        getPotato();
    })

  return (
    <div className='container'>
        <div className='row'>
           { potato.map( (ele)=>{
            return  <div className='col-md-4 pt-3' key={ele.recipe_id}>
                    <h2 className='fs-3 '>{ele.title}</h2>
                    <img src={ele.image_url} className='w-100' alt='image for potatos recipes'/>
                </div>
            
           })
           }

        </div>
    </div>
  )
}
