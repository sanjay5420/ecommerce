import Navbar from '@/components/navbar/page'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
