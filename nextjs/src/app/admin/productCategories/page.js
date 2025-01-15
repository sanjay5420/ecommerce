'use client'
import React, { useEffect, useState } from 'react'
import CategoryList from './categoryList'
import CategoryForm from './categoryForm'
import axios from 'axios'
import toast from 'react-hot-toast'


const AdminCategory = () => {
    const [category, setCategory] = useState([])
    const fetchCategories = async () => {
        const { data } = await axios.get('https://api.escuelajs.co/api/v1/categories')
        setCategory(data)
    }

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`)
        fetchCategories()
        if (data) toast.success('Category Deleted Successfully.')
    }
    const handleSubmit = async (values) => {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL2}/categories/`, values)
        if (data) {toast.success(`'${values.name}' category added Successfully.`)
        fetchCategories()
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div>
            <div className='p-5 mt-5 text-2xl font-semibold'>
                All Categories
            </div>
            <CategoryForm handleSubmit={handleSubmit} type='Add' />
            <CategoryList handleDelete={handleDelete} category={category} />

        </div>
    )
}

export default AdminCategory
