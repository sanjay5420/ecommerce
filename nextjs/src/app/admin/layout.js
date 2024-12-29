import Sidebar from '@/components/sidebar/page'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar/>
      {children}
    </div>
  )
}

export default AdminLayout