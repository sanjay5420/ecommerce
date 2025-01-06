import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userToken: {},
        userDetails: {}
    },
    reducers: {
        loginUser: (state, action) => {
            state.userToken = action.payload
        },

        getUserDetails: (state, action) => {
            state.userDetails = action.payload
          
        }

    },
})


export const { loginUser,getUserDetails } = userSlice.actions

export default userSlice.reducer