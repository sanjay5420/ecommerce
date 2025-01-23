'use client'
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import TrashForm from './categoryDelete'
import CategoryForm from './categoryForm'

const CategoryList = ({category,handleDelete}) => {
    
    return (
        <div>
            <div className='flex gap-4 justify-center flex-wrap'>
                {category.map((item) => {
                    return <div className='p-5 rounded bg-gray-200 flex flex-col gap-3' key={item}>
                        <Image alt='img' src={item.image} width={150} />
                        <div>
                            {item.name}
                        </div>
                        <div className='flex gap-2'><TrashForm handleDelete={handleDelete} item={item}/>
                         <CategoryForm type='Edit' item={item} />
                         
                         </div>

                    </div>
                })}
            </div>
 
        </div>
    )
}

export default CategoryList
