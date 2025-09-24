import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: true,
    userData: null,
}

constcreateSlice({
    name: "blog",
    initialState,
    reducers:{
        login: (state, action)
    }
})