import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userToken: {},
        userDetails: {},
        isLoggedIn:false
    },
    reducers: {
        loginUser: (state, action) => {
            state.userToken = action.payload
            state.isLoggedIn = true
        },

        getUserDetails: (state, action) => {
            state.userDetails = action.payload
        },
        logoutUser: (state, action) => {
            state.userToken = {}
            state.userDetails={}
            state.isLoggedIn = false
        },

    },
})


export const { loginUser,getUserDetails,logoutUser } = userSlice.actions

export default userSlice.reducer