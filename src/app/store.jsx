import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.jsx";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})
