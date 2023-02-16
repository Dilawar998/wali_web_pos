import React, { useState } from 'react'
import '../../component/navbar/Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsToggleOff} from 'react-icons/bs'
import {BsToggleOn} from 'react-icons/bs'
import {BsPersonCircle} from 'react-icons/bs'
import {AiOutlineDashboard} from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import {MdAdminPanelSettings} from 'react-icons/md'
import {CgProductHunt} from 'react-icons/cg'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdPointOfSale} from 'react-icons/md'
import {SiExpensify} from 'react-icons/si'
import AllRoute from '../AllRoute'
import {GrHistory} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'


function Navbar() {
  // handle hamburger button
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex w-full '>
        <div style={{width:toggle? "14rem":"" }}  className='w-14
          hover:w-1/6 rounded-r-3xl flex-none  absolute hover:z-10 
           left-0 top-0 py-5 flex flex-col pl-1 overflow-hidden items-start  h-screen
           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            '>
        <div className='w-full z-0 '>
        <span><MdAdminPanelSettings className=' w-full text-center  icon-color  mb-10' style={{fontSize:toggle?"44px":""}}/></span>
        </div>
        <div className='flex flex-col  gap-2'>
        <NavLink to="/dashboard" className='flex items-start py-2 px-3 rounded-lg hover:bg-blue-400  gap-5'>
        <span><AiOutlineDashboard className='icon-color'/></span>
        <p className='icons-text-color '>Dashbord</p>
        </NavLink>
        <NavLink to="/products" className='flex items-start py-2 px-3 rounded-lg hover:bg-blue-400  gap-5'>
        <span><CgProductHunt className='icon-color'/></span>
        <p className='icons-text-color '>Products</p>
        </NavLink>
        <NavLink to="/deleteproduct" className='flex items-start py-2 px-3 rounded-lg hover:bg-blue-400  gap-5'>
        <span><AiOutlineDelete className='icon-color'/></span>
        <p className='icons-text-color  flex-none '>Delete Products</p>
        </NavLink>
        <NavLink to="/pos" className='flex items-start py-2 px-3 rounded-lg hover:bg-blue-400  gap-5'>
        <span><MdPointOfSale className='icon-color'/></span>
        <p className='icons-text-color '>POS</p>
        </NavLink>
        <NavLink to="/expenses" className='flex items-start py-2 px-3 rounded-lg hover:bg-blue-400  gap-5'>
        <span><SiExpensify className='icon-color'/></span>
        <p className='icons-text-color '>Expenses</p>
        </NavLink>
        <div className='flex items-start py-2 px-3 rounded-lg hover:bg-blue-400  gap-5'>
        <span><GrHistory className='icon-color '/></span>
        <p className='icons-text-color '>Order History</p>
        </div>

        </div>
        </div>

        {/* Topbar start */}
        <div className='flex flex-col w-full'>
        {/* <div className='h-12 border w-full flex items-center shadow-xl px-10 justify-between'>
            <h1 className='text-xl invisible sm:visible'><GiHamburgerMenu onClick={()=> setToggle(!toggle) }/></h1>
            <div className='flex gap-10'>
                <span className='text-3xl'><BsPersonCircle/></span>
            </div>
        </div> */}
        {/* Topbar end*/}
        <div>
          <AllRoute/>
        </div>
        </div>

        
    </div>
  )
}
 
export default Navbar