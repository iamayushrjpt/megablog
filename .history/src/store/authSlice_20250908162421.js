import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: true,
    userData: null,
}

const authcreateSlice({
    name: "blog",
    initialState,
    reducers:{
        login: (state, action)
    }
})