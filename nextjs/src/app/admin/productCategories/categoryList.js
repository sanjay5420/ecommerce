'use client'
import { Image } from '@nextui-org/react'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import TrashForm from './categoryDelete'
import toast from 'react-hot-toast'

const CategoryList = () => {
    const [category, setCategory] = useState([])
    const fetchCategories = async () => {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/categories')
        setCategory(data)
    }

    const handleDelete = async(id) => {
        const {data} = await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`)
        fetchCategories()
        if(data) toast.success('Category Deleted Successfully.')
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <div className=''>
            {/* {JSON.stringify(category)} */}
            <div className='flex gap-4 justify-center flex-wrap'>
                {category.map((item) => {
                    return <div className='p-5 rounded bg-gray-200 flex flex-col gap-3'>
                        <Image src={item.image} width={150} />
                        <div>
                            {item.name}
                        </div>
                        <div className='flex gap-2'><TrashForm handleDelete = {handleDelete} category = {item}/> <FaEdit /></div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default CategoryList
