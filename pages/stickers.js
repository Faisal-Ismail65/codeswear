import React from 'react'
import Image from 'next/image'
import liverpool from '/public/t-shirt.jpg'
import city from '/public/city.png'
import united from '/public/united.jpg'
import totenham from '/public/totenham.png'
import chelsea from '/public/chelseahome.jpg'
import arsenal from '/public/arsenal.jpg'
import leicester from '/public/leicester.png'
import  wolver from '/public/wolver.jpg'
import Link from 'next/link'

const Stickers = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={liverpool} width={500} height={450} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Liverpool</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div></Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={city} width={500} height={450} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Manchester City</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div></Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={united} width={500} height={450} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Manchester United</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div></Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={totenham} width={500} height={450} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Tottenham</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      </Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={chelsea} width={400} height={400} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Chelsea</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div></Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={arsenal} width={500} height={450} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Arsenal</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div></Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={leicester} width={500} height={450} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Leicester</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div></Link>
      <Link href={'/product/wear-the-code'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={wolver} width={550} height={600} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">WolverHamton</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div></Link>
    </div>
  </div>
</section>
    </div>
  )
}

export default Stickers