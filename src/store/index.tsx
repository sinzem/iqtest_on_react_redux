import { configureStore } from '@reduxjs/toolkit';
import menuState from '../components/menu/menuSlice';

const store = configureStore({ 
    reducer: {menuState}, 
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(), 
    devTools: process.env.NODE_ENV !== "production", 
})

export default store;
