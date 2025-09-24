import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: authSlic
})

export default store;