import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.webp'
import { AiOutlineShoppingCart,AiFillCloseCircle } from 'react-icons/ai';
import {GrClose} from 'react-icons/gr'
const Navbar = () => {
  const toggleCart = () =>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'}>
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={logo} alt='logo'></Image>
    </a>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={'/tshirts'}><a className="mr-5 text-rose-600 font-bold hover:text-gray-900">T-Shirts</a></Link>
      <Link href={'/hoodies'}><a className="mr-5 text-rose-600 font-bold hover:text-gray-900">Hoodies</a></Link>
      <Link href={'/stickers'}><a className="mr-5 text-rose-600 font-bold hover:text-gray-900">Stickers</a></Link>
      <Link href={'/mugs'}><a className="mr-5 text-rose-600 font-bold hover:text-gray-900">Mugs</a></Link>
    </nav>
    <button onClick={toggleCart} className="inline-flex items-center bg-rose-500 font-bold  border-0 py-1 px-3 focus:outline-none hover:text-yellow-900    hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><span className='text-3xl'><AiOutlineShoppingCart/></span>Add To Cart
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    <div ref={ref} className="w-72  sideCart absolute bg-rose-300 top-5 right-0 px-8 py-10 transform transition-transform translate-x-full">
    <h2 className='font-bold text-2xl '>Shopping Cart</h2>
    <span onClick={toggleCart} className='absolute right-4 top-2 text-2xl cursor-pointer text-rose-600'><AiFillCloseCircle/></span>
    <ol className='list-decimal font-semibold'>
      <li>
        <div className="item flex">
          <div className="w-2/3 font-semibold">T-Shirt</div>
          <div className='flex items-center font-semibold justify-ceter w-1/3'>1</div>
        </div>
      </li>
      <li>
        <div className="item flex">
          <div className="w-2/3 font-semibold">T-Shirt</div>
          <div className='flex items-center font-semibold justify-ceter w-1/3'>1</div>
        </div>
      </li>
      <li>
        <div className="item flex">
          <div className="w-2/3 font-semibold">T-Shirt</div>
          <div className='flex items-center font-semibold justify-ceter w-1/3'>1</div>
        </div>
      </li>
      <li>
        <div className="item flex">
          <div className="w-2/3 font-semibold">T-Shirt</div>
          <div className='flex items-center font-semibold justify-ceter w-1/3'>1</div>
        </div>
      </li>
    </ol>
</div>
  </div>
</header> 

    </div>
  )
}

export default Navbar