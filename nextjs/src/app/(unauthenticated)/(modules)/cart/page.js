'use client'
import { increaseQuantity, removeFromCart, decreaseQuantity } from '@/redux/reducerSlices/cartSlice'
import { Button, Image, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const dispatch = useDispatch()
    const [productTotal, setProductTotal] = useState()
    const [discount, setDiscount] = useState(10)
    const {cartItems} = useSelector(state => state.cart)

    const subTotal = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.cartQuantity
        }, 0)
        setProductTotal(total.toFixed(0))
    }
    useEffect(() => {
        subTotal()
    }, [cartItems])
    return (
        <div className='section mt-8'>
            <div className='md:w-[75%] flex justify-between p-5 gap-5 shadow-md items-center collapse md:visible'>
                <div className='md:w-[50%]' >Product</div>
                <div className='md:w-[25%]'>Quantity</div>
                <div className='md:w-[25%]'>Price</div>

            </div>
            <div className='flex flex-col lg:flex-row '>

                <div className='md:w-[75%] flex flex-col gap-5 mt-5 border border-gray-200'>
                    {cartItems.length > 0 ? cartItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className='flex flex-col md:flex-row justify-evenly gap-5 md:items-center p-5 border border-gray-200'>

                                    <div className='md:w-[50%] flex gap-3 h-20 items-center' >
                                        <Image src={item.image} width={50} height={50} />
                                        <div>
                                            <p className='md:line-clamp-1'>{item.title}</p>
                                            <p className='text-orange-400 italic capitalize'>{item.category}</p>
                                            <FaTrash onClick={() => { dispatch(removeFromCart(item)) }} />
                                        </div>
                                    </div>
                                    <div className='flex items-center md:w-[25%]'>
                                        <button className='p-1' onClick={() => dispatch(decreaseQuantity(item))} >-</button>
                                        <div className='p-3'>{item.cartQuantity}</div>
                                        <button className='p-1' onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                    </div>
                                    <div className='md:w-[25%] '>${item.cartQuantity * item.price.toFixed(0)}</div>

                                </div>


                            </div>
                        )
                    }) : (<div className='font-sans text-3xl p-5 flex justify-center mt-10'><p>Your Cart is Empty</p></div>)}
                </div>

                <div className='lg:w-[25%]  flex p-2 '>
                    <div className='border border-gray-200 flex flex-col gap-5 p-3'>

                        <div>
                            <p className='mb-2'>Have Coupen?</p>
                            <div className='flex gap-1'>

                                <Input placeholder='Coupen Code' />
                                <Button>Apply</Button>
                            </div>
                        </div>
                        <div className='flex justify-between gap-3'>
                            <div className='text-gray-500'>
                                <div>SubTotal:</div>
                                <div>Shipping: </div>
                                <div>Total:</div>
                            </div>
                            <div>
                                <div className='text-gray-700'> $ {productTotal}</div>
                                <div className='text-gray-700'>$ {discount}</div>
                                <div className='text-xl font-semibold'>$ {productTotal == 0 ? productTotal : productTotal * 1 + discount}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart

