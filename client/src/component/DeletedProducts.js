import React from 'react'

function DeletedProducts() {
  return (
    <div className='mx-10 pt-14 w-5/5 ml-20  h-screen '>
    <div className='flex justify-between mb-5 items-center border  shadow-lg  hadow-xl px-5  py-2 rounded-xl'>
    <h1 className='text-3xl pb-2'>Deleted Products</h1>
    </div>
    <div className='overflow-auto top-0 h-5/6'>
      <table className='table-auto w-full  border border-collapse   text-left font-thin   '>
        <thead className='bg-blue-800 sticky h-10 top-0  text-white '>
          <th className='border font-thin text-lg pl-1 py-1'>ID</th>
          <th className='border font-thin text-lg pl-1 py-1'>Code</th>
          <th className='border font-thin text-lg pl-1 py-1'>Name</th>
          <th className='border font-thin text-lg pl-1 py-1'>Catatgory</th>
          <th className='border font-thin text-lg pl-1 py-1'>Price</th>
          <th className='border font-thin text-lg pl-1 py-1'>Available Sizes</th>
          <th className='border font-thin text-lg pl-1 py-1'>QTY</th>
        </thead> 
        <tbody className=''>
          <tr className=''>
            <td className='border pl-1 py-1'>1</td>
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