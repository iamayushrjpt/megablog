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
            state.status = true;
            state.userData = action.payload.userData
        }
        logn: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData
        }
    }
})

export {} authSlice.actions

export default  authSlice.reducer