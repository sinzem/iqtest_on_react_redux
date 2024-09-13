import { configureStore } from '@reduxjs/toolkit';
import menuState from '../components/menu/menuSlice';
import testPageActive from '../pages/test/testPageSlice';

const store = configureStore({ 
    reducer: {menuState, testPageActive}, 
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(), 
    devTools: process.env.NODE_ENV !== "production", 
})

export default store;
