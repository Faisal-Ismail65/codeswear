import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.webp'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
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
    <button className="inline-flex items-center bg-rose-500 font-bold  border-0 py-1 px-3 focus:outline-none hover:text-yellow-900    hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><span className='text-3xl'><AiOutlineShoppingCart/></span>Add To Cart
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header> 
    </div>
  )
}

export default Navbar