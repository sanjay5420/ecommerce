'use client'
import { addToCart } from '@/redux/reducerSlices/cartSlice'
import { Button, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const SingleProduct = ({ params }) => {
    const dispatch = useDispatch()
    const [singleProduct, setSingleProduct] = useState()
    const getProduct = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products/${params.id}`)
        const data = await res.json()
        setSingleProduct(data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className='section'>
            <div>
                <div className='flex flex-col md:flex-row p-7 justify-center items-center p-10 mt-10'>
                    <div className='md:w-[50%] flex justify-center items-center'><Image src={singleProduct?.image} width={300} height={300} /></div>
                    <div className='md:w-[50%] text-2xl font-bold flex flex-col gap-5'>{singleProduct?.title}
                        <p className='font-light text-sm'>{singleProduct?.description}</p>
                        <Button className='w-32' onClick={() => dispatch(addToCart(singleProduct))}>Add to Cart</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct
