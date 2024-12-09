'use client'
import { Button, Image, Input } from '@nextui-org/react';
import React from 'react'
import { BsCart } from "react-icons/bs";
import SearchIcon from './searchIcon/page';
import { IoHeartOutline } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar1 = () => {
const router = useRouter()

  return (
    <div>
      <div className='container border' >
        <div className='navBar flex justify-between items-center w-[80%] mx-auto' >
          <div><Image src='ecom2.png' width={80} onClick={()=>{router.push('/')}}/></div>
          <div>
            {/* <input placeholder='search' className='bg-gray-200 w-[100%] rounded p-2'></input> */}
            <Input
              classNames={{
                base: "max-w-full sm:max-w-84 h-10",
                mainWrapper: "h-full w-96",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              endContent={<SearchIcon size={25}/>}
              type="search"
              
            />
          </div>

          <div className='flex gap-5 text-md font-bold'>
            <Link href={'/login'}> Login</Link>
            <Link href={'/register'}>SignUp</Link>
            <IoHeartOutline onClick={()=>{router.push('/wishlist')}} className='text-2xl transition-all ease-linear cursor-pointer'/>
            <BsCart onClick={()=>{router.push('/cart')}} className='text-2xl cursor-pointer' />
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default Navbar1
