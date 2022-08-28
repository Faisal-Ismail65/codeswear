/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Product from "../models/product"
import mongoose from 'mongoose'
import Sticker from '/public/duck.jpg'
import Link from 'next/link'
const Stickers = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
    {Object.keys(products).length===0 && <p> Sorry!  Stickers are out of Stock. Stay Tunned...</p>}
      {Object.keys(products).map((item)=>{
      
      return<Link passHref={true} key={item._id} href={`/product/${products[item].slug}`}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
        <a className="block relative  rounded overflow-hidden">
          <Image alt="ecommerce" className=" object-top w-full h-full block" src={Sticker} />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].desc}</h3>
          <p className="mt-1">Rs.{products[item] .price}</p>
          <div className="mt-1 border border-solid-black ">
            {products[item].size.includes('S') && <span className='border font-bold border-black px-1 mx-1 text-rose-700'>S</span>}
            {products[item].size.includes('M') && <span className='border font-bold border-black px-1 mx-1 text-rose-700'>M</span>}
            {products[item].size.includes('L') && <span className='border font-bold border-black px-1 mx-1 text-rose-700'>L</span>}
            {products[item].size.includes('Xl') && <span className='border font-bold border-black px-1 mx-1 text-rose-700'>XL</span>}
            {products[item].size.includes('XXL') && <span className='border font-bold border-black px-1 mx-1 text-rose-700'>XXl</span>}
          </div>
          <div className="mt-1 ">
            {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-rose-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
          </div>
        </div>
      </div></Link>})}
      
    </div>
  </div>
</section>
    </div>
  )
}


export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGO_URI);
}
  let products = await Product.find({category:'sticker'});
  let sticker = {};
    for(let item of products){
      if(item.title in Sticker){
       if(!sticker[item.title].color.includes(item.color) && item.availableQty > 0){
          sticker[item.title].color.push(item.color);
       }
       if(!sticker[item.title].size.includes(item.size) && item.availableQty > 0){
        sticker[item.title].size.push(item.size);
       }
      }else{
        sticker[item.title] = JSON.parse(JSON.stringify(item));
        if(item.availableQty > 0){
          sticker[item.title].color = [item.color];
          sticker[item.title].size = [item.size];
          
        }
      }
    }
  return {
    props: {products: JSON.parse(JSON.stringify(sticker))}
  }
}


export default Stickers