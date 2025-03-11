import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'

export const store = configureStore({
    reducer: {user: userReducer},
    middleware:(getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: false
    }),
})