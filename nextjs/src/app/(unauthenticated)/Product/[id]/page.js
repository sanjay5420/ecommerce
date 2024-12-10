'use client'
import { addToCart } from '@/redux/reducerSlices/cartSlice'
import { Button, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const SingleProduct = ({ params }) => {
    const dispatch = useDispatch()
    const [singleProduct, setSingleProduct] = useState()
    const getProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const data = await res.json()
        setSingleProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className='section'>
            <div>
                <div className='flex p-7'>
                    <div className='w-[50%]'><Image src={singleProduct?.image} width={350} height={350} /></div>
                    <div className='w-[50%] text-2xl font-bold flex flex-col gap-5'>{singleProduct?.title}
                        <p className='font-light text-sm'>{singleProduct?.description}</p>
                        <Button className='w-32' onClick={() => dispatch(addToCart(singleProduct))}>Add to Cart</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct
