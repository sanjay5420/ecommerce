import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './reducerSlices/cartSlice'
import  userSlice  from './reducerSlices/userSlice'

export default configureStore({
  reducer: {
    cart : cartSlice,
    user : userSlice
  },
})