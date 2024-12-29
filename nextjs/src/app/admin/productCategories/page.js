import React from 'react'
import CategoryList from './categoryList'

const AdminCategory = () => {
    return (
        <div>
            <div className='p-5 mt-5 text-2xl font-semibold'>
                All Categories
            </div>
            <CategoryList />

        </div>
    )
}

export default AdminCategory
