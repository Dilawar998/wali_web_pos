import React from 'react'
import Dashboard from './dashboard/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './Products';
import DeletedProducts from './DeletedProducts';
import Expenses from './Expenses';

function AllRoute() {
  return (
    <div>
      <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/deleteproduct' element={<DeletedProducts/>}/>
      <Route path='/expenses' element={<Expenses/>} />
      
      
      

      </Routes>
    </div>
  )
}

export default AllRoute