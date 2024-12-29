import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
         
        </div>
    )
}

export default Layout
