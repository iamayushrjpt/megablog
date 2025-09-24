import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:  {
       auth: a
    }
})

export default store;