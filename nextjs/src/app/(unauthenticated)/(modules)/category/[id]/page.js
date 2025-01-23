'use client'
import { Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Category = ({params}) => {
  const router = useRouter()
  const [category, setCategory] = useState()
  const getCategory = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/products/category/${params.id}`)
    const data = await res.json()
    setCategory(data)
  }
  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div className='section'>
     <div className='text-gray-800 font-semibold text-2xl md:mt-10 mb-5 capitalize underline underline-offset-8'>{params.id.replace(/%20/g, ' ').replace(/[^a-zA-Z\s]/g, '')}</div>
      <div className='flex flex-col md:flex-row flex-wrap gap-5 justify-center md:mt-10'>
        {category?.map((item) => {
          return <div key={item} className='px-5 pt-3 bg-gray-50 shadow-xl gap-3 rounded-lg w-72 h-96 flex flex-col justify-evenly mb-5 mt-5 border '>
            <div className='flex justify-center ' onClick={() => router.push(`/products/${item.id}`)}>
              <Image src={item.image} alt='img' width={200} height={200} />

            </div>
            <div className='flex flex-col justify-start gap-1 mt-2'>
              <div className='line-clamp-1 font-light'>{item.title}</div>
              <div className='text-xl font-bold text-blue-900'>${item.price}</div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Category
