
import { createSlice } from '@reduxjs/toolkit'

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
            }



        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => {
                if (item.id !== action.payload.id) {
                    return item
                }

            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

    },
})


export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer