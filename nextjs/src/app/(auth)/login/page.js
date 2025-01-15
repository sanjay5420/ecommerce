'use client'
import { Button, Input, Card } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/redux/reducerSlices/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()
  const inputRef = useRef()


  const handleSubmit = async () => {
    const values = { email, password }
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL2}/auth/login`, values)
      if (data) {
        router.push('/')
        dispatch(loginUser(data))
        toast.success('Success')
      }
    } catch (error) {
      toast.error('Incorrect Credentials')
      console.log(error?.message)
    }
  }
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])
  const handleRegister = () => {
    router.push("/register")
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className="flex flex-col md:flex-nowrap gap-5 w-96 p-9 items-center">
        <Image src='/m.png' width={200} height={200} />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          ref={inputRef}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <Button className='bg-myColor text-white w-[100%]' onClick={handleSubmit}>Login</Button>
        <p>Don't have an account yet? <Link
          onClick={handleRegister} className='font-bold text-myColor' href={"/register"}>Register Here.</Link> </p>
      </Card>
    </div>
  )
}

export default Login