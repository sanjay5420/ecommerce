import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './reducerSlices/counterSlice'
import  cartSlice  from './reducerSlices/cartSlice'

export default configureStore({
  reducer: {
    counter : counterSlice,
    cart : cartSlice
  },
})