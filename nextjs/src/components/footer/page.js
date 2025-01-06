import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full shadow-2xl bg-gray-200 mt-16 pt-10 pb-20'>
            <div className='section flex flex-col md:flex-row md:justify-between gap-4'>
                <div className='lg:w-[50%] w-full'><Image src='/m.png' width={100} height={100} />
                    <p className='font-thin text-lg'>Welcome to <b>M</b>, your one-stop destination for all things. We offer a wide range of high-quality products designed to enhance your lifestyle and bring you the best value for your money. We are committed to delivering convenience right to your doorstep.Shop with us and experience top-notch customer service every step of the way. Happy shopping!</p>
                </div>


                <div className='md:w-[25%] w-[100%] flex flex-col justify-evenly '>
                    <span className='underline underline-offset-8 text-xl text-gray-500'>Reach Us</span>
                    <ul className='flex flex-row gap-2 py-4 text-xl'>
                        <li className='text-blue-500'><FaFacebook/></li>
                        <li className='text-orange-800'><FaInstagram/></li>
                        <li className='text-blue-400'><FaTwitter/></li>
                    </ul>
                    <div className='flex flex-col gap-2 '>
                        <Input placeholder='Your Name' />
                        <Input placeholder='Email' />
                        <Button className='w-7 bg-orange-500 text-white'>Subscribe</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
