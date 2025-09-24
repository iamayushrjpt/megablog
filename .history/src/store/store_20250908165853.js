import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: authS
})

export default store;