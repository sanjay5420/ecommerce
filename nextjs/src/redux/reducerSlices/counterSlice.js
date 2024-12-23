
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value === 10) {
                return
            } else {
                state.value += 1
            }

        },
        decrement: (state) => {
            if (state.value <= 0) {
                return
            } else {
                state.value -= 1
            }
        },

    },
})


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer