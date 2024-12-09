
import React from 'react'
import Home from './(unauthenticated)/home/page'
import Navbar from '@/components/navbar/page'


const Main = () => {
  return (
    <div>
      
      <Navbar/>
      <div className='section'>
      <Home/>
      </div>
    </div>
  )
}

export default Main
