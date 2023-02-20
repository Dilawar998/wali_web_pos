import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {RiProductHuntLine} from 'react-icons/ri'
import {AiOutlinePrinter} from 'react-icons/ai'

function Dashboard() {
  return (
    <div className='w-5/5 px-10  ml-10 h-screen overflow-auto     '>
      <div className='flex flex-col gap-1 justify-around my-1'>
      <div className='w-full border m-0 p-2  bg-gradient-to-r shadow-xl rounded-b-xl from-indigo-500 via-purple-500 to-pink-500  '>
        <h1 className='text-2xl  text-white' >Dashboard</h1>
      </div>
         {/* .................................... */}
        <div className='flex  h-5/5  w-6/6  justify-around   gap-20'>
        {/* customer, order ,Number of Products */}
        {/* .................................... */}
        <div className='w-full h-3/5  sm:w-2/6 lg:w-2/5 pl-3 pt-2 pb-1 flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border shadow-2xl '>
          <div className=' flex flex-col pl-5 '>
          <sapn className='flex w-8 h-8 justify-center items-center text-3xl  rounded-lg  bg-blue-600'>
          <BsPerson className='text-white text-2xl' /></sapn>
          <span className=' text-white text-sm pt-1'>Number of Customers</span>
          <span className='text-3xl text-white '>3</span>
          </div>
        </div>
        {/* .................................... */}
        <div className='w-full h-3/5  sm:w-2/6 lg:w-2/5 pl-3 pt-2 pb-1 flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border shadow-2xl '>
          <div className=' flex flex-col pl-5 '>
          <sapn className='flex w-8 h-8 justify-center items-center text-3xl  rounded-lg bg-blue-600'>
          <AiOutlineShoppingCart className='text-white text-2xl' /></sapn>
          <span className=' text-white text-sm'>Number of Orders</span>
          <span className='text-3xl text-white '>3</span>
          </div>
        </div>
         {/* .................................... */}
          {/* .................................... */}
        <div className='w-full h-3/5 sm:w-2/6 lg:w-2/5  pl-3 pt-2 pb-1 flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border shadow-2xl '>
          <div className=' flex flex-col pl-5 '>
          <sapn className='flex w-8 h-8 justify-center items-center text-3xl  rounded-lg bg-blue-600'>
          <RiProductHuntLine className='text-white text-2xl ' /></sapn>
          <span className=' text-white text-sm '>Number of Products</span>
          <span className='text-3xl text-white '>3</span>
          </div>
        </div>
         {/* .................................... */}
         
         </div>
         <div className='flex justify-between  items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 border  shadow-lg  hadow-xl px-5  py-2  rounded-xl'>
      <h1 className='text-2xl pb-2 text-white'>Latest Transactions</h1>
      </div>
    {/* order table start */}
    <div className=' h-80 overflow-hidden hover:overflow-auto    rounded-lg'>
    <div className='overflow-hidden'>
    <table className=' w-full overflow-auto    border      rounded-lg shadow-xl  text-left font-thin   '>
        <thead className='bg-blue-800 w-full h-6 sticky   top-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 text-white '>

          <th className='border font-thin text-center text-lg pl-1 py-1'>Order ID</th>
          <th className='border font-thin text-lg pl-2 py-1'>Date</th>
          <th className='border font-thin text-lg pl-2 py-1'>Total Items</th>
          <th className='border font-thin text-lg pl-2 py-1'>Total Purchase</th>
          <th className='border font-thin text-lg pl-2 py-1'>Total Sale Amount</th>
          <th className='border font-thin text-lg pl-2 py-1'>Total Profit</th>
         
        </thead> 
        <tbody className='overflow-hidden '>
          
        <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  

          <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    
          <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr> 
          <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>  <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    <tr className=''>
            <td className='border text-sm  text-center  py-1'>1</td>
            <td className='border text-sm pl-3 py-1'>{new Date().toDateString}</td>
            <td className='border text-sm pl-3 py-1'>51</td>
            <td className='border text-sm pl-3 py-1'>75000</td>
            <td className='border text-sm pl-3 py-1'>120000</td>
            <td className='border text-sm pl-3 py-1'>45000</td>
          </tr>    
            
        </tbody>
      </table>
    </div>
    </div>
    {/* order table start */}



      </div>

    </div>
  )
}

export default Dashboard