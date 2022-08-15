import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import {BsFillBagCheckFill ,BsFillBagXFill} from 'react-icons/bs'
const Checkout = (props) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center text-rose-600'>Checkout</h1>
      <h2 className='font-bold text-xl my-8 text-center text-rose-600'>Delivery Details</h2>
      <div className='mx-auto flex '  >
        <div className='px-2 w-1/2 '> 
      <div className=" mb-4">
        <label htmlFor="name" className=" font-bold  leading-7 text-md text-gray-600">Name</label>
        <input type="text " id="name" name="name" className="font-bold w-full bg-white  rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'> 
      <div className=" mb-4">
        <label htmlFor="email" className=" font-bold leading-7 text-md text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="font-bold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <div className='px-2 w-full'> 
      <div className=" mb-4">
        <label htmlFor="textarea" className="font-bold leading-7 text-md text-gray-600">Address</label>
        <textarea className="font-bold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="address" id="address" cols="30" rows="1"></textarea>
        
      </div>
      </div>
      <div className='mx-auto flex '  >
        <div className='px-2 w-1/2 '> 
      <div className=" mb-4">
        <label htmlFor="phone" className=" font-bold  leading-7 text-md text-gray-600">Phone</label>
        <input type="phone" id="phone" name="phone" className="font-bold w-full bg-white  rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'> 
      <div className=" mb-4">
        <label htmlFor="city" className=" font-bold leading-7 text-md text-gray-600">City</label>
        <input type="text" id="city" name="city" className="font-bold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <div className='mx-auto flex '  >
        <div className='px-2 w-1/2 '> 
      <div className=" mb-4">
        <label htmlFor="state" className=" font-bold  leading-7 text-md text-gray-600">State</label>
        <input type="text" id="state" name="state" className="font-bold w-full bg-white  rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'> 
      <div className=" mb-4">
        <label htmlFor="pincode" className=" font-bold leading-7 text-md text-gray-600">Pincode</label>
        <input type="text" id="pincode" name="pincode" className="font-bold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <h2 className='font-bold text-xl my-8 text-center text-rose-600'>Review Cart Items</h2>
      <div className="z-10 sideCart    bg-rose-300 px-8 py-10  ">
    <ol className='list-decimal font-semibold'>
      {Object.keys(props.cart).length == 0 && <div className='my-4 text-lg'>Cart is Empty!</div>}
      {Object.keys(props.cart).map((k)=>{return <li key={k}>
        <div className="item flex">
          <div className="font-semibold">{props.cart[k].name}</div>
          <div className='mx-10  flex items-center text-xl font-semibold justify-ceter w-1/3'><AiFillMinusCircle onClick={()=>{props.removeFromCart(k,1,props.cart[k].price,props.cart[k].size,props.cart[k].varient)}} className='cursor-pointer mx-1 text-3xl text-rose-500'/>{props.cart[k].qty}<AiFillPlusCircle onClick={()=>{props.addToCart(k,1,props.cart[k].price,props.cart[k].size,props.cart[k].varient)}} className=' cursor-pointer mx-1 text-rose-500 text-3xl'/></div>
        </div>
      </li>})}
    </ol>
      <span className='my-5 font-bold '>SubTotal:{props.subTotal}</span>
    </div>
    <div className='my-2'>
    <Link href={'/checkout'}><button className="text-white flex   mx-1 bg-rose-500 border-0  focus:outline-none p-1 hover:bg-rose-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/>
    pay Rs: {props.subTotal}</button></Link>
    </div>
    </div>
  )
}

export default Checkout