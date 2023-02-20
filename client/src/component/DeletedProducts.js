import React from 'react'

function DeletedProducts() {
  return (
    <div className='mx-10 pt-5 w-5/5 ml-20  h-screen '>
    <div className='flex justify-between mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  items-center border  shadow-lg  hadow-xl px-5  py-2 rounded-xl'>
    <h1 className='text-2xl pb-2 text-white'>Deleted Products</h1>
    </div>
    <div className='overflow-auto top-0 h-5/6'>
      <table className='table-auto w-full shadow-xl border border-collapse   text-left overflow-hidden font-thin  rounded-lg  '>
        <thead className='bg-blue-800 sticky h-10 top-0  bg-gradient-to-r   overflow-hidden
         from-indigo-500 via-purple-500 to-pink-500 rounded-t-lg text-white '>
          <th className='border font-thin text-lg pl-1 py-1 text-center'>ID</th>
          <th className='border font-thin text-lg pl-1 py-1'>Code</th>
          <th className='border font-thin text-lg pl-1 py-1'>Name</th>
          <th className='border font-thin text-lg pl-1 py-1'>Catatgory</th>
          <th className='border font-thin text-lg pl-1 py-1'>Price</th>
          <th className='border font-thin text-lg pl-1 py-1'>Available Sizes</th>
          <th className='border font-thin text-lg pl-1 py-1'>QTY</th>
        </thead> 
        <tbody className=''>
          <tr className=''>
            <td className='border pl-1 py-1 text-center'>1</td>
            <td className='border pl-1 py-1'>WG- 001</td>
            <td className='border pl-1 py-1'>Test</td>
            <td className='border pl-1 py-1'>Peshawar</td>
            <td className='border pl-1 py-1'>$300</td>
            <td className='border pl-1 py-1'>standard, small, medium</td>
            <td className='border pl-1 py-1'>100</td>
            
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeletedProducts