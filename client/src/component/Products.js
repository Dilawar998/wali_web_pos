import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdInventory} from 'react-icons/md'
function Products() {
  return (
    <div className='mx-10  pt-14 w-5/5 ml-20 z-10  h-screen  '>
      <div className='flex justify-between mb-5 items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border  shadow-lg  hadow-xl px-5  py-2 rounded-xl'>
      <h1 className='text-3xl pb-2'>Products</h1>
      <button className='flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 shadow-lg rounded-lg text-sm'>Add Product +</button>
      </div>
      <div className='overflow-auto top-0 h-5/6'>
        <table className='table-auto w-full   rounded-t-xl  overflow-hidden  border border-collapse   text-left font-thin   '>
          <thead className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sticky  h-10 top-0    text-white '>
            <th className='border font-thin text-lg pl-1 py-1'>ID</th>
            <th className='border font-thin text-lg pl-1 py-1'>Code</th>
            <th className='border font-thin text-lg pl-1 py-1'>Name</th>
            <th className='border font-thin text-lg pl-1 py-1'>Catatgory</th>
            <th className='border font-thin text-lg pl-1 py-1'>Price</th>
            <th className='border font-thin text-lg pl-1 py-1'>Available Sizes</th>
            <th className='border font-thin text-lg pl-1 py-1'>QTY</th>
            <th className='border font-thin text-lg pl-1 py-1'>Handle  </th>
          </thead> 
          <tbody className=''>
            <tr className=''>
              <td className='border pl-1 py-1'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 '>
                <span className='bg-red-600 text-white flex items-center px-2 text-sm rounded-lg cursor-pointer'>Delete</span>
                <span className='bg-green-600 text-white px-2 py-1 rounded-lg text-sm cursor-pointer'>Edit</span>
                {/* <AiOutlineDelete className='text-2xl rounded-sm text-white  cursor-pointer bg-red-600'/> */}
                {/* <AiOutlineEdit className='text-2xl rounded-sm text-white cursor-pointer bg-green-700'/> */}
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-around'>
                <span className='bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Delete</span>
                <span className='bg-green-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Edit</span>
                {/* <AiOutlineDelete className='text-2xl rounded-sm text-white  cursor-pointer bg-red-600'/> */}
                {/* <AiOutlineEdit className='text-2xl rounded-sm text-white cursor-pointer bg-green-700'/> */}
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-around'>
                <span className='bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Delete</span>
                <span className='bg-green-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Edit</span>
                {/* <AiOutlineDelete className='text-2xl rounded-sm text-white  cursor-pointer bg-red-600'/> */}
                {/* <AiOutlineEdit className='text-2xl rounded-sm text-white cursor-pointer bg-green-700'/> */}
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-around'>
                <span className='bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Delete</span>
                <span className='bg-green-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Edit</span>
                {/* <AiOutlineDelete className='text-2xl rounded-sm text-white  cursor-pointer bg-red-600'/> */}
                {/* <AiOutlineEdit className='text-2xl rounded-sm text-white cursor-pointer bg-green-700'/> */}
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-around'>
                <span className='bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Delete</span>
                <span className='bg-green-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Edit</span>
                {/* <AiOutlineDelete className='text-2xl rounded-sm text-white  cursor-pointer bg-red-600'/> */}
                {/* <AiOutlineEdit className='text-2xl rounded-sm text-white cursor-pointer bg-green-700'/> */}
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-around'>
                <span className='bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Delete</span>
                <span className='bg-green-600 text-white px-2 py-1 rounded-lg cursor-pointer'>Edit</span>
                {/* <AiOutlineDelete className='text-2xl rounded-sm text-white  cursor-pointer bg-red-600'/> */}
                {/* <AiOutlineEdit className='text-2xl rounded-sm text-white cursor-pointer bg-green-700'/> */}
              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products