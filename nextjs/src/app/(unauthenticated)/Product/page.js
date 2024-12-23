'use client'
import Footer from '@/components/footer/page'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [product, setProduct] = useState([])
  const router = useRouter()
  const getAllProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProduct(data)
  }

  useEffect(() => {
    getAllProduct()
  }, [])
  return (
    <div>
      <div className='text-gray-800 font-extrabold text-2xl md:mt-10 mb-5'>Featured Products</div>
      <div className='flex flex-col md:flex-row flex-wrap gap-5 justify-center md:mt-10'>

        {product?.map((item) => {
          return (
            <div className='px-5 pt-3 bg-gray-200 shadow-xl gap-3 rounded-lg w-72 h-80 flex flex-col justify-evenly mb-5'>
              <div className='flex justify-center ' onClick={() => router.push(`./Product/${item.id}`)}>
                <Image src={item.image} width={200} height={200} className='' />

              </div>
              <div className='flex flex-col justify-start gap-1 mt-2'>
                <div className='line-clamp-1 font-light'>{item.title}</div>
                <div className='text-xl font-bold text-blue-900'>${item.price}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
