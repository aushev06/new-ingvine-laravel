import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "../features/cart/cartSlice";
import cityReducer from "../features/city/citySlice";
import loginReducer from "../features/loginSlice";
import userReducer from "../features/userSlice";
import {categoryApi} from "../redux/api/category";
import {cartApi} from "../redux/api/cart";
import {authApi} from "../redux/api/auth";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import settingsReducer from "../features/city/settingsSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        cart: cartReducer,
        city: cityReducer,
        login: loginReducer,
        user: userReducer,
        settings: settingsReducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(categoryApi.middleware).concat(cartApi.middleware).concat(authApi.middleware),
})

setupListeners(store.dispatch)
