'use client'
import { Button, Image, Input, Card } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  const router = useRouter()
  const handleRegister = () => {
    router.push("/register")
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className="flex flex-col md:flex-nowrap gap-5 w-96 p-9 items-center">
        <Image src='ecom2.png' width={200} height={200}></Image>
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter Password" />
        <Button className='bg-myColor text-white w-[100%]'>Login</Button>
        <p>Don't have an account yet? <Link
          onClick={handleRegister} className='font-bold text-myColor' href={"/register"}>Register Here.</Link> </p>
      </Card>
    </div>
  )
}

export default Login