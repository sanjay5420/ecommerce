
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
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
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
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
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity < 5) state.cartItems[itemIndex].cartQuantity += 1
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) state.cartItems[itemIndex].cartQuantity -= 1
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }

    },

})


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer