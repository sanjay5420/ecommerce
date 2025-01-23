'use client'
import { Button } from '@nextui-org/react'
import React from 'react'

const Contact = () => {
    return (
        <div className='section mt-10 md:flex'>

            <div className='p-5 md:w-[70%] '><iframe className='rounded-xl' width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lalitpur+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>

            <div className='md:w-[30%] p-9 flex flex-col gap-5'>
                <h1 className='text-xl font-semibold'>Feedback</h1>
                <div className='flex flex-col gap-2'>
                    <label>Name</label>
                    <input className='p-2 border border-gray-300 rounded focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' />
                    <label>Email</label>
                    <input className='p-2 border border-gray-300 rounded focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' />
                    <label>Message</label>
                    <textarea className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />

                </div>

                <Button className='bg-orange-400 text-white'>Submit</Button>
            </div>

        </div>)

}

export default Contact
