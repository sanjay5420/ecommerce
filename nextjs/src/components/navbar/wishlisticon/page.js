import React,{useState} from 'react'
import { FaHeart } from "react-icons/fa";
const Heart = () => {
    let [color,setColor] = useState('grey')
    const changeColor= () => {
        setColor(color === 'grey' ? 'red' : 'grey')
    }
  return (
    <div>
      <FaHeart className='text-2xl transition-all ease-linear' color={color} onClick={changeColor} />
    </div>
  )
}

export default Heart
