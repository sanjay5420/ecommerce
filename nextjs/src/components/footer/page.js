import { Button, Image, Input } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full shadow-2xl bg-teal-300 mt-10 pb-5'>
            <div className='section flex flex-col md:flex-row md:justify-between gap-4'>
                <div className='lg:w-[50%] w-full p-4'><Image src='m.png' width={100} height={100} />
                    <p>Welcome to <b>M</b>, your one-stop destination for all things. We offer a wide range of high-quality products designed to enhance your lifestyle and bring you the best value for your money. We are committed to delivering convenience right to your doorstep.Shop with us and experience top-notch customer service every step of the way. Happy shopping!</p>
                </div>


                <div className='md:w-[25%] w-[100%] flex flex-col justify-evenly '>
                    <span className='underline underline-offset-8'>Reach Us</span>
                    <ul className='flex flex-row gap-2 p-4'>
                        <li>fb</li>
                        <li>insta</li>
                        <li>x</li>
                    </ul>
                    <div className='flex flex-col gap-1'>
                        <Input placeholder='Your Name' />
                        <Input placeholder='Email' />
                        <Button className='w-7'>Subscribe</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
