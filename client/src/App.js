import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard';
import Products from './component/Products';
import Expenses from './component/Expenses'
import Navbar from './component/navbar/Navbar';
import DeleteProducts from './component/DeletedProducts'
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Orders from './component/Orders';
function App() {
  return (
    <>
      <Navbar/>
       <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/deleteproduct' element={<DeleteProducts/>}/>
      <Route path='/expenses' element={<Expenses/>} />
      <Route path='/addproduct' element={<AddProduct/>} />
      <Route path='/editproduct' element={<EditProduct/>} />
      <Route path='/orders' element={<Orders/>} />
      </Routes>        
    </>
  );
}

export default App;
