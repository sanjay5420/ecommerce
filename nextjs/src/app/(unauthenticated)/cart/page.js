'use client'
import { removeFromCart } from '@/redux/reducerSlices/cartSlice'
import { Button, Image, Input } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const dispatch = useDispatch()
    const { cartTotal, cartItems } = useSelector(state => state.cart)
    return (
        <div className='section'>
            <div className='md:w-[75%] flex justify-between p-5 shadow-xl items-center'>
                <div className='md:w-[50%]' >Product</div>
                <div className='md:w-[16.67%]'>Quantity</div>
                <div className='md:w-[16.67%]'>Price</div>
                <div className='md:w-[16.67%]'></div>
            </div>
            <div className='flex flex-col md:flex-row '>

                <div className='w-[75%] flex flex-col gap-5 border border-gray-200'>
                    {cartItems.map((item) => {
                        return (
                            <div className='flex justify-evenly gap-5 items-center p-5'>

                                <div className='md:w-[50%] flex gap-3 h-20 items-center' >
                                    <Image src={item.image} width={50} height={50} />
                                    <div>
                                        <p className='line-clamp-1'>{item.title}</p>
                                        <p>{item.category}</p>
                                    </div>


                                </div>
                                <div className='flex justify-center items-center md:w-[16.67%]'>
                                    <button className='p-1' >-</button>
                                    <div className='p-3'>{item.cartQuantity}</div>
                                    <button className='p-1'>+</button>
                                </div>
                                <div className='md:w-[16.67%]'>${item.price}</div>
                                <div className='md:w-[16.67%]'><Button onClick={() => { dispatch(removeFromCart(item)) }}> delete</Button></div>
                            </div>
                        )
                    })}
                </div>

                <div className='w-[25%] flex p-2 '>
                    <div className='border border-gray-200 flex flex-col gap-3 p-3'>
                        <p>Have Coupen?</p>

                        <div className='flex gap-1'>
                            <Input placeholder='Coupen Code' />
                            <Button>Apply</Button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart

