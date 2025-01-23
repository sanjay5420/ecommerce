'use client'
import Product from './(unauthenticated)/(modules)/products/page'
import Navbar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import Banner from '@/components/banner/page'
import CategoryMain from '@/components/banner/categoryMain/page'




const Main = () => {

  return (
    <div>
      <Navbar />
      <Banner/>
      <CategoryMain/>
      <div>
      <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
