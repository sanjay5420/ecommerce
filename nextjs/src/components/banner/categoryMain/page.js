'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CategoryMain = () => {
 const router = useRouter()

  const [category, setCategory] = useState()
  const getAllCategory = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    setCategory(data)
  }
  useEffect(() => {
    getAllCategory()
  }, [])


  return (
    <div className='md:w-[80%] md:ml-auto md:mr-auto w-[90%]  ml-auto mr-auto mt-10'>
      <div className='py-5'>
        <span className='font-sans font-bold text-2xl'>Browse Through The Categories</span>
      </div>
      <div className=' flex flex-col md:flex-row gap-4 py-5'>
        {category?.map((item) => {
          return <div key={item} className='w-full md:w-[25%] p-5 h-32 rounded-3xl md:text-2xl capitalize flex items-center justify-center font-sans font-light transition ease-in-out delay-50 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-200 cursor-pointer' onClick={()=>router.push(`./category/${item}`)} >
            <p className='font-sans font-light'>{item}</p>
          </div>





        })}
      </div>
    </div>
  )
}

export default CategoryMain
