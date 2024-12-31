'use client'
import { Image } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className='flex flex-wrap'>
      {products.map((item) => {
        return <div className='p-5 w-48'>
          <Image src={item.images}/>
          {item.title}
          {item.price}
        </div>
      })}
    </div>
  )
}

export default AllProducts
