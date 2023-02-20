import React from 'react'
import {AiOutlinePrinter} from 'react-icons/ai'

function Orders() {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString()
  const first = new Date(Date.now() )
  console.log(first);
  return (
    <div className='mx-10 pt-5  ml-20 w-5/5  h-screen '>
     <div className='flex justify-between mb-5 items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border  shadow-lg  hadow-xl px-5  py-2 rounded-xl'>
      <h1 className='text-2xl pb-2 text-white'>Latest Transactions</h1>
      </div>
    {/* order table start */}
    <div>
    <table className=' w-full  border border-collapse   rounded-lg  overflow-hidden shadow-xl  text-left font-thin   '>
        <thead className='bg-blue-800    sticky h-10 top-0 bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 text-white '>
          <th className='border font-thin text-center text-lg pl-1 py-1'>Order ID</th>
          <th className='border font-thin text-lg pl-1 py-1'>Date</th>
          <th className='border font-thin text-lg pl-1 py-1'>Total Items</th>
          <th className='border font-thin text-lg pl-1 py-1'>Total Purchase</th>
          <th className='border font-thin text-lg pl-1 py-1'>Total Sale Amount</th>
          <th className='border font-thin text-lg pl-1 py-1'>Total Profit</th>
          <th className='border font-thin text-lg pl-1 py-1'>Print Receipt</th>
         
        </thead> 
        <tbody className=''>
          <tr className=''>
            <td className='border text-center pl-1 py-1'>1</td>
            <td className='border pl-1 py-1'>{new Date().toDateString}</td>
            <td className='border pl-1 py-1'>51</td>
            <td className='border pl-1 py-1'>75000</td>
            <td className='border pl-1 py-1'>120000</td>
            <td className='border pl-1 py-1'>45000</td>
            <td className='border pl-1 py-1'><AiOutlinePrinter/></td>
            
            
          </tr>      
        </tbody>
      </table>
    </div>
    {/* order table start */}

    </div>
  )
}

export default Orders