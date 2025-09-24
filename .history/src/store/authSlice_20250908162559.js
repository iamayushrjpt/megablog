import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: true,
    userData: null,
}

const authSlice = createSlice({
    name: "blog",
    initialState,
    reducers:{
        login: (state, action) => {
            state.status = true
        }
    }
})