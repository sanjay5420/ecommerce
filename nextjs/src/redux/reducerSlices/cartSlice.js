
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { TiWarning } from "react-icons/ti";

// typeof window !== 'undefined' && 
const initialState = {
    cartItems: [],
    cartTotal: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const tempProduct = { ...action.payload, cartQuantity: 1 }
            const nextCartItem = state.cartItems.find((item) => {
                if (item.id === action.payload.id) {
                    return item
                }
            })
            if (nextCartItem) {
                return
            } else {
                state.cartItems.push(tempProduct)
                toast.success(`Product added to Cart.`)
            }



        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => {
                if (item.id !== action.payload.id) {
                    return item
                }

            })
            toast.success(`Product removed from Cart.`)
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity < 5) state.cartItems[itemIndex].cartQuantity += 1
      else{
   
        toast('Product Quantity is limited to 5.', {
            icon: '⚠️',
          });
      
      }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) state.cartItems[itemIndex].cartQuantity -= 1
    
        }

    },

})


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer