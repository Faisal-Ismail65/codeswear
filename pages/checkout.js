import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import {BsFillBagCheckFill ,BsFillBagXFill} from 'react-icons/bs'
const Checkout = (props) =>{ 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) =>{
      if(e.target.name == 'name'){
        setName(e.target.value);
      }else if(e.target.name == 'email'){
        setEmail(e.target.value);
      }else if(e.target.name == 'address'){
        setAddress(e.target.value);
      }else if(e.target.name == 'phone'){
        setPhone(e.target.value);
      }else if(e.target.name == 'pincode'){
        setPincode(e.target.value);
      }
      if(name.length > 3 && email.length > 3 && address.length > 3 && phone.length > 3 && pincode.length > 3 ){ 
        console.log(disabled);
        setDisabled(false);
      }
      
  }
return (
  
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center text-rose-600'>Checkout</h1>
      <h2 className='font-bold text-xl my-8 text-center text-rose-600'>Delivery Details</h2>
      <div className='mx-auto flex '  >
        <div className='px-2 w-1/2 '> 
      <div className=" mb-4">
        <label htmlFor="name" className=" font-bold  leading-7 text-md text-gray-700">Name</label>
        <input onChange={handleChange} value={name} type="text " id="name" name="name" className="font-semibold w-full bg-white  rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'> 
      <div className=" mb-4">
        <label htmlFor="email" className=" font-bold leading-7 text-md text-gray-700">Email</label>
        <input onChange={handleChange} value={email} type="email" id="email" name="email" className="font-semibold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <div className='px-2 w-full'> 
      <div className=" mb-4">
        <label htmlFor="textarea" className="font-bold leading-7 text-md text-gray-700">Address</label>
        <textarea onChange={handleChange} value={address}  className="font-semibold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="address" id="address" cols="30" rows="1"></textarea>
        
      </div>
      </div>
      <div className='mx-auto flex '  >
        <div className='px-2 w-1/2 '> 
      <div className=" mb-4">
        <label  htmlFor="phone" className=" font-bold  leading-7 text-md text-gray-700">Phone</label>
        <input onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="font-semibold w-full bg-white  rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'> 
      <div className=" mb-4">
      <label htmlFor="pincode" className=" font-bold leading-7 text-md text-gray-700">Pincode</label>
        <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="font-semibold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        
        </div>
      </div>
      </div>
      <div className='mx-auto flex '  >
        <div className='px-2 w-1/2 '> 
      <div className=" mb-4">
        <label htmlFor="state" className=" font-bold  leading-7 text-md text-gray-700">State</label>
        <input readOnly={true} type="text" id="state" name="state" className="font-semibold w-full bg-white  rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'> 
      <div className=" mb-4">
      <label htmlFor="city" className=" font-bold leading-7 text-md text-gray-700">City</label>
        <input readOnly={true} type="text" id="city" name="city" className="font-semibold  w-full bg-white rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <h2 className='font-bold text-xl my-8 text-center text-rose-600'>Review Cart Items</h2>
      <div className="z-10 sideCart    bg-rose-300 px-8 py-10  ">
    <ol className='list-decimal font-semibold'>
      {Object.keys(props.cart).length == 0 && <div className='my-4 text-lg'>Cart is Empty!</div>}
      {Object.keys(props.cart).map((k)=>{return <li key={k}>
        <div className="item flex">
          <div className="font-semibold">{props.cart[k].name}({props.cart[k].size}/{props.cart[k].varient})</div>
          <div className='mx-10  flex items-center text-xl font-semibold justify-ceter w-1/3'><AiFillMinusCircle onClick={()=>{props.removeFromCart(k,1,props.cart[k].price,props.cart[k].size,props.cart[k].varient)}} className='cursor-pointer mx-1 text-3xl text-rose-500'/>{props.cart[k].qty}<AiFillPlusCircle onClick={()=>{props.addToCart(k,1,props.cart[k].price,props.cart[k].size,props.cart[k].varient)}} className=' cursor-pointer mx-1 text-rose-500 text-3xl'/></div>
        </div>
      </li>})}
    </ol>
      <span className='my-5 font-bold '>SubTotal:{props.subTotal}</span>
    </div>
    <div className='my-2'>
    <Link href={'/checkout'}><button  className="disabled:bg-rose-300   text-white flex   mx-1 bg-rose-500 border-0  focus:outline-none p-1 hover:bg-rose-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/>
    pay Rs: {props.subTotal}</button></Link>
    </div>
    </div>
  )
}

export default Checkout