'use client'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [product, setProduct] = useState([])
  const router = useRouter()
  const getAllProduct = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products')
    const data = await res.json()
    setProduct(data)
  }

  useEffect(() => {
    getAllProduct()
  }, [])
  return (
    <div className='md:w-[80%] md:ml-auto md:mr-auto w-[90%]  ml-auto mr-auto mt-10'>
      <div className='text-gray-800 font-extrabold text-2xl md:mt-10 mb-5'>Featured Products</div>
      <div className='flex flex-col md:flex-row flex-wrap gap-3 justify-center md:mt-10 md:pb-20'>

        {product?.map((item) => {
          return (
            <div key={item.id} className='px-5 pt-3 bg-gray-50 shadow-xl gap-3 rounded-lg md:w-72 h-96 flex flex-col justify-evenly mb-5 mt-5 border '>
              <div className='flex justify-center' onClick={() => router.push(`/products/${item.id}`)}>
                <Image src={item.image} width={200} height={200} />

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
