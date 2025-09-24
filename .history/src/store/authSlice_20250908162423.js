import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: true,
    userData: null,
}

const authSlicreateSlice({
    name: "blog",
    initialState,
    reducers:{
        login: (state, action)
    }
})