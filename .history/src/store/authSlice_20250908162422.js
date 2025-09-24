import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: true,
    userData: null,
}

const authScreateSlice({
    name: "blog",
    initialState,
    reducers:{
        login: (state, action)
    }
})