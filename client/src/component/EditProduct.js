import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {productSchema} from './addProductSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const navigate = useNavigate();
  const initialValues = {
    Standard:"",
    Small: "",
    Medium: "",
    Large:"",
    ExtraLarge: "",
    Code:"",
    Name:"",
    Catagory:"",
    Price:"",
    42: "",
    40:"",
    38:"",
    36:"",
    34:"",
    32:"",
    30:"",
    28:"",
    26:"",
    24:"",
    22:"",
    20:"",
    18:"",
    16:"",    
}
const {values,handleBlur,errors,handleChange,handleSubmit } = useFormik({
  initialValues,
  validationSchema: productSchema,
  onSubmit: (values)=>{
    const useFulldata = {}
    Object.keys(values).map((key)=>{
      if(values[key] !== "" && values[key] > "0" ){
        useFulldata[key] = values[key]
      }
      return useFulldata
    })
    if(useFulldata !== ""){
      toast("Successfully Product Add");
      // navigate('/dashboard')
    }}
})


 
  return (
    // Product form
    <>
    <div className=' overflow-auto h-screen   ' >
      <div  className='flex flex-col mx-20 mt-5 shadow-xl  rounded-xl border w-6/6'>
        <div className=' p-3'>
        <div className='text-lg font-bold text-blue-200'>ADD NEW PRODUCT</div>
        <h2 className='font-bold   text-lg'>Product Information</h2>
        </div>
        {/* column row */}
        <div className='w-full '>
        <div className='flex  justify-between w-5/5 pl-3  '>
          <div className='flex flex-col  p-1 focus:outline-none w-2/5 gap-3'>
            <label>Code:</label>
            <input name='Code' placeholder='Product Code' 
            onChange={handleChange}
            onBlur={handleBlur} className='text-sm w-5/5 pl-2 p-1 rounded-lg border' value={values.Code}/>
            <p className='text-red-900 text-sm'>{errors.Code}</p>

          </div>
          <div className='flex flex-col   p-1 focus:outline-none w-2/5 gap-3'>
            <label>Name:</label>
            <input name='Name' placeholder='Product Name'  value={values.Name}
            onChange={handleChange}
            onBlur={handleBlur} className='text-sm w-5/5 pl-2 p-1 rounded-lg border'/>
            <p className='text-red-900 text-sm'>{errors.Name}</p>

          </div>
          <div className='flex flex-col  p-1 focus:outline-none w-2/5 gap-3'>
            <label>Catagory:</label>
            <select className='border p-1 rounded-lg' value={values.Catagory} onChange={handleChange}>
              <option className='border' name = "Peshawar">Peshawar</option>
            </select>
            {/* <input placeholder='Product Code' className='text-sm w-5/5 pl-2 p-1 rounded-lg border'/> */}
          </div>
          <div className='flex flex-col  p-1 focus:outline-none w-2/5 gap-3'>
            <label>Price:</label>
            <input placeholder='Price' name='Price' value={values.Price}
            onChange={handleChange}
            onBlur={handleBlur} className='text-sm w-5/5 pl-2 p-1 rounded-lg border'/>
            <p className='text-red-900 text-sm'>{errors.Price}</p>

          </div>
          </div>
        </div>
      </div>

      {/* Sales Quantity start */}
      <div className=' flex flex-col pl-3 w-5/5 mx-20'>
      <div className='flex py-3'>
      <div className='text-xl font-bold'>Size Quantity</div>
      {/* <div className='flex items-center border gap-1 rounded-lg focus:border-none p-1'>
        <span><CiSearch/></span>
        <input placeholder='Search' className=''/>
      </div> */}
      </div>
      {/* Sizese Catagory */}
      <div className='flex flex-between flex-wrap  gap-x-5 w-full '>

        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>Standard</label>
          <input  type="text" value={values.Standard} name='Standard'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>Medium</label>
          <input  type="text" value={values.Medium} name='Medium'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>Large</label>
          <input  type="text" value={values.Large} name='Large'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>ExtraLarge</label>
          <input  type="text" value={values.ExtraLarge} name='ExtraLarge'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>42</label>
          <input  type="text" value={values[42]} name='42'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>40</label>
          <input  type="text" value={values[40]} name='40'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>38</label>
          <input  type="text" value={values[38]} name='38'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>36</label>
          <input  type="text" value={values[36]} name='36'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>34</label>
          <input  type="text" value={values[34]} name='34'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>32</label>
          <input  type="text" value={values[32]} name='32'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>30</label>
          <input  type="text" value={values[30]} name='30'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>28</label>
          <input  type="text" value={values[28]} name='28'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>26</label>
          <input  type="text" value={values[26]} name='26'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>24</label>
          <input  type="text" value={values[24]} name='24'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>22</label>
          <input  type="text" value={values[22]} name='22'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>20</label>
          <input  type="text" value={values[20]} name='20'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>18</label>
          <input  type="text" value={values[18]} name='18'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        <div className='flex w-1/5 my-3 flex-col  '>
          <label className='text-sm mb-1'>16</label>
          <input  type="text" value={values[16]} name='16'
          onChange={handleChange}
          onBlur={handleBlur}
          className='border pl-2 text-sm p-1  gap-x-4 rounded-lg'/>
          <p>{errors.Standard}</p>
        </div>
        </div>
        
      {/* Sales Quantity end */}
      {/* Actions Button start */}
      <div className='w-5/5 flex flex-row gap-3 py-5'>
        <div className='border w-1/6 text-center text-sm  p-2 pl-2 rounded-xl bg-blue-900 text-white hover:scale-105 hover:shadow-lg cursor-pointer ' onClick={handleSubmit}> Save </div>
        <div className='border w-1/6 text-center text-sm  p-2 pl-2 rounded-xl bg-blue-900 text-white hover:scale-105 hover:shadow-lg cursor-pointer ' onClick={()=> navigate('/dashboard') }> Cancel </div>

      </div>
      {/* Actions Button start */}

      </div>

    </div>
    <ToastContainer />
    </>
  )
}

export default EditProduct;