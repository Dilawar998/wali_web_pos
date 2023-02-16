import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdPersonAdd} from 'react-icons/md'
function Dashboard() {
  return (
    <div className='w-5/5 p-10 ml-10 h-screen  '>
      <div className='flex flex-col gap-2 justify-around my-4'>
      <div className='my-5'>
        <h1 className='text-3xl font-bold' >Dashboard</h1>
      </div>
      <div className='w-6/6  flex '>
         {/* .................................... */}
        <div className='flex-col py-5 w-3/6  flex justify-around   gap-3'>
        {/* customer , order ,sales cards */}
        <div className='w-full  sm:w-2/6 lg:w-4/5 p-3 flex items-center border rounded-lg   shadow-lg '>
          <div className=' flex items-center  gap-5  '>
          <sapn className='flex w-10 h-10 justify-center items-center text-3xl  rounded-lg bg-blue-900'>
          <AiOutlineShoppingCart className='text-white' /></sapn>
          <div className=' p-2 flex flex-col'>
          <span className='text-2xl '>3</span>
          <span className='text-sm'>Products</span>
          </div>
          </div>
        </div>
       

        {/* .................................... */}
        <div className='w-full  sm:w-2/6 lg:w-4/5 p-3 flex items-center rounded-lg  border shadow-lg '>
          <div className=' flex items-center gap-5  '>
          <sapn className='flex w-10 h-10 justify-center items-center text-3xl  rounded-lg bg-blue-900'>
          <AiOutlineShoppingCart className='text-white' /></sapn>
          <div className=' p-2 flex flex-col'>
          <span className='text-2xl '>3</span>
          <span className='text-sm'>Products</span>
          </div>
          </div>
        </div>

         {/* .................................... */}
         
         <div className='w-full  sm:w-2/6 lg:w-4/5 p-3 flex items-center rounded-lg  border shadow-lg '>
          <div className=' flex items-center  gap-5 '>
          <sapn className='flex w-10 h-10 justify-center items-center text-3xl  rounded-lg bg-blue-900'>
          <AiOutlineShoppingCart className='text-white' /></sapn>
          <div className=' p-2 flex flex-col'>
          <span className='text-2xl '>3</span>
          <span className='text-sm'>Products</span>
          </div>
          </div>
        </div>
         {/* .................................... */}
         </div>
          {/* right side image  start*/}
            <div className='w-3/6  overflow-hidden rounded-3xl shadow-lg  '>
                <img className='rounded-3xl hover:overflow-hidden hover:rounded-3xl hover:scale-110' src='https://images.pexels.com/photos/7129086/pexels-photo-7129086.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            </div>
          {/* right side image  end*/}

         </div> 
         {/* All Transaciton start*/}

        <div>

        </div>

         {/* All Transaciton end*/}



      </div>

    </div>
  )
}

export default Dashboard