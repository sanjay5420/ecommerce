
import React from 'react'
import Product from './(unauthenticated)/Product/page'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'


const Main = () => {
  return (
    <div>
      
      <Navbar/>
      <div className='section'>
      <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
