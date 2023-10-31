import React from 'react'
import Navbar from './componants/navbar/Navbar.jsx'
import Products from './componants/products/Products.jsx'
import Footer from './componants/footer/Footer.jsx'
import Resturant from './componants/resturant/Resturant.jsx'
import PageNotFound from './componants/PageNotFound/PageNotFound.jsx'
import { Routes, Route} from 'react-router-dom'
import Home from './componants/home/Home.jsx'

export default function () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/resturant' element={<Resturant />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
<Footer />
    </div>
  )
}
