import { Image } from '@nextui-org/react'
import React from 'react'

const Banner = () => {
    return (
        <div className=' md:py-20'>
            <div className='section flex flex-col-reverse md:flex-row p-10 md:py-16 justify-center items-center mt-10 md:mt-0 bg-gradient-to-l from-orange-300 to-gray-50 rounded-3xl'>
                <div className='w-full md:w-[50%] mt-10 flex flex-col gap-5'>
                   <span className='text-3xl '>Your One Stop Shop.</span> 
                    <p>Your one-stop destination for all things. We offer a wide range of high-quality products designed to enhance your lifestyle and bring you the best value for your money.</p>
                </div>
                <div className='w-full md:w-[50%] flex justify-end items-center'>
                    <img className='' alt='banner' src='/banner.png' width={400}/>
                </div>
            </div>
        </div>
    )
}

export default Banner
