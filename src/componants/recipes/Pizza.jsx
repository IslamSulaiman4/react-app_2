
import React, { useEffect, useState } from 'react'
export default function Pizza() {

  let [pizza,setPizza]=useState([]);
     
  const getPizza= async()=>{
      let response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
      let data=await response.json();
      setPizza(data.recipes);
      
  }
  useEffect(()=>{
      getPizza();
  },[])


return (
  <div className="container">
          <div className='row mt-5 '>
  
  {
    
      pizza.map( (ele)=>{
          return <div className='col-md-4 pt-3' key={ele.recipe_id}>
              <h2 className='fs-3 '>{ele.title}</h2>
              <img src={ele.image_url} className='w-100' alt='pizza photo'/>
          </div>
      })
  }

</div>
  </div>
)
}
