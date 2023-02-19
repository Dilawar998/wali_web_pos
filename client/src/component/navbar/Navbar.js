import '../../component/navbar/Navbar.css'
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdAdminPanelSettings} from 'react-icons/md'
import {CgProductHunt} from 'react-icons/cg'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdPointOfSale} from 'react-icons/md'
import {SiExpensify} from 'react-icons/si'
import {BsCartCheck} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


function Navbar() {

  return (
    <div className='flex w-full  '>
        <div className='w-14 transition-all ease-in-out hover:duration-700
          hover:w-1/6 rounded-r-3xl flex-none absolute   hover:z-10 
           left-0 top-0 py-5 flex flex-col pl-1 overflow-hidden items-start  h-screen
           bg-gradient-to-r from-gray-700 via-gray-900 to-black '>
        <div className='w-full z-0 '>
        <span><MdAdminPanelSettings className=' w-full text-center text-2xl  icon-color  mb-10' /></span>
        </div>
        <div className='flex flex-col  gap-2'>
        <NavLink to="/dashboard" className='flex items-start py-2 px-3 rounded-lg hover:bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600  gap-5'>
        <span><AiOutlineDashboard className='icon-color'/></span>
        <p className='icons-text-color '>Dashbord</p>
        </NavLink>
        <NavLink to="/products" className='flex items-start py-2 px-3 rounded-lg hover:bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600  gap-5'>
        <span><CgProductHunt className='icon-color'/></span>
        <p className='icons-text-color '>Products</p>
        </NavLink>
        <NavLink to="/deleteproduct" className='flex items-start py-2 px-3 rounded-lg hover:bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600  gap-5'>
        <span><AiOutlineDelete className='icon-color'/></span>
        <p className='icons-text-color  flex-none '>Deleted Products</p>
        </NavLink>
        <NavLink to="/pos" className='flex items-start py-2 px-3 rounded-lg hover:bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600  gap-5'>
        <span><MdPointOfSale className='icon-color'/></span>
        <p className='icons-text-color '>POS</p>
        </NavLink>
        <NavLink to="/expenses" className='flex items-start py-2 px-3 rounded-lg hover:bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600  gap-5'>
        <span><SiExpensify className='icon-color'/></span>
        <p className='icons-text-color '>Expenses</p>
        </NavLink>
        <NavLink to="/orders" className='flex items-start py-2 px-3 rounded-lg hover:bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600  gap-5'>
        <span><BsCartCheck className='icon-color'/></span>
        <p className='icons-text-color '>Orders</p>
        </NavLink>
        </div>
        </div>   
    </div>
  )
}
 
export default Navbar