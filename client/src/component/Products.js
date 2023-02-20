import React from 'react'
import { NavLink } from 'react-router-dom'
function Products() {
  return (
    <div className='mx-10  pt-5 w-5/5 ml-20 z-10  h-screen  '>
      <div className='flex justify-between mb-5 items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border  shadow-lg  hadow-xl px-5  py-2 rounded-xl'>
      <h1 className='text-2xl pb-2 text-white'>Products</h1>
      <NavLink to="/addproduct" className='flex hover:scale-105 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 shadow-lg rounded-lg text-sm'>Add Product +</NavLink>
      </div>
      <div className='hover:overflow-auto overflow-hidden top-0 shadow-xl h-5/6 rounded-xl'>
        <table className='table-auto w-full   rounded-lg  overflow-hidden shadow-xl border border-collapse   text-left font-thin   '>
          <thead className=' sticky bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500   h-10 top-0    text-white '>
            <th className='border font-thin text-lg pl-1 py-1 text-center'>ID</th>
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
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
            <tr className=''>
              <td className='border pl-1 py-1 text-center'>1</td>
              <td className='border pl-1 py-1'>WG- 001</td>
              <td className='border pl-1 py-1'>Test</td>
              <td className='border pl-1 py-1'>Peshawar</td>
              <td className='border pl-1 py-1'>$300</td>
              <td className='border pl-1 py-1'>standard small medium</td>
              <td className='border pl-1 py-1'>100</td>
              <td className='flex border pl-1 py-1 justify-center gap-4 '>
                <span className='bg-red-500 text-white flex w-1/4 text-center items-center px-2 text-sm hover:scale-105 rounded-lg cursor-pointer'>Delete</span>
                <NavLink to="/editproduct" className='bg-green-500 text-white px-2 w-1/4 text-center py-1 rounded-lg hover:scale-105 text-sm cursor-pointer'>Edit</NavLink>
              </td>
            </tr>
          
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products